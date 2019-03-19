import { Injectable } from '@angular/core';
import { TableOptions } from './table.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class TableService {
  protected _tableOptions: TableOptionsArray = {};
  protected isReordable;

  setTableOptions(
      tableID: string,
      tableOptions: TableOptions
  ) {
    this._tableOptions[tableID] = Object.assign({}, tableOptions);
  }

  getTableOptions(): Observable<TableOptionsArray> {
    return of(this._tableOptions);
  }
}

export interface TableOptionsArray {
  [index: string]: TableOptions;
}
