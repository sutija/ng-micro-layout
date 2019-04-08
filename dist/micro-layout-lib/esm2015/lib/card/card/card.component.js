/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CardService } from '../card.service';
export class CardComponent {
    /**
     * @param {?} cardService
     */
    constructor(cardService) {
        this.cardService = cardService;
        this.isCollapsed = false;
        this.canCollapse = true;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cardService.setIsCollapsed(this.isCollapsed);
        this.cardService.setCanCollapse(this.canCollapse);
        this.subscriptions$.push(this.cardService.isCollapsed$
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        isCollapsed => this.isCollapsed = isCollapsed)));
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
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card, [ml-card]',
                template: "<div [ngClass]=\"{\n'card': true,\n'card-collapsed': isCollapsed\n}\">\n  <ng-content select=\"ml-card-header, [ml-card-header]\"></ng-content>\n  <ng-content select=\"ml-card-container, [ml-card-container]\"></ng-content>\n  <ng-content select=\"ml-card-footer, [ml-card-footer]\"></ng-content>\n</div>\n",
                providers: [CardService]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [
    { type: CardService }
];
CardComponent.propDecorators = {
    isCollapsed: [{ type: Input }],
    canCollapse: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardComponent.prototype.isCollapsed;
    /** @type {?} */
    CardComponent.prototype.canCollapse;
    /**
     * @type {?}
     * @private
     */
    CardComponent.prototype.subscriptions$;
    /**
     * @type {?}
     * @private
     */
    CardComponent.prototype.cardService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVE1QyxNQUFNLE9BQU8sYUFBYTs7OztJQU14QixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxuQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVwQixtQkFBYyxHQUF3QixFQUFFLENBQUM7SUFFRCxDQUFDOzs7O0lBRWpELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTthQUNqRCxTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO0lBQzFELENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsNlRBQW9DO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7Ozs7WUFQTyxXQUFXOzs7MEJBU2hCLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUROLG9DQUE2Qjs7SUFDN0Isb0NBQTRCOzs7OztJQUU1Qix1Q0FBaUQ7Ozs7O0lBRXJDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYXJkU2VydmljZX0gZnJvbSAnLi4vY2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtY2FyZCwgW21sLWNhcmRdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtDYXJkU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY2FuQ29sbGFwc2UgPSB0cnVlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyQ6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcmRTZXJ2aWNlOiBDYXJkU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJkU2VydmljZS5zZXRJc0NvbGxhcHNlZCh0aGlzLmlzQ29sbGFwc2VkKTtcbiAgICB0aGlzLmNhcmRTZXJ2aWNlLnNldENhbkNvbGxhcHNlKHRoaXMuY2FuQ29sbGFwc2UpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJC5wdXNoKHRoaXMuY2FyZFNlcnZpY2UuaXNDb2xsYXBzZWQkXG4gICAgICAgIC5zdWJzY3JpYmUoaXNDb2xsYXBzZWQgPT4gdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmZvckVhY2goaXRlbSA9PiBpdGVtLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=