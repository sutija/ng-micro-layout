import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ml-card-header',
  templateUrl: './card-header.component.html'
})
export class CardHeaderComponent implements OnInit, OnDestroy {
  canCollapse = true;
  isCollapsed = false;
  private subscriptions$: Array<Subscription> = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.subscriptions$.push(this.cardService.isCollapsed$
        .subscribe(isCollapsed => this.isCollapsed = isCollapsed));

    this.subscriptions$.push(this.cardService.canCollapse$
        .subscribe(canCollapse => this.canCollapse = canCollapse));
  }

  toggleCollapse() {
    this.cardService.toggleCollapsed();
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(item => item.unsubscribe());
  }

}
