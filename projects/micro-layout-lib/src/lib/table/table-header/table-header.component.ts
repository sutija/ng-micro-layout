import { Component, Input } from '@angular/core';

import {TableDataService} from '../table-data.service';

@Component({
  selector: 'ml-table-header, [ml-table-header]',
  templateUrl: './table-header.component.html'
})
export class TableHeaderComponent {
  @Input() data: Object = {};
  @Input() isEditable = false;

  constructor(protected tableDataService: TableDataService) {}

  getData(): Array<String> {
    if (this.data) {
      return Object.keys(this.data) || [];
    } else {
      return [];
    }
  }

  sortItems(label) {
    this.tableDataService.reorder(label);
  }
}
