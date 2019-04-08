/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BUTTON_POSITIONS, BUTTON_STYLES } from '../../buttons/button/button.constants';
export class PartsComponent extends FormControl {
    constructor() {
        super();
        this.addButtonClass = [
            BUTTON_STYLES.flat,
            BUTTON_POSITIONS.attachToRight
        ];
        this.removeButtonClass = [
            BUTTON_STYLES.flat,
            BUTTON_POSITIONS.attachToRight
        ];
        this.parts = [];
    }
    /**
     * @return {?}
     */
    addPart() {
        /** @type {?} */
        const element = this.element.nativeElement;
        if (element.value.trim().length > 0) {
            this.parts.push(element.value.trim());
            element.value = '';
            this.update();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removePart(index) {
        this.parts.splice(index, 1);
        this.update();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.value = obj;
        if (this.value) {
            this.parts = this.value.split(',');
        }
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
        this.onTouch = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        event.preventDefault();
        if (event.code === 'Enter') {
            this.addPart();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    update() {
        this.value = this.parts.join(',');
        this.onChange(this.value);
        this.onTouch(true);
    }
}
PartsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-parts',
                template: "<div ngClass=\"parts-input\">\n  <input (keyup)=\"onKeyUp($event)\" #element />\n  <ml-button (click)=\"addPart()\" type=\"button\" [types]=\"addButtonClass\">add</ml-button>\n</div>\n<div ngClass=\"parts\">\n  <ul>\n    <li *ngFor=\"let item of parts; let i = index;\">\n      <span>{{item}}</span>\n      <ml-button (click)=\"removePart(i)\" type=\"button\" [types]=\"removeButtonClass\">X</ml-button>\n    </li>\n  </ul>\n</div>\n",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: PartsComponent, multi: true }]
            }] }
];
/** @nocollapse */
PartsComponent.ctorParameters = () => [];
PartsComponent.propDecorators = {
    value: [{ type: Input }],
    element: [{ type: ViewChild, args: ['element',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3BhcnRzL3BhcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQXVCLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQU90RixNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQVc7SUFlN0M7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWJWLG1CQUFjLEdBQUc7WUFDYixhQUFhLENBQUMsSUFBSTtZQUNsQixnQkFBZ0IsQ0FBQyxhQUFhO1NBQ2pDLENBQUM7UUFDRixzQkFBaUIsR0FBRztZQUNsQixhQUFhLENBQUMsSUFBSTtZQUNsQixnQkFBZ0IsQ0FBQyxhQUFhO1NBQy9CLENBQUM7UUFHRixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBSVgsQ0FBQzs7OztJQUVELE9BQU87O2NBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtRQUMxQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdEMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQW9CO1FBQzFCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7Ozs7O0lBRVMsTUFBTTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw2YkFBcUM7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ3BGOzs7OztvQkFFRSxLQUFLO3NCQUNMLFNBQVMsU0FBQyxTQUFTOzs7O0lBRHBCLCtCQUF1Qjs7SUFDdkIsaUNBQTBDOztJQUMxQyx3Q0FHRTs7SUFDRiwyQ0FHRTs7SUFDRixrQ0FBUzs7SUFDVCxpQ0FBUTs7SUFDUiwrQkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCVVRUT05fUE9TSVRJT05TLCBCVVRUT05fU1RZTEVTfSBmcm9tICcuLi8uLi9idXR0b25zL2J1dHRvbi9idXR0b24uY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtcGFydHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFydHMuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBQYXJ0c0NvbXBvbmVudCwgbXVsdGk6IHRydWV9XVxufSlcbmV4cG9ydCBjbGFzcyBQYXJ0c0NvbXBvbmVudCBleHRlbmRzIEZvcm1Db250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdlbGVtZW50JykgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgYWRkQnV0dG9uQ2xhc3MgPSBbXG4gICAgICBCVVRUT05fU1RZTEVTLmZsYXQsXG4gICAgICBCVVRUT05fUE9TSVRJT05TLmF0dGFjaFRvUmlnaHRcbiAgXTtcbiAgcmVtb3ZlQnV0dG9uQ2xhc3MgPSBbXG4gICAgQlVUVE9OX1NUWUxFUy5mbGF0LFxuICAgIEJVVFRPTl9QT1NJVElPTlMuYXR0YWNoVG9SaWdodFxuICBdO1xuICBvbkNoYW5nZTtcbiAgb25Ub3VjaDtcbiAgcGFydHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkUGFydCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGVsZW1lbnQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucGFydHMucHVzaChlbGVtZW50LnZhbHVlLnRyaW0oKSk7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBhcnQoaW5kZXgpIHtcbiAgICB0aGlzLnBhcnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnBhcnRzID0gdGhpcy52YWx1ZS5zcGxpdCgnLCcpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuYWRkUGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucGFydHMuam9pbignLCcpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5vblRvdWNoKHRydWUpO1xuICB9XG5cbn1cbiJdfQ==