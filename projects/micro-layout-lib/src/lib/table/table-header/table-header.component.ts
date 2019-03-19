import { Component, Input } from '@angular/core';

import { TableMessagingService } from '../table-messaging.service';
import { MESSAGES, CONTEXTS } from '../table.constants';

@Component({
  selector: 'ml-table-header, [ml-table-header]',
  templateUrl: './table-header.component.html'
})
export class TableHeaderComponent {
  @Input() data: Object = {};
  @Input() isEditable = false;

  constructor(protected tableMessagingService: TableMessagingService) {}

  getData(): Array<String> {
    if (this.data) {
      return Object.keys(this.data) || [];
    } else {
      return [];
    }
  }

  sortItems(label) {
    this.tableMessagingService.notify({
      data: {
        sort_by: label
      },
      message: MESSAGES.SORT_CLICK,
      type: CONTEXTS.DEFAULT
    });
  }
}
