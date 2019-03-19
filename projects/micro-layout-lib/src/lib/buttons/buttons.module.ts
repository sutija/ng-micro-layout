import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [ButtonComponent],
})
export class ButtonsModule { }
