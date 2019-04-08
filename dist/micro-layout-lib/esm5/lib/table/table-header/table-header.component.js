/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TableDataService } from '../table-data.service';
var TableHeaderComponent = /** @class */ (function () {
    function TableHeaderComponent(tableDataService) {
        this.tableDataService = tableDataService;
        this.data = {};
        this.isEditable = false;
    }
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            return Object.keys(this.data) || [];
        }
        else {
            return [];
        }
    };
    /**
     * @param {?} label
     * @return {?}
     */
    TableHeaderComponent.prototype.sortItems = /**
     * @param {?} label
     * @return {?}
     */
    function (label) {
        this.tableDataService.reorder(label);
    };
    TableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-table-header, [ml-table-header]',
                    template: "<tr class=\"header-row\">\n    <th\n            [hidden]=\"columnName === '_id'\"\n            *ngFor=\"let columnName of getData()\"\n            class=\"column\">\n        <button\n                (click)=\"sortItems(columnName)\"\n                class=\"table-order-button\"\n                title=\"Click to reorder\"\n        >{{data[columnName].title}}\n        </button>\n    </th>\n    <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
                }] }
    ];
    /** @nocollapse */
    TableHeaderComponent.ctorParameters = function () { return [
        { type: TableDataService }
    ]; };
    TableHeaderComponent.propDecorators = {
        data: [{ type: Input }],
        isEditable: [{ type: Input }]
    };
    return TableHeaderComponent;
}());
export { TableHeaderComponent };
if (false) {
    /** @type {?} */
    TableHeaderComponent.prototype.data;
    /** @type {?} */
    TableHeaderComponent.prototype.isEditable;
    /**
     * @type {?}
     * @protected
     */
    TableHeaderComponent.prototype.tableDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXZEO0lBUUUsOEJBQXNCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSC9DLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUUrQixDQUFDOzs7O0lBRTVELHNDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3Q0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxvY0FBNEM7aUJBQzdDOzs7O2dCQUxPLGdCQUFnQjs7O3VCQU9yQixLQUFLOzZCQUNMLEtBQUs7O0lBZVIsMkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWpCWSxvQkFBb0I7OztJQUMvQixvQ0FBMkI7O0lBQzNCLDBDQUE0Qjs7Ozs7SUFFaEIsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1RhYmxlRGF0YVNlcnZpY2V9IGZyb20gJy4uL3RhYmxlLWRhdGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLXRhYmxlLWhlYWRlciwgW21sLXRhYmxlLWhlYWRlcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IE9iamVjdCA9IHt9O1xuICBASW5wdXQoKSBpc0VkaXRhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRhYmxlRGF0YVNlcnZpY2U6IFRhYmxlRGF0YVNlcnZpY2UpIHt9XG5cbiAgZ2V0RGF0YSgpOiBBcnJheTxTdHJpbmc+IHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhKSB8fCBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHNvcnRJdGVtcyhsYWJlbCkge1xuICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5yZW9yZGVyKGxhYmVsKTtcbiAgfVxufVxuIl19