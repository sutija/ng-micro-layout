/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
export class TableContainerComponent {
    constructor() {
        this.isEditable = false;
        console.log(this.data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getClass(data) {
        if (data._options && data._options._backgroundColor) {
            return 'row ' + data._options._backgroundColor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtY29udGFpbmVyL3RhYmxlLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU0sT0FBTyx1QkFBdUI7SUFJbEM7UUFGUyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBR25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuRCxPQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1NBQ2hEO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxtTEFBK0M7YUFDaEQ7Ozs7O21CQUVFLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUROLHVDQUErQjs7SUFDL0IsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlUm93fSBmcm9tICcuLi90YWJsZS5pbnRlcmZhY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLXRhYmxlLWNvbnRhaW5lciwgW21sLXRhYmxlLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEFycmF5PFRhYmxlUm93PjtcbiAgQElucHV0KCkgaXNFZGl0YWJsZTogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gIH1cblxuICBnZXRDbGFzcyhkYXRhKSB7XG4gICAgaWYgKGRhdGEuX29wdGlvbnMgJiYgZGF0YS5fb3B0aW9ucy5fYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICByZXR1cm4gJ3JvdyAnICsgZGF0YS5fb3B0aW9ucy5fYmFja2dyb3VuZENvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3Jvdyc7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==