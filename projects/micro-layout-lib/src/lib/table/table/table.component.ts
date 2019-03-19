/**
 * @todo Do not sort when edit is activated
 */
import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  ElementRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import {TableService} from '../table.service';


import {
  TableRow,
  TableOptions, Table
} from '../table.interface';

import {DEFAULT_TABLE_OPTIONS, PAGINATION} from '../table.constants';
import {TableDataService} from '../table-data.service';
import {TableMessagingService} from '../table-messaging.service';

@Component({
  selector: 'ml-table, [ml-table]',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableDataService, TableService, TableMessagingService]
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() tableID = 'default';
  @Input() data: Array<TableRow>;
  @Input() tableOptions: TableOptions;
  @Input() tableLimit: number;
  @Input() numberOfPages: number; // Only if we have external page handler
  @Input() pageNumber: number; // Only if we have external page handler
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() pageChange: EventEmitter<any> = new EventEmitter();
  @Output() numberOfItemsChange: EventEmitter<number> = new EventEmitter();
  @Input() isLoading: Boolean = false;

  header;
  container;
  currentPage;
  numOfPages;

  dataChange$;
  getData$;

  constructor(private tableDataService: TableDataService,
              private tableService: TableService,
              protected el: ElementRef) { }

  ngOnInit() {
    this.tableDataService.setTableId(this.tableID);

    if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
      this.tableDataService.setLimit(this.tableLimit);
    }

    // On data update
    this.dataChange$ = this.tableDataService.dataChange.subscribe(data => {
      // Emit new data
      if (data.type === 'edit') {
        this.update.emit(data.data);
      }
      if (data.type === 'delete') {
        this.delete.emit(data.data);
      }
    });

    // On new data
    this.getData$ = this.tableDataService
        .getData()
        .subscribe({
          next: (newData) => {
            this.header = newData.header;
            this.container = newData.data;
            if (this.tableOptions.isInternalPagination) {
              this.numOfPages = newData.numberOfPages;
              this.currentPage = newData.currentPage;
            }
          }
        });

    if (!this.tableOptions.isInternalPagination) {
      this.currentPage = 0;
    }

    this.tableDataService.setData(this.data, this.tableOptions.schema);
  }

  ngOnChanges(changes) {
    if (changes.tableOptions) {
      this.tableService.setTableOptions(this.tableID, this.tableOptions);
      this.tableOptions = Object.assign({}, DEFAULT_TABLE_OPTIONS, this.tableOptions);
    }

    if (changes.data) {
      this.tableDataService.setData(this.data, this.tableOptions.schema);
    }

    if (changes.numberOfPages) {
      this.numOfPages = this.numberOfPages;
    }

    if (changes.pageNumber) {
      this.currentPage = this.pageNumber;
    }

    if (changes.tableLimit) {
      console.log('table limit', changes.tableLimit);
      this.tableDataService.setLimit(changes.tableLimit.currentValue);
    }
  }

  getCurrentPage() {
    return this.currentPage + 1;
  }

  onChangeNumberOfItems(numOfItems) {
    this.tableLimit = numOfItems;
    this.tableDataService.setLimit(this.tableLimit);
    this.numberOfItemsChange.emit(numOfItems);
  }

  onNextPage() {
    if (this.tableOptions.isInternalPagination) {
      const newPage = this.currentPage + 1;
      this.tableDataService.goToPage(newPage);
    } else {
      this.pageChange.emit({
        direction: PAGINATION.NEXT,
      });
    }
  }

  onPreviousPage() {
    if (this.tableOptions.isInternalPagination) {
      const newPage = this.currentPage - 1;
      this.tableDataService.goToPage(newPage);
    } else {
      this.pageChange.emit({
        direction: PAGINATION.PREVIOUS,
      });
    }
  }

  ngOnDestroy() {
    this.dataChange$.unsubscribe();
    this.getData$.unsubscribe();
  }
}
