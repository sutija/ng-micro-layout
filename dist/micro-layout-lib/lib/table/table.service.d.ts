import { TableOptions } from './table.interface';
import { Observable } from 'rxjs';
export declare class TableService {
    protected _tableOptions: TableOptionsArray;
    protected isReordable: any;
    setTableOptions(tableID: string, tableOptions: TableOptions): void;
    getTableOptions(): Observable<TableOptionsArray>;
}
export interface TableOptionsArray {
    [index: string]: TableOptions;
}
