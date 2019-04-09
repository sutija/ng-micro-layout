import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from './buttons/buttons.module';
import {CardModule} from './card/card.module';
import {LinkModule} from './link/link.module';
import {ProgressModule} from './progress/progress.module';
import {TableModule} from './table/table.module';
import {Ng2OrderModule, Ng2OrderPipe} from 'ng2-order-pipe';
import {FormsModule} from '@angular/forms';
import {FormModule} from './form/form.module';
import {MessageModule} from './message/message.module';
import { MicroLayoutLibComponent } from './micro-layout-lib.component';
import { VirtualGridComponent } from './virtual-grid/virtual-grid.component';

@NgModule({
    declarations: [
        MicroLayoutLibComponent,
        VirtualGridComponent
    ],
    imports: [
        FormModule,
        FormsModule,
        CommonModule,
        ButtonsModule,
        CardModule,
        LinkModule,
        ProgressModule,
        TableModule,
        Ng2OrderModule,
        MessageModule
    ],
    exports: [
        ButtonsModule,
        CardModule,
        LinkModule,
        ProgressModule,
        TableModule,
        FormModule,
        MessageModule,
        VirtualGridComponent
    ],
    providers: [Ng2OrderPipe]
})
export class MicroLayoutLibModule { }
