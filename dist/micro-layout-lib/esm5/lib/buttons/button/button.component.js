/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.disabled = false;
        this.types = [];
        this.type = 'button';
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        return "button " + this.types.join(' ');
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-button',
                    template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content></ng-content>\n</button>\n"
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        disabled: [{ type: Input }],
        types: [{ type: Input }],
        type: [{ type: Input }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.types;
    /** @type {?} */
    ButtonComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0M7SUFTRTtRQUpTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQUVULENBQUM7Ozs7SUFFakIsa0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxZQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDO0lBQzFDLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsaUlBQXNDO2lCQUN2Qzs7Ozs7MkJBRUUsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBUVIsc0JBQUM7Q0FBQSxBQWZELElBZUM7U0FYWSxlQUFlOzs7SUFDMUIsbUNBQTBCOztJQUMxQixnQ0FBbUM7O0lBQ25DLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGVzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldENsYXNzKCkge1xuICAgIHJldHVybiBgYnV0dG9uICR7dGhpcy50eXBlcy5qb2luKCcgJyl9YDtcbiAgfVxuXG59XG4iXX0=