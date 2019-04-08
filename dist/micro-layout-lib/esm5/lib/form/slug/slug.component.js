/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
var SlugComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SlugComponent, _super);
    function SlugComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SlugComponent.prototype.update = /**
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
    SlugComponent.prototype.writeValue = /**
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
    SlugComponent.prototype.registerOnChange = /**
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
    SlugComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    SlugComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-slug',
                    template: "<input type=\"text\" #element (keyup)=\"update()\" [value]=\"value\" />\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SlugComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    SlugComponent.ctorParameters = function () { return []; };
    SlugComponent.propDecorators = {
        value: [{ type: Input }],
        element: [{ type: ViewChild, args: ['element',] }]
    };
    return SlugComponent;
}(FormControl));
export { SlugComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vc2x1Zy9zbHVnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUF1QixXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRjtJQUttQyx5Q0FBVztJQU01QztlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7OztJQUVELDhCQUFNOzs7SUFBTjs7WUFDVSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQ2pGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELHdDQUFnQjs7OztJQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQseUNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIscUZBQW9DO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztpQkFDbkY7Ozs7O3dCQUVFLEtBQUs7MEJBQ0wsU0FBUyxTQUFDLFNBQVM7O0lBMkJ0QixvQkFBQztDQUFBLEFBbENELENBS21DLFdBQVcsR0E2QjdDO1NBN0JZLGFBQWE7OztJQUN4Qiw4QkFBdUI7O0lBQ3ZCLGdDQUEwQzs7SUFDMUMsaUNBQVM7O0lBQ1Qsa0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtc2x1ZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbHVnLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogU2x1Z0NvbXBvbmVudCwgbXVsdGk6IHRydWV9XVxufSlcbmV4cG9ydCBjbGFzcyBTbHVnQ29tcG9uZW50IGV4dGVuZHMgRm9ybUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnQnKSBlbGVtZW50OiBFbGVtZW50UmVmO1xuICBvbkNoYW5nZTtcbiAgb25Ub3VjaGVkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlLnNwbGl0KCcgJykuam9pbignLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gb2JqO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbn1cbiJdfQ==