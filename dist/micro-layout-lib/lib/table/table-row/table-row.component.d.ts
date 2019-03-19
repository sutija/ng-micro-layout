import { EventEmitter, OnChanges } from '@angular/core';
import { TableMessagingService } from '../table-messaging.service';
import { TableDataService } from '../table-data.service';
export declare class TableRowComponent implements OnChanges {
    private tableMessagingService;
    private tableDataService;
    data: any;
    isEditable: Boolean;
    isEditing: Boolean;
    deleteActivated: Boolean;
    select: EventEmitter<any>;
    /**
     * Local data
     */
    _data: any;
    constructor(tableMessagingService: TableMessagingService, tableDataService: TableDataService);
    ngOnChanges(): void;
    elementSelected(): void;
    trackColumn(index: any, item: any): any;
    getColumnsData(): string[];
    getColumnTypeByKey(key: any): String;
    getColumnIsEditableByKey(key: any): Boolean;
    getDataByKey(key: any): any;
    cancel(): void;
    edit(): void;
    save(): void;
    delete(): void;
}
