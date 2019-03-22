import { Component } from '@angular/core';
import {TABLE_DATA, TABLE_OPTIONS} from './app.constants';
import {ButtonComponent} from '../../projects/micro-layout-lib/src/lib/buttons/button/button.component';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [ButtonComponent]
})
export class AppComponent {
  title = 'micro-layout';
  tableOptions = TABLE_OPTIONS;
  tableData = TABLE_DATA;

  closeMessage() {
    console.log('close');
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
