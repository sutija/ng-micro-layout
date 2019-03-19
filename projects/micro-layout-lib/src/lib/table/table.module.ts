import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableColumnComponent} from './table-column/table-column.component';
import {TableContainerComponent} from './table-container/table-container.component';
import {TableFooterComponent} from './table-footer/table-footer.component';
import {TableHeaderComponent} from './table-header/table-header.component';
import {TableRowComponent} from './table-row/table-row.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import {FormModule} from '../form/form.module';

@NgModule({
    declarations: [
        TableColumnComponent,
        TableContainerComponent,
        TableFooterComponent,
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
        TableFooterComponent,
        TableHeaderComponent,
        TableRowComponent,
        TableComponent
    ],
})
export class TableModule {
}
