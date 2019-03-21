import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchComponent} from './switch/switch.component';
import { DropComponent } from './drop/drop.component';
import { DropItemsComponent } from './drop/drop-items/drop-items.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ButtonsModule} from '../buttons/buttons.module';
import { SlugComponent } from './slug/slug.component';
import { PartsComponent } from './parts/parts.component';

@NgModule({
    declarations: [
        SwitchComponent,
        DropComponent,
        DropItemsComponent,
        SlugComponent,
        PartsComponent
    ],
    imports: [
        ButtonsModule,
        CommonModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        SlugComponent,
        SwitchComponent,
        PartsComponent,
        DropComponent,
        DropItemsComponent
    ]
})
export class FormModule {
}
