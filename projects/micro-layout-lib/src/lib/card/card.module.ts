import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardContainerComponent } from './card-container/card-container.component';

@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardFooterComponent, CardContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent, CardHeaderComponent, CardFooterComponent, CardContainerComponent
  ]
})
export class CardModule { }
