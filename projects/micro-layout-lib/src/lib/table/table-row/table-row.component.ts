import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {TableDataService} from '../table-data.service';

@Component({
  selector: 'ml-table-row, [ml-table-row]',
  templateUrl: './table-row.component.html',
})
export class TableRowComponent implements OnChanges {
  @Input() data;
  @Input() isEditable: Boolean = false;
  @Input() isEditing: Boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter();

  public _data;
  deleteActivated = false;

  constructor(private tableDataService: TableDataService) {
  }

  ngOnChanges() {
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

  cancel() {
    this._data = Object.assign({}, this.data);
    this.isEditing = false;
  }

  edit() {
    this.isEditing = !this.isEditing;
  }

  async save(type) {
    this.isEditing = false;
    if (type === 'add') {
      await this.tableDataService.itemAdd(this.data);
    } else {
      await this.tableDataService.itemEdit(this._data);
    }
  }

  delete() {
    this.deleteActivated = true;

    if (confirm(`Delete "${this.data.title}"?`)) {
      this.tableDataService.itemDelete(this.data._id);
    }
  }
}
