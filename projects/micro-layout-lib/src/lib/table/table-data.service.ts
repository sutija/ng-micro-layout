import {Injectable} from '@angular/core';
import {Ng2OrderPipe} from 'ng2-order-pipe';

import {TableMessagingService, MessageResolver} from './table-messaging.service';
import { CONTEXT, MESSAGES } from './table.constants';

import {ArrayToChunksPipe} from '../pipes/array.pipe';

import {
  Table,
  TableRow,
  TableSchema
} from './table.interface';
import {Subject} from 'rxjs';


@Injectable()
export class TableDataService {
  public readonly dataChange: Subject<any> = new Subject();
  public readonly elementSelected$: Subject<any> = new Subject();
  protected tableData: Subject<Table> = new Subject();
  protected _tableData: Table;
  protected schema: TableSchema;
  protected tableId = 'table';

  protected callbacks = [
    {
      type: CONTEXT.DEFAULT,
      message: MESSAGES.ITEM_EDIT_STARTED,
      callback: () => {
        console.log('item edit started');
      }
    },
    // On sort
    {
      type: CONTEXT.DEFAULT,
      message: MESSAGES.SORT_CLICK,
      callback: (data) => {
        this.reorder(data.sort_by);
      }
    },
    // On edit
    {
      type: CONTEXT.DEFAULT,
      message: MESSAGES.ITEM_EDIT,
      callback: (data) => this.itemEdit(data)
    },
    // On add
    {
      type: CONTEXT.DEFAULT,
      message: MESSAGES.ITEM_ADD,
      callback: null
    },
    // On delete
    {
      type: CONTEXT.DEFAULT,
      message: MESSAGES.ITEM_DELETE,
      callback: (data) => {
        if (confirm(`Delete ${data.id}?`)) {
          this.itemDelete(data.id);
        }
      }
    },
  ];
  protected orderBy: String;
  protected orderDir = false;
  protected limit: number = null;
  protected pageNumber: number;
  private data: Array<Array<TableRow>>;
  private _data: Array<TableRow>;

  constructor(private tableMessagingService: TableMessagingService,
              private arrayToChunksPipe: ArrayToChunksPipe,
              private ng2OrderPipe: Ng2OrderPipe) {
    this.pageNumber = 0;
    this.limit = 100;
    this.tableMessagingService
        .message
        .subscribe((message) =>
            MessageResolver(this.callbacks, message));
  }

  setTableId(tableId) {
    console.log('table id', tableId);
    return this.tableId;
  }

  setLimit(limit: number) {
    this.limit = limit;
    this.pageNumber = 0;
    this.data = null;
    this.data = this.arrayToChunksPipe
        .transform(this.setColumns(this.schema, this._data), this._getLimit());
    this.changeData();
  }

  getHeaders(): TableSchema {
    return this.schema;
  }

  setData(data: Array<TableRow>, schema: TableSchema) {
    this._data = data;
    this.data = this.arrayToChunksPipe.transform(this.setColumns(schema, this._data), this._getLimit());
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

  protected itemEdit(data) {
    this.data = this.data.map(item => {
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

  protected itemDelete(id) {
    this.dataChange.next({
      data: id,
      type: 'delete'
    });
  }

  protected reorder(orderBy) {
    if (this.orderBy === orderBy) {
      this.orderDir = !this.orderDir;
    } else {
      this.orderBy = orderBy;
    }

    this.pageNumber = 0;
    this.data = null;
    this.data = this.arrayToChunksPipe
        .transform(this.setColumns(
            this.schema,
            this.ng2OrderPipe
                .transform(this._data, this.orderBy, this.orderDir)),
            this._getLimit());
    this.changeData();
  }
}
