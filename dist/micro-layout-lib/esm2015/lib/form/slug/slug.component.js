/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
export class SlugComponent extends FormControl {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    update() {
        /** @type {?} */
        const value = this.element.nativeElement.value.split(' ').join('-').toLowerCase();
        this.value = value;
        this.element.nativeElement.value = value;
        this.onChange(this.value);
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
        this.onTouched = fn;
    }
}
SlugComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-slug',
                template: "<input type=\"text\" #element (keyup)=\"update()\" [value]=\"value\" />\n",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SlugComponent, multi: true }]
            }] }
];
/** @nocollapse */
SlugComponent.ctorParameters = () => [];
SlugComponent.propDecorators = {
    value: [{ type: Input }],
    element: [{ type: ViewChild, args: ['element',] }]
};
if (false) {
    /** @type {?} */
    SlugComponent.prototype.value;
    /** @type {?} */
    SlugComponent.prototype.element;
    /** @type {?} */
    SlugComponent.prototype.onChange;
    /** @type {?} */
    SlugComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vc2x1Zy9zbHVnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQXVCLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3BGLE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBVztJQU01QztRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELE1BQU07O2NBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRTtRQUNqRixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixxRkFBb0M7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ25GOzs7OztvQkFFRSxLQUFLO3NCQUNMLFNBQVMsU0FBQyxTQUFTOzs7O0lBRHBCLDhCQUF1Qjs7SUFDdkIsZ0NBQTBDOztJQUMxQyxpQ0FBUzs7SUFDVCxrQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC1zbHVnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsdWcuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBTbHVnQ29tcG9uZW50LCBtdWx0aTogdHJ1ZX1dXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdDb21wb25lbnQgZXh0ZW5kcyBGb3JtQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIG9uQ2hhbmdlO1xuICBvblRvdWNoZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUuc3BsaXQoJyAnKS5qb2luKCctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxufVxuIl19