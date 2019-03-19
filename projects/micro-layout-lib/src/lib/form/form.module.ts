import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchComponent} from './switch/switch.component';
import { DropComponent } from './drop/drop.component';
import { DropItemsComponent } from './drop/drop-items/drop-items.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ButtonsModule} from '../buttons/buttons.module';
import { AliasComponent } from './alias/alias.component';
import { PartsComponent } from './parts/parts.component';

@NgModule({
    declarations: [
        SwitchComponent,
        DropComponent,
        DropItemsComponent,
        AliasComponent,
        PartsComponent
    ],
    imports: [
        ButtonsModule,
        CommonModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        AliasComponent,
        SwitchComponent,
        PartsComponent,
        DropComponent,
        DropItemsComponent
    ]
})
export class FormModule {
}
