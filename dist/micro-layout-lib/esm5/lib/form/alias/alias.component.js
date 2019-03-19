/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
var AliasComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AliasComponent, _super);
    function AliasComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    AliasComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.element.nativeElement.value.split(' ').join('-').toLowerCase();
        this.value = value;
        this.element.nativeElement.value = value;
        this.onChange(this.value);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AliasComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.value = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AliasComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AliasComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    AliasComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-alias',
                    template: "<input type=\"text\" #element (keyup)=\"update()\" (focus)=\"onTouch(true)\" [value]=\"value\" />\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: AliasComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    AliasComponent.ctorParameters = function () { return []; };
    AliasComponent.propDecorators = {
        value: [{ type: Input }],
        element: [{ type: ViewChild, args: ['element',] }]
    };
    return AliasComponent;
}(FormControl));
export { AliasComponent };
if (false) {
    /** @type {?} */
    AliasComponent.prototype.value;
    /** @type {?} */
    AliasComponent.prototype.element;
    /** @type {?} */
    AliasComponent.prototype.onChange;
    /** @type {?} */
    AliasComponent.prototype.onTouch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2FsaWFzL2FsaWFzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUF1QixXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRjtJQUtvQywwQ0FBVztJQU03QztlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7OztJQUVELCtCQUFNOzs7SUFBTjs7WUFDVSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQ2pGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsMENBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsK0dBQXFDO29CQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztpQkFDcEY7Ozs7O3dCQUVFLEtBQUs7MEJBQ0wsU0FBUyxTQUFDLFNBQVM7O0lBMkJ0QixxQkFBQztDQUFBLEFBbENELENBS29DLFdBQVcsR0E2QjlDO1NBN0JZLGNBQWM7OztJQUN6QiwrQkFBdUI7O0lBQ3ZCLGlDQUEwQzs7SUFDMUMsa0NBQVM7O0lBQ1QsaUNBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtYWxpYXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxpYXMuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBBbGlhc0NvbXBvbmVudCwgbXVsdGk6IHRydWV9XVxufSlcbmV4cG9ydCBjbGFzcyBBbGlhc0NvbXBvbmVudCBleHRlbmRzIEZvcm1Db250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdlbGVtZW50JykgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgb25DaGFuZ2U7XG4gIG9uVG91Y2g7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUuc3BsaXQoJyAnKS5qb2luKCctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG59XG4iXX0=