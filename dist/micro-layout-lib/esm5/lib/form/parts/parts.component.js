/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BUTTON_POSITIONS, BUTTON_STYLES } from '../../buttons/button/button.constants';
var PartsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PartsComponent, _super);
    function PartsComponent() {
        var _this = _super.call(this) || this;
        _this.addButtonClass = [
            BUTTON_STYLES.flat,
            BUTTON_POSITIONS.attachToRight
        ];
        _this.removeButtonClass = [
            BUTTON_STYLES.flat,
            BUTTON_POSITIONS.attachToRight
        ];
        _this.parts = [];
        return _this;
    }
    /**
     * @return {?}
     */
    PartsComponent.prototype.addPart = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        if (element.value.trim().length > 0) {
            this.parts.push(element.value.trim());
            element.value = '';
            this.update();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PartsComponent.prototype.removePart = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.parts.splice(index, 1);
        this.update();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    PartsComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.value = obj;
        if (this.value) {
            this.parts = this.value.split(',');
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PartsComponent.prototype.registerOnChange = /**
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
    PartsComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PartsComponent.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (event.code === 'Enter') {
            this.addPart();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    PartsComponent.prototype.update = /**
     * @protected
     * @return {?}
     */
    function () {
        this.value = this.parts.join(',');
        this.onChange(this.value);
        this.onTouch(true);
    };
    PartsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-parts',
                    template: "<div ngClass=\"parts-input\">\n  <input (keyup)=\"onKeyUp($event)\" #element />\n  <ml-button (click)=\"addPart()\" type=\"button\" [types]=\"addButtonClass\">add</ml-button>\n</div>\n<div ngClass=\"parts\">\n  <ul>\n    <li *ngFor=\"let item of parts; let i = index;\">\n      <span>{{item}}</span>\n      <ml-button (click)=\"removePart(i)\" type=\"button\" [types]=\"removeButtonClass\">X</ml-button>\n    </li>\n  </ul>\n</div>\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: PartsComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    PartsComponent.ctorParameters = function () { return []; };
    PartsComponent.propDecorators = {
        value: [{ type: Input }],
        element: [{ type: ViewChild, args: ['element',] }]
    };
    return PartsComponent;
}(FormControl));
export { PartsComponent };
if (false) {
    /** @type {?} */
    PartsComponent.prototype.value;
    /** @type {?} */
    PartsComponent.prototype.element;
    /** @type {?} */
    PartsComponent.prototype.addButtonClass;
    /** @type {?} */
    PartsComponent.prototype.removeButtonClass;
    /** @type {?} */
    PartsComponent.prototype.onChange;
    /** @type {?} */
    PartsComponent.prototype.onTouch;
    /** @type {?} */
    PartsComponent.prototype.parts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3BhcnRzL3BhcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBdUIsV0FBVyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBZSxNQUFNLHVDQUF1QyxDQUFDO0FBRXBHO0lBS29DLDBDQUFXO0lBZTdDO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBZEQsb0JBQWMsR0FBRztZQUNiLGFBQWEsQ0FBQyxJQUFJO1lBQ2xCLGdCQUFnQixDQUFDLGFBQWE7U0FDakMsQ0FBQztRQUNGLHVCQUFpQixHQUFHO1lBQ2xCLGFBQWEsQ0FBQyxJQUFJO1lBQ2xCLGdCQUFnQixDQUFDLGFBQWE7U0FDL0IsQ0FBQztRQUdGLFdBQUssR0FBRyxFQUFFLENBQUM7O0lBSVgsQ0FBQzs7OztJQUVELGdDQUFPOzs7SUFBUDs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhO1FBQzFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLEtBQUs7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxLQUFvQjtRQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7OztJQUVTLCtCQUFNOzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDZiQUFxQztvQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7aUJBQ3BGOzs7Ozt3QkFFRSxLQUFLOzBCQUNMLFNBQVMsU0FBQyxTQUFTOztJQTJEdEIscUJBQUM7Q0FBQSxBQWxFRCxDQUtvQyxXQUFXLEdBNkQ5QztTQTdEWSxjQUFjOzs7SUFDekIsK0JBQXVCOztJQUN2QixpQ0FBMEM7O0lBQzFDLHdDQUdFOztJQUNGLDJDQUdFOztJQUNGLGtDQUFTOztJQUNULGlDQUFROztJQUNSLCtCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCVVRUT05fUE9TSVRJT05TLCBCVVRUT05fU1RZTEVTLCBCVVRUT05fVFlQRVN9IGZyb20gJy4uLy4uL2J1dHRvbnMvYnV0dG9uL2J1dHRvbi5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC1wYXJ0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJ0cy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IFBhcnRzQ29tcG9uZW50LCBtdWx0aTogdHJ1ZX1dXG59KVxuZXhwb3J0IGNsYXNzIFBhcnRzQ29tcG9uZW50IGV4dGVuZHMgRm9ybUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnQnKSBlbGVtZW50OiBFbGVtZW50UmVmO1xuICBhZGRCdXR0b25DbGFzcyA9IFtcbiAgICAgIEJVVFRPTl9TVFlMRVMuZmxhdCxcbiAgICAgIEJVVFRPTl9QT1NJVElPTlMuYXR0YWNoVG9SaWdodFxuICBdO1xuICByZW1vdmVCdXR0b25DbGFzcyA9IFtcbiAgICBCVVRUT05fU1RZTEVTLmZsYXQsXG4gICAgQlVUVE9OX1BPU0lUSU9OUy5hdHRhY2hUb1JpZ2h0XG4gIF07XG4gIG9uQ2hhbmdlO1xuICBvblRvdWNoO1xuICBwYXJ0cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGRQYXJ0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoZWxlbWVudC52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wYXJ0cy5wdXNoKGVsZW1lbnQudmFsdWUudHJpbSgpKTtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUGFydChpbmRleCkge1xuICAgIHRoaXMucGFydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMucGFydHMgPSB0aGlzLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5hZGRQYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5wYXJ0cy5qb2luKCcsJyk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLm9uVG91Y2godHJ1ZSk7XG4gIH1cblxufVxuIl19