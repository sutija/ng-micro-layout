import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ml-card-container',
  templateUrl: './card-container.component.html'
})
export class CardContainerComponent implements OnInit, OnDestroy {
  isCollapsed: boolean;
  private subscriptions$: Array<Subscription> = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.subscriptions$.push(this.cardService.isCollapsed$
        .subscribe(isCollapsed => this.isCollapsed = isCollapsed));
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(item => item.unsubscribe());
  }

}
