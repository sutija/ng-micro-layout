/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TableDataService } from '../table-data.service';
export class TableHeaderComponent {
    /**
     * @param {?} tableDataService
     */
    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.data = {};
        this.isEditable = false;
    }
    /**
     * @return {?}
     */
    getData() {
        if (this.data) {
            return Object.keys(this.data) || [];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} label
     * @return {?}
     */
    sortItems(label) {
        this.tableDataService.reorder(label);
    }
}
TableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-header, [ml-table-header]',
                template: "<tr class=\"header-row\">\n    <th\n            [hidden]=\"columnName === '_id'\"\n            *ngFor=\"let columnName of getData()\"\n            class=\"column\">\n        <button\n                (click)=\"sortItems(columnName)\"\n                class=\"table-order-button\"\n                title=\"Click to reorder\"\n        >{{data[columnName].title}}\n        </button>\n    </th>\n    <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
            }] }
];
/** @nocollapse */
TableHeaderComponent.ctorParameters = () => [
    { type: TableDataService }
];
TableHeaderComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBTXZELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFJL0IsWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIL0MsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRStCLENBQUM7Ozs7SUFFNUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxvY0FBNEM7YUFDN0M7Ozs7WUFMTyxnQkFBZ0I7OzttQkFPckIsS0FBSzt5QkFDTCxLQUFLOzs7O0lBRE4sb0NBQTJCOztJQUMzQiwwQ0FBNEI7Ozs7O0lBRWhCLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtUYWJsZURhdGFTZXJ2aWNlfSBmcm9tICcuLi90YWJsZS1kYXRhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC10YWJsZS1oZWFkZXIsIFttbC10YWJsZS1oZWFkZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBPYmplY3QgPSB7fTtcbiAgQElucHV0KCkgaXNFZGl0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0YWJsZURhdGFTZXJ2aWNlOiBUYWJsZURhdGFTZXJ2aWNlKSB7fVxuXG4gIGdldERhdGEoKTogQXJyYXk8U3RyaW5nPiB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkgfHwgW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBzb3J0SXRlbXMobGFiZWwpIHtcbiAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2UucmVvcmRlcihsYWJlbCk7XG4gIH1cbn1cbiJdfQ==