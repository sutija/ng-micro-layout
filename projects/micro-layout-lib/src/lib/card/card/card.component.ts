import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ml-card, [ml-card]',
  templateUrl: './card.component.html',
  providers: [CardService]
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() isCollapsed = false;
  @Input() canCollapse = true;

  private subscriptions$: Array<Subscription> = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.setIsCollapsed(this.isCollapsed);
    this.cardService.setCanCollapse(this.canCollapse);

    this.subscriptions$.push(this.cardService.isCollapsed$
        .subscribe(isCollapsed => this.isCollapsed = isCollapsed));
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(item => item.unsubscribe());
  }
}
