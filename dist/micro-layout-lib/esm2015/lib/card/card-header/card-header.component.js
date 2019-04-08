/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CardService } from '../card.service';
export class CardHeaderComponent {
    /**
     * @param {?} cardService
     */
    constructor(cardService) {
        this.cardService = cardService;
        this.canCollapse = true;
        this.isCollapsed = false;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscriptions$.push(this.cardService.isCollapsed$
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        isCollapsed => this.isCollapsed = isCollapsed)));
        this.subscriptions$.push(this.cardService.canCollapse$
            .subscribe((/**
         * @param {?} canCollapse
         * @return {?}
         */
        canCollapse => this.canCollapse = canCollapse)));
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.cardService.toggleCollapsed();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item.unsubscribe()));
    }
}
CardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card-header',
                template: "<div ngClass=\"wrapper\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"canCollapse\" [ngClass]=\"{'toggle-collapse': true, 'collapsed': isCollapsed}\" (click)=\"toggleCollapse()\">{{ isCollapsed ? '+' : '-'}}</div>\n</div>\n"
            }] }
];
/** @nocollapse */
CardHeaderComponent.ctorParameters = () => [
    { type: CardService }
];
if (false) {
    /** @type {?} */
    CardHeaderComponent.prototype.canCollapse;
    /** @type {?} */
    CardHeaderComponent.prototype.isCollapsed;
    /**
     * @type {?}
     * @private
     */
    CardHeaderComponent.prototype.subscriptions$;
    /**
     * @type {?}
     * @private
     */
    CardHeaderComponent.prototype.cardService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQtaGVhZGVyL2NhcmQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTzVDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFLOUIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKNUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDWixtQkFBYyxHQUF3QixFQUFFLENBQUM7SUFFRCxDQUFDOzs7O0lBRWpELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVk7YUFDakQsU0FBUzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTthQUNqRCxTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDJRQUEyQzthQUM1Qzs7OztZQU5PLFdBQVc7Ozs7SUFRakIsMENBQW1COztJQUNuQiwwQ0FBb0I7Ozs7O0lBQ3BCLDZDQUFpRDs7Ozs7SUFFckMsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FyZFNlcnZpY2V9IGZyb20gJy4uL2NhcmQuc2VydmljZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLWNhcmQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjYW5Db2xsYXBzZSA9IHRydWU7XG4gIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyQ6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcmRTZXJ2aWNlOiBDYXJkU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJC5wdXNoKHRoaXMuY2FyZFNlcnZpY2UuaXNDb2xsYXBzZWQkXG4gICAgICAgIC5zdWJzY3JpYmUoaXNDb2xsYXBzZWQgPT4gdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLnB1c2godGhpcy5jYXJkU2VydmljZS5jYW5Db2xsYXBzZSRcbiAgICAgICAgLnN1YnNjcmliZShjYW5Db2xsYXBzZSA9PiB0aGlzLmNhbkNvbGxhcHNlID0gY2FuQ29sbGFwc2UpKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIHRoaXMuY2FyZFNlcnZpY2UudG9nZ2xlQ29sbGFwc2VkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmZvckVhY2goaXRlbSA9PiBpdGVtLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbn1cbiJdfQ==