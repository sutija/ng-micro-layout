/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CardService } from '../card.service';
export class CardContainerComponent {
    /**
     * @param {?} cardService
     */
    constructor(cardService) {
        this.cardService = cardService;
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
CardContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card-container',
                template: "<div [ngClass]=\"{'wrapper': true, 'collapsed': isCollapsed}\">\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
CardContainerComponent.ctorParameters = () => [
    { type: CardService }
];
if (false) {
    /** @type {?} */
    CardContainerComponent.prototype.isCollapsed;
    /**
     * @type {?}
     * @private
     */
    CardContainerComponent.prototype.subscriptions$;
    /**
     * @type {?}
     * @private
     */
    CardContainerComponent.prototype.cardService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQtY29udGFpbmVyL2NhcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTzVDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFJakMsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGcEMsbUJBQWMsR0FBd0IsRUFBRSxDQUFDO0lBRUQsQ0FBQzs7OztJQUVqRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO2FBQ2pELFNBQVM7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixvSEFBOEM7YUFDL0M7Ozs7WUFOTyxXQUFXOzs7O0lBUWpCLDZDQUFxQjs7Ozs7SUFDckIsZ0RBQWlEOzs7OztJQUVyQyw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYXJkU2VydmljZX0gZnJvbSAnLi4vY2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtY2FyZC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMkOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJkU2VydmljZTogQ2FyZFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQucHVzaCh0aGlzLmNhcmRTZXJ2aWNlLmlzQ29sbGFwc2VkJFxuICAgICAgICAuc3Vic2NyaWJlKGlzQ29sbGFwc2VkID0+IHRoaXMuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG59XG4iXX0=