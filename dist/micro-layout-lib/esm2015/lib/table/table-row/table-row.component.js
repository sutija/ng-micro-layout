/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableMessagingService } from '../table-messaging.service';
import { TableDataService } from '../table-data.service';
import { CONTEXTS, MESSAGES } from '../table.constants';
export class TableRowComponent {
    /**
     * @param {?} tableMessagingService
     * @param {?} tableDataService
     */
    constructor(tableMessagingService, tableDataService) {
        this.tableMessagingService = tableMessagingService;
        this.tableDataService = tableDataService;
        this.isEditable = false;
        this.isEditing = false;
        this.deleteActivated = false;
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /**
         * Clone global data to local data
         */
        this._data = Object.assign({}, this.data);
    }
    /**
     * @return {?}
     */
    elementSelected() {
        this.tableDataService.elementSelected$.next(this._data);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackColumn(index, item) {
        if (!item) {
            return null;
        }
        return index;
    }
    /**
     * @return {?}
     */
    getColumnsData() {
        return Object.keys(this.tableDataService.getHeaders());
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getColumnTypeByKey(key) {
        return this.tableDataService.getHeaders()[key].type;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getColumnIsEditableByKey(key) {
        return this.tableDataService.getHeaders()[key].isEditable;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getDataByKey(key) {
        return this.data[key];
    }
    /**
     * @return {?}
     */
    cancel() {
        this._data = Object.assign({}, this.data);
        this.isEditing = false;
    }
    /**
     * @return {?}
     */
    edit() {
        this.isEditing = !this.isEditing;
        if (this.isEditing) {
            this.tableMessagingService.notify({
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_EDIT_STARTED
            });
        }
    }
    /**
     * @return {?}
     */
    save() {
        this.isEditing = false;
        this.tableMessagingService.notify({
            type: CONTEXTS.DEFAULT,
            message: MESSAGES.ITEM_EDIT,
            data: {
                row: this._data
            }
        });
    }
    /**
     * @return {?}
     */
    delete() {
        this.deleteActivated = !this.deleteActivated;
        this.tableMessagingService.notify({
            type: CONTEXTS.DEFAULT,
            message: MESSAGES.ITEM_DELETE,
            data: this._data
        });
    }
}
TableRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-row, [ml-table-row]',
                template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (onClick)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable\">\n  <button\n          class=\"Button Button--small Button--primary\"\n          (click)=\"edit()\"\n          *ngIf=\"!isEditing\"\n  >Edit</button>\n  <button class=\"Button Button--small\" (click)=\"delete()\" *ngIf=\"!isEditing\">Delete</button>\n  <button class=\"Button Button--small Button--primary\" (click)=\"save()\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"Button Button--small\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
            }] }
];
/** @nocollapse */
TableRowComponent.ctorParameters = () => [
    { type: TableMessagingService },
    { type: TableDataService }
];
TableRowComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }],
    isEditing: [{ type: Input }],
    deleteActivated: [{ type: Input }],
    select: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableRowComponent.prototype.data;
    /** @type {?} */
    TableRowComponent.prototype.isEditable;
    /** @type {?} */
    TableRowComponent.prototype.isEditing;
    /** @type {?} */
    TableRowComponent.prototype.deleteActivated;
    /** @type {?} */
    TableRowComponent.prototype.select;
    /**
     * Local data
     * @type {?}
     */
    TableRowComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TableRowComponent.prototype.tableMessagingService;
    /**
     * @type {?}
     * @private
     */
    TableRowComponent.prototype.tableDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQU10RCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQVk1QixZQUFvQixxQkFBNEMsRUFDNUMsZ0JBQWtDO1FBRGxDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVg3QyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDaEMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBU3pELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1Q7O1dBRUc7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFHO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEdBQUc7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEdBQUc7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRLENBQUMsaUJBQWlCO2FBQ3BDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsUUFBUSxDQUFDLFNBQVM7WUFDM0IsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDdEIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxXQUFXO1lBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLHkwQkFBeUM7YUFDMUM7Ozs7WUFQTyxxQkFBcUI7WUFDckIsZ0JBQWdCOzs7bUJBUXJCLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsTUFBTTs7OztJQUpQLGlDQUFjOztJQUNkLHVDQUFxQzs7SUFDckMsc0NBQW9DOztJQUNwQyw0Q0FBMEM7O0lBQzFDLG1DQUF5RDs7Ozs7SUFLekQsa0NBQWE7Ozs7O0lBRUQsa0RBQW9EOzs7OztJQUNwRCw2Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZU1lc3NhZ2luZ1NlcnZpY2V9IGZyb20gJy4uL3RhYmxlLW1lc3NhZ2luZy5zZXJ2aWNlJztcbmltcG9ydCB7VGFibGVEYXRhU2VydmljZX0gZnJvbSAnLi4vdGFibGUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7Q09OVEVYVFMsIE1FU1NBR0VTfSBmcm9tICcuLi90YWJsZS5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC10YWJsZS1yb3csIFttbC10YWJsZS1yb3ddJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLXJvdy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgaXNFZGl0YWJsZTogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0VkaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGVsZXRlQWN0aXZhdGVkOiBCb29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBMb2NhbCBkYXRhXG4gICAqL1xuICBwdWJsaWMgX2RhdGE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZU1lc3NhZ2luZ1NlcnZpY2U6IFRhYmxlTWVzc2FnaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0YWJsZURhdGFTZXJ2aWNlOiBUYWJsZURhdGFTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICAvKipcbiAgICAgKiBDbG9uZSBnbG9iYWwgZGF0YSB0byBsb2NhbCBkYXRhXG4gICAgICovXG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gIH1cblxuICBlbGVtZW50U2VsZWN0ZWQoKSB7XG4gICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLmVsZW1lbnRTZWxlY3RlZCQubmV4dCh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIHRyYWNrQ29sdW1uKGluZGV4LCBpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBnZXRDb2x1bW5zRGF0YSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50YWJsZURhdGFTZXJ2aWNlLmdldEhlYWRlcnMoKSk7XG4gIH1cblxuICBnZXRDb2x1bW5UeXBlQnlLZXkoa2V5KTogU3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZURhdGFTZXJ2aWNlLmdldEhlYWRlcnMoKVtrZXldLnR5cGU7XG4gIH1cblxuICBnZXRDb2x1bW5Jc0VkaXRhYmxlQnlLZXkoa2V5KTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVEYXRhU2VydmljZS5nZXRIZWFkZXJzKClba2V5XS5pc0VkaXRhYmxlO1xuICB9XG5cbiAgZ2V0RGF0YUJ5S2V5KGtleSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9ICF0aGlzLmlzRWRpdGluZztcbiAgICBpZiAodGhpcy5pc0VkaXRpbmcpIHtcbiAgICAgIHRoaXMudGFibGVNZXNzYWdpbmdTZXJ2aWNlLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICAgIG1lc3NhZ2U6IE1FU1NBR0VTLklURU1fRURJVF9TVEFSVEVEXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnRhYmxlTWVzc2FnaW5nU2VydmljZS5ub3RpZnkoe1xuICAgICAgdHlwZTogQ09OVEVYVFMuREVGQVVMVCxcbiAgICAgIG1lc3NhZ2U6IE1FU1NBR0VTLklURU1fRURJVCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcm93OiB0aGlzLl9kYXRhXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgdGhpcy5kZWxldGVBY3RpdmF0ZWQgPSAhdGhpcy5kZWxldGVBY3RpdmF0ZWQ7XG4gICAgdGhpcy50YWJsZU1lc3NhZ2luZ1NlcnZpY2Uubm90aWZ5KHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0RFTEVURSxcbiAgICAgIGRhdGE6IHRoaXMuX2RhdGFcbiAgICB9KTtcbiAgfVxufVxuIl19