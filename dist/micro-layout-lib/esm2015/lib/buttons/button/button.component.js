/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.disabled = false;
        this.types = [];
        this.type = 'button';
    }
    /**
     * @return {?}
     */
    getClass() {
        return `button ${this.types.join(' ')}`;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-button',
                template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content></ng-content>\n</button>\n"
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    disabled: [{ type: Input }],
    types: [{ type: Input }],
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.types;
    /** @type {?} */
    ButtonComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNL0MsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFKUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBRyxRQUFRLENBQUM7SUFFVCxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixPQUFPLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGlJQUFzQzthQUN2Qzs7Ozs7dUJBRUUsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFGTixtQ0FBMEI7O0lBQzFCLGdDQUFtQzs7SUFDbkMsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgQElucHV0KCkgdHlwZSA9ICdidXR0b24nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0Q2xhc3MoKSB7XG4gICAgcmV0dXJuIGBidXR0b24gJHt0aGlzLnR5cGVzLmpvaW4oJyAnKX1gO1xuICB9XG5cbn1cbiJdfQ==