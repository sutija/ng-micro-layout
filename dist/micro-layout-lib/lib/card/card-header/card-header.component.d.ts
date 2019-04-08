import { OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../card.service';
export declare class CardHeaderComponent implements OnInit, OnDestroy {
    private cardService;
    canCollapse: boolean;
    isCollapsed: boolean;
    private subscriptions$;
    constructor(cardService: CardService);
    ngOnInit(): void;
    toggleCollapse(): void;
    ngOnDestroy(): void;
}
