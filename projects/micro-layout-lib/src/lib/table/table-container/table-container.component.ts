import {
  Component,
  Input,
} from '@angular/core';
import {TableRow} from '../table.interface';


@Component({
  selector: 'ml-table-container, [ml-table-container]',
  templateUrl: './table-container.component.html'
})
export class TableContainerComponent {
  @Input() data: Array<TableRow>;
  @Input() isEditable: Boolean = false;

  constructor() {
    console.log(this.data);
  }

  getClass(data) {
    if (data._options && data._options._backgroundColor) {
      return 'row ' + data._options._backgroundColor;
    } else {
      return 'row';
    }
  }
}

