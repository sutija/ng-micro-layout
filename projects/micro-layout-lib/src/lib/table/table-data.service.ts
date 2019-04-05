import {Injectable} from '@angular/core';
import {Ng2OrderPipe} from 'ng2-order-pipe';
import {Subject} from 'rxjs';

import {TableMessagingService} from './table-messaging.service';
import {ArrayToChunksPipe} from '../pipes/array.pipe';
import {
    DataChange,
    Table,
    TableRow,
    TableSchema
} from './table.interface';
import {TableService} from './table.service';


@Injectable()
export class TableDataService {
    public readonly dataChange: Subject<DataChange> = new Subject();
    public readonly elementSelected$: Subject<any> = new Subject();

    protected tableData: Subject<Table> = new Subject();
    protected internalTableData: Table;
    protected schema: TableSchema;

    protected orderBy: String;
    protected orderDir = false;
    protected limit = 100;
    protected pageNumber = 0;
    private data: Array<Array<TableRow>>;
    private internalData: Array<TableRow>;

    constructor(private tableMessagingService: TableMessagingService,
                private tableService: TableService,
                private arrayToChunksPipe: ArrayToChunksPipe,
                private ng2OrderPipe: Ng2OrderPipe) {
    }

    setLimit(limit: number) {
        this.limit = limit;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.internalData),
                this._getLimit());
        this.changeData();
    }

    getHeaders(): TableSchema {
        return this.schema;
    }

    generateId(index: number) {
        return Math.round((new Date()).getTime() / 1000) + index;
    }

    setData(data: Array<TableRow>, schema: TableSchema) {
        this.internalData = data.map((item, index) => {
            item._id = this.generateId(index);
            return item;
        });
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(schema, this.internalData), this._getLimit());
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
        this.internalTableData = {
            currentPage: this.pageNumber,
            data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        this.tableData.next(this.internalTableData);
    }

    protected _getLimit() {
        if (this.limit) {
            return this.limit;
        } else {
            return this.internalData.length;
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

    async itemAdd(data) {
        const { addCallback } = this.tableService.getOptions();
        let updated = false;

        if (addCallback) {
            updated = await addCallback(data);
        }

        if (addCallback && !updated) {
            return false;
        }

        this.internalData.push(data);

        this.dataChange.next({
            type: 'add',
            data: data
        });
    }

    async itemEdit(data) {
        const { editCallback } = this.tableService.getOptions();
        let updated = false;

        if (editCallback) {
            updated = await editCallback(data);
        }

        if (editCallback && !updated) {
            return false;
        }

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
        let result = false;

        const index = this.internalData
            .findIndex(item => item._id === id);

        if (index < 0) {
            return false;
        }

        if (deleteCallback) {
            result = await deleteCallback(this.internalData[index]);
        }

        if (deleteCallback && !result) {
            return false;
        }

        this.internalData.splice(index, 1);

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
                    .transform(this.internalData, this.orderBy, this.orderDir)),
                this._getLimit());

        this.changeData();
    }
}
