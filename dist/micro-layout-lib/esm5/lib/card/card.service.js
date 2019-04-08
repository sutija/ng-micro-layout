/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var CardService = /** @class */ (function () {
    function CardService() {
        this.isCollapsed = false;
        this.canCollapse = true;
        this.isCollapsed$ = new Subject();
        this.canCollapse$ = new Subject();
    }
    /**
     * @param {?} canCollapse
     * @return {?}
     */
    CardService.prototype.setCanCollapse = /**
     * @param {?} canCollapse
     * @return {?}
     */
    function (canCollapse) {
        this.canCollapse = canCollapse;
        this.canCollapse$.next(this.canCollapse);
    };
    /**
     * @param {?} isCollapsed
     * @return {?}
     */
    CardService.prototype.setIsCollapsed = /**
     * @param {?} isCollapsed
     * @return {?}
     */
    function (isCollapsed) {
        this.isCollapsed = isCollapsed;
        this.isCollapsed$.next(this.isCollapsed);
    };
    /**
     * @return {?}
     */
    CardService.prototype.toggleCollapsed = /**
     * @return {?}
     */
    function () {
        this.isCollapsed = !this.isCollapsed;
        this.isCollapsed$.next(this.isCollapsed);
    };
    CardService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CardService.ctorParameters = function () { return []; };
    return CardService;
}());
export { CardService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CardService.prototype.isCollapsed;
    /**
     * @type {?}
     * @private
     */
    CardService.prototype.canCollapse;
    /** @type {?} */
    CardService.prototype.isCollapsed$;
    /** @type {?} */
    CardService.prototype.canCollapse$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdCO0lBT0U7UUFMUSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBWSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQy9DLGlCQUFZLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFFeEMsQ0FBQzs7Ozs7SUFFakIsb0NBQWM7Ozs7SUFBZCxVQUFlLFdBQW9CO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELG9DQUFjOzs7O0lBQWQsVUFBZSxXQUFvQjtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHFDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkF0QkYsVUFBVTs7OztJQXVCWCxrQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLFdBQVc7Ozs7OztJQUN0QixrQ0FBNEI7Ozs7O0lBQzVCLGtDQUEyQjs7SUFDM0IsbUNBQXdEOztJQUN4RCxtQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyZFNlcnZpY2Uge1xuICBwcml2YXRlIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgY2FuQ29sbGFwc2UgPSB0cnVlO1xuICByZWFkb25seSBpc0NvbGxhcHNlZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICByZWFkb25seSBjYW5Db2xsYXBzZSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0Q2FuQ29sbGFwc2UoY2FuQ29sbGFwc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNhbkNvbGxhcHNlID0gY2FuQ29sbGFwc2U7XG4gICAgdGhpcy5jYW5Db2xsYXBzZSQubmV4dCh0aGlzLmNhbkNvbGxhcHNlKTtcbiAgfVxuXG4gIHNldElzQ29sbGFwc2VkKGlzQ29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQkLm5leHQodGhpcy5pc0NvbGxhcHNlZCk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQkLm5leHQodGhpcy5pc0NvbGxhcHNlZCk7XG4gIH1cbn1cbiJdfQ==