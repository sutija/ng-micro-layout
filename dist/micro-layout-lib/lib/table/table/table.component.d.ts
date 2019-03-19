/**
 * @todo Do not sort when edit is activated
 */
import { OnInit, OnChanges, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { TableService } from '../table.service';
import { TableRow, TableOptions } from '../table.interface';
import { TableDataService } from '../table-data.service';
export declare class TableComponent implements OnInit, OnChanges, OnDestroy {
    private tableDataService;
    private tableService;
    protected el: ElementRef;
    tableID: string;
    data: Array<TableRow>;
    tableOptions: TableOptions;
    tableLimit: number;
    numberOfPages: number;
    pageNumber: number;
    update: EventEmitter<any>;
    delete: EventEmitter<number>;
    pageChange: EventEmitter<any>;
    numberOfItemsChange: EventEmitter<number>;
    isLoading: Boolean;
    header: any;
    container: any;
    currentPage: any;
    numOfPages: any;
    dataChange$: any;
    getData$: any;
    constructor(tableDataService: TableDataService, tableService: TableService, el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    getCurrentPage(): any;
    onChangeNumberOfItems(numOfItems: any): void;
    onNextPage(): void;
    onPreviousPage(): void;
    ngOnDestroy(): void;
}
