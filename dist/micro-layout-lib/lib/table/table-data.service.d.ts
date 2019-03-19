import { Ng2OrderPipe } from 'ng2-order-pipe';
import { TableMessagingService } from './table-messaging.service';
import { ArrayToChunksPipe } from '../pipes/array.pipe';
import { Table, TableRow, TableSchema } from './table.interface';
import { Subject } from 'rxjs';
/**
 * @todo Create
 */
export declare class TableDataService {
    private tableMessagingService;
    private arrayToChunksPipe;
    private ng2OrderPipe;
    readonly dataChange: Subject<any>;
    readonly elementSelected$: Subject<any>;
    protected tableData: Subject<Table>;
    protected _tableData: Table;
    protected schema: TableSchema;
    protected tableId: string;
    protected callbacks: {
        type: string;
        message: string;
        callback: (data: any) => void;
    }[];
    protected orderBy: String;
    protected orderDir: boolean;
    protected limit: number;
    protected pageNumber: number;
    private data;
    private _data;
    constructor(tableMessagingService: TableMessagingService, arrayToChunksPipe: ArrayToChunksPipe, ng2OrderPipe: Ng2OrderPipe);
    setTableId(tableId: any): string;
    setLimit(limit: number): void;
    getLimit(): number;
    getHeaders(): TableSchema;
    getRows(): TableRow[][];
    setData(data: Array<TableRow>, schema: TableSchema): void;
    getData(): Subject<Table>;
    goToPage(pageNumber: number): void;
    getNumberOfPages(): number;
    protected changeData(): void;
    protected _getLimit(): number;
    protected setColumns(schema: TableSchema, rows: Array<any>): Array<TableRow>;
    protected itemEdit(data: any): void;
    protected itemDelete(id: any): void;
    protected resolveItemPagePosition(item: any): void;
    protected reorder(orderBy: any): void;
}
