/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CardService } from '../card.service';
var CardHeaderComponent = /** @class */ (function () {
    function CardHeaderComponent(cardService) {
        this.cardService = cardService;
        this.canCollapse = true;
        this.isCollapsed = false;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    CardHeaderComponent.prototype.ngOnInit = /**
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
        this.subscriptions$.push(this.cardService.canCollapse$
            .subscribe((/**
         * @param {?} canCollapse
         * @return {?}
         */
        function (canCollapse) { return _this.canCollapse = canCollapse; })));
    };
    /**
     * @return {?}
     */
    CardHeaderComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.cardService.toggleCollapsed();
    };
    /**
     * @return {?}
     */
    CardHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.unsubscribe(); }));
    };
    CardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-card-header',
                    template: "<div ngClass=\"wrapper\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"canCollapse\" [ngClass]=\"{'toggle-collapse': true, 'collapsed': isCollapsed}\" (click)=\"toggleCollapse()\">{{ isCollapsed ? '+' : '-'}}</div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardHeaderComponent.ctorParameters = function () { return [
        { type: CardService }
    ]; };
    return CardHeaderComponent;
}());
export { CardHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQtaGVhZGVyL2NhcmQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzVDO0lBU0UsNkJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSjVDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1osbUJBQWMsR0FBd0IsRUFBRSxDQUFDO0lBRUQsQ0FBQzs7OztJQUVqRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTthQUNqRCxTQUFTOzs7O1FBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO2FBQ2pELFNBQVM7Ozs7UUFBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxFQUE5QixDQUE4QixFQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLEVBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDJRQUEyQztpQkFDNUM7Ozs7Z0JBTk8sV0FBVzs7SUE4Qm5CLDBCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F2QlksbUJBQW1COzs7SUFDOUIsMENBQW1COztJQUNuQiwwQ0FBb0I7Ozs7O0lBQ3BCLDZDQUFpRDs7Ozs7SUFFckMsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FyZFNlcnZpY2V9IGZyb20gJy4uL2NhcmQuc2VydmljZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLWNhcmQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjYW5Db2xsYXBzZSA9IHRydWU7XG4gIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyQ6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcmRTZXJ2aWNlOiBDYXJkU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJC5wdXNoKHRoaXMuY2FyZFNlcnZpY2UuaXNDb2xsYXBzZWQkXG4gICAgICAgIC5zdWJzY3JpYmUoaXNDb2xsYXBzZWQgPT4gdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLnB1c2godGhpcy5jYXJkU2VydmljZS5jYW5Db2xsYXBzZSRcbiAgICAgICAgLnN1YnNjcmliZShjYW5Db2xsYXBzZSA9PiB0aGlzLmNhbkNvbGxhcHNlID0gY2FuQ29sbGFwc2UpKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIHRoaXMuY2FyZFNlcnZpY2UudG9nZ2xlQ29sbGFwc2VkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmZvckVhY2goaXRlbSA9PiBpdGVtLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbn1cbiJdfQ==