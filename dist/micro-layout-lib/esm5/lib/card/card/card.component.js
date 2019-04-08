/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CardService } from '../card.service';
var CardComponent = /** @class */ (function () {
    function CardComponent(cardService) {
        this.cardService = cardService;
        this.isCollapsed = false;
        this.canCollapse = true;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cardService.setIsCollapsed(this.isCollapsed);
        this.cardService.setCanCollapse(this.canCollapse);
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
    CardComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.unsubscribe(); }));
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-card, [ml-card]',
                    template: "<div [ngClass]=\"{\n'card': true,\n'card-collapsed': isCollapsed\n}\">\n  <ng-content select=\"ml-card-header, [ml-card-header]\"></ng-content>\n  <ng-content select=\"ml-card-container, [ml-card-container]\"></ng-content>\n  <ng-content select=\"ml-card-footer, [ml-card-footer]\"></ng-content>\n</div>\n",
                    providers: [CardService]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return [
        { type: CardService }
    ]; };
    CardComponent.propDecorators = {
        isCollapsed: [{ type: Input }],
        canCollapse: [{ type: Input }]
    };
    return CardComponent;
}());
export { CardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUc1QztJQVdFLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxuQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVwQixtQkFBYyxHQUF3QixFQUFFLENBQUM7SUFFRCxDQUFDOzs7O0lBRWpELGdDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVk7YUFDakQsU0FBUzs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQTlCLENBQThCLEVBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzFELENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsNlRBQW9DO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ3pCOzs7O2dCQVBPLFdBQVc7Ozs4QkFTaEIsS0FBSzs4QkFDTCxLQUFLOztJQWlCUixvQkFBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLGFBQWE7OztJQUN4QixvQ0FBNkI7O0lBQzdCLG9DQUE0Qjs7Ozs7SUFFNUIsdUNBQWlEOzs7OztJQUVyQyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FyZFNlcnZpY2V9IGZyb20gJy4uL2NhcmQuc2VydmljZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLWNhcmQsIFttbC1jYXJkXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbQ2FyZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNhbkNvbGxhcHNlID0gdHJ1ZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMkOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJkU2VydmljZTogQ2FyZFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FyZFNlcnZpY2Uuc2V0SXNDb2xsYXBzZWQodGhpcy5pc0NvbGxhcHNlZCk7XG4gICAgdGhpcy5jYXJkU2VydmljZS5zZXRDYW5Db2xsYXBzZSh0aGlzLmNhbkNvbGxhcHNlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQucHVzaCh0aGlzLmNhcmRTZXJ2aWNlLmlzQ29sbGFwc2VkJFxuICAgICAgICAuc3Vic2NyaWJlKGlzQ29sbGFwc2VkID0+IHRoaXMuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19