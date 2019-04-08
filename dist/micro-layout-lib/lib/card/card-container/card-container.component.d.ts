import { OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../card.service';
export declare class CardContainerComponent implements OnInit, OnDestroy {
    private cardService;
    isCollapsed: boolean;
    private subscriptions$;
    constructor(cardService: CardService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
