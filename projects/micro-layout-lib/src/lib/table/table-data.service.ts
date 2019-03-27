import {Injectable} from '@angular/core';
import {Ng2OrderPipe} from 'ng2-order-pipe';

import {TableMessagingService} from './table-messaging.service';

import {ArrayToChunksPipe} from '../pipes/array.pipe';

import {
    Table,
    TableRow,
    TableSchema
} from './table.interface';
import {Subject} from 'rxjs';
import {TableService} from './table.service';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';


@Injectable()
export class TableDataService {
    public readonly dataChange: Subject<any> = new Subject();
    public readonly elementSelected$: Subject<any> = new Subject();

    protected tableData: Subject<Table> = new Subject();
    protected _tableData: Table;
    protected schema: TableSchema;

    protected orderBy: String;
    protected orderDir = false;
    protected limit = 100;
    protected pageNumber = 0;
    private data: Array<Array<TableRow>>;
    private _data: Array<TableRow>;

    constructor(private tableMessagingService: TableMessagingService,
                private tableService: TableService,
                private arrayToChunksPipe: ArrayToChunksPipe,
                private ng2OrderPipe: Ng2OrderPipe) {
    }

    setLimit(limit: number) {
        this.limit = limit;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this._data), this._getLimit());
        this.changeData();
    }

    getHeaders(): TableSchema {
        return this.schema;
    }

    generateId(index: number) {
        return Math.round((new Date()).getTime() / 1000) + index;
    }

    setData(data: Array<TableRow>, schema: TableSchema) {
        this._data = data.map((item, index) => {
            item._id = this.generateId(index);
            return item;
        });
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(schema, this._data), this._getLimit());
        this.schema = schema;
        this.changeData();
    }

    getData(): Subject<Table> {
        return this.tableData;
    }

    goToPage(pageNumber: number) {
        this.pageNumber = pageNumber;
        this.changeData();
    }

    protected changeData() {
        const data = this.data[this.pageNumber];
        this._tableData = {
            currentPage: this.pageNumber,
            data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        this.tableData.next(this._tableData);
    }

    protected _getLimit() {
        if (this.limit) {
            return this.limit;
        } else {
            return this._data.length;
        }
    }

    protected setColumns(schema: TableSchema, rows: Array<any>): Array<TableRow> {
        const newRows: Array<any> = [];
        const fields = Object.keys(schema);

        rows.forEach((oldRow) => {
            const existingColumns = Object.keys(oldRow);
            fields.filter(item => !existingColumns
                .includes(item))
                .forEach(item => oldRow[item] = schema[item].defaultValue);
            newRows.push(oldRow);
        });

        return newRows;
    }

    itemEdit(data) {
        this.data = this.data
            .map(item => {
                if (item['_id'] === data.row._id) {
                    return data.row;
                }
                return item;
            });

        this.dataChange.next({
            type: 'edit',
            data: data.row
        });
    }

    async itemDelete(id: number) {
        const { deleteCallback } = this.tableService.getOptions();

        const index = this._data
            .findIndex(item => item._id === id);

        if (index > -1) {
            const result = await deleteCallback(this._data[index]);
            console.log(result);
            this._data.splice(index, 1);
        }

        this.dataChange.next({
            data: id,
            type: 'delete'
        });
    }

    reorder(orderBy: string) {
        this.orderBy === orderBy ? this.orderDir = !this.orderDir : this.orderBy = orderBy;

        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(
                this.schema,
                this.ng2OrderPipe
                    .transform(this._data, this.orderBy, this.orderDir)),
                this._getLimit());

        this.changeData();
    }
}
