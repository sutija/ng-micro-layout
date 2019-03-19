/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TableMessagingService } from '../table-messaging.service';
import { MESSAGES, CONTEXTS } from '../table.constants';
export class TableHeaderComponent {
    /**
     * @param {?} tableMessagingService
     */
    constructor(tableMessagingService) {
        this.tableMessagingService = tableMessagingService;
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
        this.tableMessagingService.notify({
            data: {
                sort_by: label
            },
            message: MESSAGES.SORT_CLICK,
            type: CONTEXTS.DEFAULT
        });
    }
}
TableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-header, [ml-table-header]',
                template: "<tr ngClass=\"header-row\">\n  <th\n          [hidden]=\"columnName === '_id'\"\n          *ngFor=\"let columnName of getData(); let i = index;\" ngClass=\"column\">\n    <button\n            (click)=\"sortItems(columnName)\"\n            class=\"Table__OrderButton\"\n            title=\"Click to reorder\"\n    >{{data[columnName].title}}\n    </button>\n  </th>\n  <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
            }] }
];
/** @nocollapse */
TableHeaderComponent.ctorParameters = () => [
    { type: TableMessagingService }
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
    TableHeaderComponent.prototype.tableMessagingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNeEQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUkvQixZQUFzQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUh6RCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFFeUMsQ0FBQzs7OztJQUV0RSxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckM7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNELE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU87U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5Qyx5YUFBNEM7YUFDN0M7Ozs7WUFOUSxxQkFBcUI7OzttQkFRM0IsS0FBSzt5QkFDTCxLQUFLOzs7O0lBRE4sb0NBQTJCOztJQUMzQiwwQ0FBNEI7Ozs7O0lBRWhCLHFEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFibGVNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtbWVzc2FnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgTUVTU0FHRVMsIENPTlRFWFRTIH0gZnJvbSAnLi4vdGFibGUuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtdGFibGUtaGVhZGVyLCBbbWwtdGFibGUtaGVhZGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogT2JqZWN0ID0ge307XG4gIEBJbnB1dCgpIGlzRWRpdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGFibGVNZXNzYWdpbmdTZXJ2aWNlOiBUYWJsZU1lc3NhZ2luZ1NlcnZpY2UpIHt9XG5cbiAgZ2V0RGF0YSgpOiBBcnJheTxTdHJpbmc+IHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhKSB8fCBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHNvcnRJdGVtcyhsYWJlbCkge1xuICAgIHRoaXMudGFibGVNZXNzYWdpbmdTZXJ2aWNlLm5vdGlmeSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNvcnRfYnk6IGxhYmVsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZTogTUVTU0FHRVMuU09SVF9DTElDSyxcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFRcbiAgICB9KTtcbiAgfVxufVxuIl19