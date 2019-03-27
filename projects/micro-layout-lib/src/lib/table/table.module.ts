import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableColumnComponent} from './table-column/table-column.component';
import {TableContainerComponent} from './table-container/table-container.component';
import {TableRowComponent} from './table-row/table-row.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import {FormModule} from '../form/form.module';
import {TableHeaderComponent} from './table-header/table-header.component';

@NgModule({
    declarations: [
        TableColumnComponent,
        TableContainerComponent,
        TableHeaderComponent,
        TableRowComponent,
        TableComponent
    ],
    imports: [
        FormsModule,
        FormModule,
        CommonModule
    ],
    exports: [
        TableColumnComponent,
        TableContainerComponent,
        TableHeaderComponent,
        TableRowComponent,
        TableComponent
    ],
})
export class TableModule {
}
