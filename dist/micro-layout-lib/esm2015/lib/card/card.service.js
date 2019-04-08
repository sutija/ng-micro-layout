/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class CardService {
    constructor() {
        this.isCollapsed = false;
        this.canCollapse = true;
        this.isCollapsed$ = new Subject();
        this.canCollapse$ = new Subject();
    }
    /**
     * @param {?} canCollapse
     * @return {?}
     */
    setCanCollapse(canCollapse) {
        this.canCollapse = canCollapse;
        this.canCollapse$.next(this.canCollapse);
    }
    /**
     * @param {?} isCollapsed
     * @return {?}
     */
    setIsCollapsed(isCollapsed) {
        this.isCollapsed = isCollapsed;
        this.isCollapsed$.next(this.isCollapsed);
    }
    /**
     * @return {?}
     */
    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.isCollapsed$.next(this.isCollapsed);
    }
}
CardService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CardService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE1BQU0sT0FBTyxXQUFXO0lBTXRCO1FBTFEsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVksR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQyxpQkFBWSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRXhDLENBQUM7Ozs7O0lBRWpCLGNBQWMsQ0FBQyxXQUFvQjtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBb0I7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQXRCRixVQUFVOzs7Ozs7Ozs7SUFFVCxrQ0FBNEI7Ozs7O0lBQzVCLGtDQUEyQjs7SUFDM0IsbUNBQXdEOztJQUN4RCxtQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyZFNlcnZpY2Uge1xuICBwcml2YXRlIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgY2FuQ29sbGFwc2UgPSB0cnVlO1xuICByZWFkb25seSBpc0NvbGxhcHNlZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICByZWFkb25seSBjYW5Db2xsYXBzZSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0Q2FuQ29sbGFwc2UoY2FuQ29sbGFwc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNhbkNvbGxhcHNlID0gY2FuQ29sbGFwc2U7XG4gICAgdGhpcy5jYW5Db2xsYXBzZSQubmV4dCh0aGlzLmNhbkNvbGxhcHNlKTtcbiAgfVxuXG4gIHNldElzQ29sbGFwc2VkKGlzQ29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQkLm5leHQodGhpcy5pc0NvbGxhcHNlZCk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQkLm5leHQodGhpcy5pc0NvbGxhcHNlZCk7XG4gIH1cbn1cbiJdfQ==