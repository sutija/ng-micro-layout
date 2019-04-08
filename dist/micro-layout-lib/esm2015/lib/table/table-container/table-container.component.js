/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
export class TableContainerComponent {
    constructor() {
        this.isEditable = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getClass(data) {
        if (data._options && data._options._backgroundColor) {
            return `row ${data._options._backgroundColor}`;
        }
        else {
            return 'row';
        }
    }
}
TableContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-container, [ml-table-container]',
                template: "<tr\n        ml-table-row\n        [ngClass]=\"getClass(row)\"\n        *ngFor=\"let row of data\"\n        [data]=\"row\"\n        [isEditable]=\"isEditable\"></tr>\n"
            }] }
];
/** @nocollapse */
TableContainerComponent.ctorParameters = () => [];
TableContainerComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableContainerComponent.prototype.data;
    /** @type {?} */
    TableContainerComponent.prototype.isEditable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtY29udGFpbmVyL3RhYmxlLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxHQUNSLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU0sT0FBTyx1QkFBdUI7SUFJaEM7UUFGUyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBR3JDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNqRCxPQUFPLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ2xEO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7OztZQWpCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsbUxBQStDO2FBQ2xEOzs7OzttQkFFSSxLQUFLO3lCQUNMLEtBQUs7Ozs7SUFETix1Q0FBK0I7O0lBQy9CLDZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVSb3d9IGZyb20gJy4uL3RhYmxlLmludGVyZmFjZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtbC10YWJsZS1jb250YWluZXIsIFttbC10YWJsZS1jb250YWluZXJdJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbnRhaW5lckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZGF0YTogQXJyYXk8VGFibGVSb3c+O1xuICAgIEBJbnB1dCgpIGlzRWRpdGFibGU6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdldENsYXNzKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuX29wdGlvbnMgJiYgZGF0YS5fb3B0aW9ucy5fYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJvdyAke2RhdGEuX29wdGlvbnMuX2JhY2tncm91bmRDb2xvcn1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdyb3cnO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19