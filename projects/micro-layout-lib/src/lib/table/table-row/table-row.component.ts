import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {TableMessagingService} from '../table-messaging.service';
import {TableDataService} from '../table-data.service';
import {CONTEXTS, MESSAGES} from '../table.constants';

@Component({
  selector: 'ml-table-row, [ml-table-row]',
  templateUrl: './table-row.component.html',
})
export class TableRowComponent implements OnChanges {
  @Input() data;
  @Input() isEditable: Boolean = false;
  @Input() isEditing: Boolean = false;
  @Input() deleteActivated: Boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter();

  /**
   * Local data
   */
  public _data;

  constructor(private tableMessagingService: TableMessagingService,
              private tableDataService: TableDataService) {
  }

  ngOnChanges() {
    /**
     * Clone global data to local data
     */
    this._data = Object.assign({}, this.data);
  }

  elementSelected() {
    this.tableDataService.elementSelected$.next(this._data);
  }

  trackColumn(index, item) {
    if (!item) {
      return null;
    }

    return index;
  }

  getColumnsData() {
    return Object.keys(this.tableDataService.getHeaders());
  }

  getColumnTypeByKey(key): String {
    return this.tableDataService.getHeaders()[key].type;
  }

  getColumnIsEditableByKey(key): Boolean {
    return this.tableDataService.getHeaders()[key].isEditable;
  }

  getDataByKey(key) {
    return this.data[key];
  }

  cancel() {
    this._data = Object.assign({}, this.data);
    this.isEditing = false;
  }

  edit() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.tableMessagingService.notify({
        type: CONTEXTS.DEFAULT,
        message: MESSAGES.ITEM_EDIT_STARTED
      });
    }
  }

  save() {
    this.isEditing = false;

    this.tableMessagingService.notify({
      type: CONTEXTS.DEFAULT,
      message: MESSAGES.ITEM_EDIT,
      data: {
        row: this._data
      }
    });
  }

  delete() {
    this.deleteActivated = !this.deleteActivated;
    this.tableMessagingService.notify({
      type: CONTEXTS.DEFAULT,
      message: MESSAGES.ITEM_DELETE,
      data: this._data
    });
  }
}
