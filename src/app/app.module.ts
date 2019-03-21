import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MicroLayoutLibModule} from 'projects/micro-layout-lib/src/public_api';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MicroLayoutLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
