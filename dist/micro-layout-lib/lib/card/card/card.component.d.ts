import { OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../card.service';
export declare class CardComponent implements OnInit, OnDestroy {
    private cardService;
    isCollapsed: boolean;
    canCollapse: boolean;
    private subscriptions$;
    constructor(cardService: CardService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
