import { EventEmitter, OnChanges } from '@angular/core';
import { TableDataService } from '../table-data.service';
export declare class TableRowComponent implements OnChanges {
    private tableDataService;
    data: any;
    isEditable: Boolean;
    isEditing: Boolean;
    select: EventEmitter<any>;
    _data: any;
    deleteActivated: boolean;
    constructor(tableDataService: TableDataService);
    ngOnChanges(): void;
    elementSelected(): void;
    trackColumn(index: any, item: any): any;
    getColumnsData(): string[];
    getColumnTypeByKey(key: any): String;
    getColumnIsEditableByKey(key: any): Boolean;
    cancel(): void;
    edit(): void;
    save(type: any): Promise<void>;
    delete(): void;
}
