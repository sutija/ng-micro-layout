/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.disabled = false;
        this.types = [];
        this.type = 'button';
        this.title = false;
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.emitClick = /**
     * @return {?}
     */
    function () {
        this.clicked.emit(true);
    };
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
                    template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content *ngIf=\"!title\"></ng-content>\n    {{ title ? title : null }}\n</button>\n"
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        disabled: [{ type: Input }],
        types: [{ type: Input }],
        type: [{ type: Input }],
        title: [{ type: Input }],
        clicked: [{ type: Output }],
        emitClick: [{ type: HostListener, args: ['click',] }]
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
    /** @type {?} */
    ButtonComponent.prototype.title;
    /** @type {?} */
    ButtonComponent.prototype.clicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkY7SUFlRTtRQVZTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixVQUFLLEdBQW1CLEtBQUssQ0FBQztRQUM3QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU12QixDQUFDOzs7O0lBSk0sbUNBQVM7OztJQUFoQztRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxrQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLFlBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7SUFDMUMsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsa0xBQXNDO2lCQUN2Qzs7Ozs7MkJBRUUsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxNQUFNOzRCQUVOLFlBQVksU0FBQyxPQUFPOztJQVV2QixzQkFBQztDQUFBLEFBckJELElBcUJDO1NBakJZLGVBQWU7OztJQUMxQixtQ0FBMEI7O0lBQzFCLGdDQUFtQzs7SUFDbkMsK0JBQXlCOztJQUN6QixnQ0FBdUM7O0lBQ3ZDLGtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGVzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcbiAgQElucHV0KCkgdGl0bGU6IGJvb2xlYW58c3RyaW5nID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgZW1pdENsaWNrKCkge1xuICAgIHRoaXMuY2xpY2tlZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRDbGFzcygpIHtcbiAgICByZXR1cm4gYGJ1dHRvbiAke3RoaXMudHlwZXMuam9pbignICcpfWA7XG4gIH1cblxufVxuIl19