/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
export class SwitchComponent extends FormControl {
    constructor() {
        super();
        this.change = new EventEmitter();
        this.value = false;
    }
    /**
     * @return {?}
     */
    toggleOnOff() {
        this.value = !this.value;
        if (this.onChange) {
            this.onChange(this.value);
        }
        this.change.emit(this.value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-switch',
                template: "<div [ngClass]=\"{'switch-on': value, 'switch': true}\">\n  <div ngClass=\"switch-container\" (click)=\"toggleOnOff()\">\n    <div ngClass=\"button\"></div>\n  </div>\n</div>\n",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SwitchComponent, multi: true }]
            }] }
];
/** @nocollapse */
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    change: [{ type: Output }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SwitchComponent.prototype.change;
    /** @type {?} */
    SwitchComponent.prototype.value;
    /** @type {?} */
    SwitchComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvZm9ybS9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQXVCLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3BGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFdBQVc7SUFLNUM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUxGLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxVQUFLLEdBQXFCLEtBQUssQ0FBQztJQUt6QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztJQUN6QixDQUFDOzs7WUFqQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw0TEFBc0M7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ3ZGOzs7OztxQkFFSSxNQUFNO29CQUNOLEtBQUs7Ozs7SUFETixpQ0FBNkQ7O0lBQzdELGdDQUF5Qzs7SUFDekMsbUNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21sLXN3aXRjaCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N3aXRjaC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogU3dpdGNoQ29tcG9uZW50LCBtdWx0aTogdHJ1ZX1dXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbXBvbmVudCBleHRlbmRzIEZvcm1Db250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSB2YWx1ZTogYm9vbGVhbiB8IG51bWJlciA9IGZhbHNlO1xuICAgIG9uQ2hhbmdlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT25PZmYoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy52YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZShvYmo6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgfVxufVxuIl19