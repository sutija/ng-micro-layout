/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CardService } from '../card.service';
var CardContainerComponent = /** @class */ (function () {
    function CardContainerComponent(cardService) {
        this.cardService = cardService;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    CardContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions$.push(this.cardService.isCollapsed$
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        function (isCollapsed) { return _this.isCollapsed = isCollapsed; })));
    };
    /**
     * @return {?}
     */
    CardContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.unsubscribe(); }));
    };
    CardContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-card-container',
                    template: "<div [ngClass]=\"{'wrapper': true, 'collapsed': isCollapsed}\">\n    <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardContainerComponent.ctorParameters = function () { return [
        { type: CardService }
    ]; };
    return CardContainerComponent;
}());
export { CardContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQtY29udGFpbmVyL2NhcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzVDO0lBUUUsZ0NBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnBDLG1CQUFjLEdBQXdCLEVBQUUsQ0FBQztJQUVELENBQUM7Ozs7SUFFakQseUNBQVE7OztJQUFSO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVk7YUFDakQsU0FBUzs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQTlCLENBQThCLEVBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzFELENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isb0hBQThDO2lCQUMvQzs7OztnQkFOTyxXQUFXOztJQXNCbkIsNkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWZZLHNCQUFzQjs7O0lBQ2pDLDZDQUFxQjs7Ozs7SUFDckIsZ0RBQWlEOzs7OztJQUVyQyw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYXJkU2VydmljZX0gZnJvbSAnLi4vY2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtY2FyZC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMkOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJkU2VydmljZTogQ2FyZFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQucHVzaCh0aGlzLmNhcmRTZXJ2aWNlLmlzQ29sbGFwc2VkJFxuICAgICAgICAuc3Vic2NyaWJlKGlzQ29sbGFwc2VkID0+IHRoaXMuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG59XG4iXX0=