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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3BhcnRzL3BhcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUF1QixXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFlLE1BQU0sdUNBQXVDLENBQUM7QUFPcEcsTUFBTSxPQUFPLGNBQWUsU0FBUSxXQUFXO0lBZTdDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFiVixtQkFBYyxHQUFHO1lBQ2IsYUFBYSxDQUFDLElBQUk7WUFDbEIsZ0JBQWdCLENBQUMsYUFBYTtTQUNqQyxDQUFDO1FBQ0Ysc0JBQWlCLEdBQUc7WUFDbEIsYUFBYSxDQUFDLElBQUk7WUFDbEIsZ0JBQWdCLENBQUMsYUFBYTtTQUMvQixDQUFDO1FBR0YsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUlYLENBQUM7Ozs7SUFFRCxPQUFPOztjQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7UUFDMUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFvQjtRQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7OztJQUVTLE1BQU07UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsNmJBQXFDO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUNwRjs7Ozs7b0JBRUUsS0FBSztzQkFDTCxTQUFTLFNBQUMsU0FBUzs7OztJQURwQiwrQkFBdUI7O0lBQ3ZCLGlDQUEwQzs7SUFDMUMsd0NBR0U7O0lBQ0YsMkNBR0U7O0lBQ0Ysa0NBQVM7O0lBQ1QsaUNBQVE7O0lBQ1IsK0JBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0JVVFRPTl9QT1NJVElPTlMsIEJVVFRPTl9TVFlMRVMsIEJVVFRPTl9UWVBFU30gZnJvbSAnLi4vLi4vYnV0dG9ucy9idXR0b24vYnV0dG9uLmNvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLXBhcnRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcnRzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogUGFydHNDb21wb25lbnQsIG11bHRpOiB0cnVlfV1cbn0pXG5leHBvcnQgY2xhc3MgUGFydHNDb21wb25lbnQgZXh0ZW5kcyBGb3JtQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGFkZEJ1dHRvbkNsYXNzID0gW1xuICAgICAgQlVUVE9OX1NUWUxFUy5mbGF0LFxuICAgICAgQlVUVE9OX1BPU0lUSU9OUy5hdHRhY2hUb1JpZ2h0XG4gIF07XG4gIHJlbW92ZUJ1dHRvbkNsYXNzID0gW1xuICAgIEJVVFRPTl9TVFlMRVMuZmxhdCxcbiAgICBCVVRUT05fUE9TSVRJT05TLmF0dGFjaFRvUmlnaHRcbiAgXTtcbiAgb25DaGFuZ2U7XG4gIG9uVG91Y2g7XG4gIHBhcnRzID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFkZFBhcnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChlbGVtZW50LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBhcnRzLnB1c2goZWxlbWVudC52YWx1ZS50cmltKCkpO1xuICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVQYXJ0KGluZGV4KSB7XG4gICAgdGhpcy5wYXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IG9iajtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYXJ0cyA9IHRoaXMudmFsdWUuc3BsaXQoJywnKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmFkZFBhcnQoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnBhcnRzLmpvaW4oJywnKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMub25Ub3VjaCh0cnVlKTtcbiAgfVxuXG59XG4iXX0=