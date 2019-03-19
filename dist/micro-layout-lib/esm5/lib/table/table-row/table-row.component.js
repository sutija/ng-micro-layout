/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableMessagingService } from '../table-messaging.service';
import { TableDataService } from '../table-data.service';
import { CONTEXTS, MESSAGES } from '../table.constants';
var TableRowComponent = /** @class */ (function () {
    function TableRowComponent(tableMessagingService, tableDataService) {
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
    TableRowComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        /**
         * Clone global data to local data
         */
        this._data = Object.assign({}, this.data);
    };
    /**
     * @return {?}
     */
    TableRowComponent.prototype.elementSelected = /**
     * @return {?}
     */
    function () {
        this.tableDataService.elementSelected$.next(this._data);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    TableRowComponent.prototype.trackColumn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        if (!item) {
            return null;
        }
        return index;
    };
    /**
     * @return {?}
     */
    TableRowComponent.prototype.getColumnsData = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.tableDataService.getHeaders());
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TableRowComponent.prototype.getColumnTypeByKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.tableDataService.getHeaders()[key].type;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TableRowComponent.prototype.getColumnIsEditableByKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.tableDataService.getHeaders()[key].isEditable;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TableRowComponent.prototype.getDataByKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.data[key];
    };
    /**
     * @return {?}
     */
    TableRowComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._data = Object.assign({}, this.data);
        this.isEditing = false;
    };
    /**
     * @return {?}
     */
    TableRowComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.isEditing = !this.isEditing;
        if (this.isEditing) {
            this.tableMessagingService.notify({
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_EDIT_STARTED
            });
        }
    };
    /**
     * @return {?}
     */
    TableRowComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        this.isEditing = false;
        this.tableMessagingService.notify({
            type: CONTEXTS.DEFAULT,
            message: MESSAGES.ITEM_EDIT,
            data: {
                row: this._data
            }
        });
    };
    /**
     * @return {?}
     */
    TableRowComponent.prototype.delete = /**
     * @return {?}
     */
    function () {
        this.deleteActivated = !this.deleteActivated;
        this.tableMessagingService.notify({
            type: CONTEXTS.DEFAULT,
            message: MESSAGES.ITEM_DELETE,
            data: this._data
        });
    };
    TableRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-table-row, [ml-table-row]',
                    template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (onClick)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable\">\n  <button\n          class=\"Button Button--small Button--primary\"\n          (click)=\"edit()\"\n          *ngIf=\"!isEditing\"\n  >Edit</button>\n  <button class=\"Button Button--small\" (click)=\"delete()\" *ngIf=\"!isEditing\">Delete</button>\n  <button class=\"Button Button--small Button--primary\" (click)=\"save()\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"Button Button--small\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
                }] }
    ];
    /** @nocollapse */
    TableRowComponent.ctorParameters = function () { return [
        { type: TableMessagingService },
        { type: TableDataService }
    ]; };
    TableRowComponent.propDecorators = {
        data: [{ type: Input }],
        isEditable: [{ type: Input }],
        isEditing: [{ type: Input }],
        deleteActivated: [{ type: Input }],
        select: [{ type: Output }]
    };
    return TableRowComponent;
}());
export { TableRowComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RDtJQWdCRSwyQkFBb0IscUJBQTRDLEVBQzVDLGdCQUFrQztRQURsQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYN0MsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2hDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVN6RCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0U7O1dBRUc7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsdUNBQVc7Ozs7O0lBQVgsVUFBWSxLQUFLLEVBQUUsSUFBSTtRQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELDBDQUFjOzs7SUFBZDtRQUNFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELDhDQUFrQjs7OztJQUFsQixVQUFtQixHQUFHO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELG9EQUF3Qjs7OztJQUF4QixVQUF5QixHQUFHO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELHdDQUFZOzs7O0lBQVosVUFBYSxHQUFHO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTztnQkFDdEIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxpQkFBaUI7YUFDcEMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsZ0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDdEIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUFTO1lBQzNCLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDdEIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxXQUFXO1lBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHkwQkFBeUM7aUJBQzFDOzs7O2dCQVBPLHFCQUFxQjtnQkFDckIsZ0JBQWdCOzs7dUJBUXJCLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFpRlQsd0JBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQXRGWSxpQkFBaUI7OztJQUM1QixpQ0FBYzs7SUFDZCx1Q0FBcUM7O0lBQ3JDLHNDQUFvQzs7SUFDcEMsNENBQTBDOztJQUMxQyxtQ0FBeUQ7Ozs7O0lBS3pELGtDQUFhOzs7OztJQUVELGtEQUFvRDs7Ozs7SUFDcEQsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVNZXNzYWdpbmdTZXJ2aWNlfSBmcm9tICcuLi90YWJsZS1tZXNzYWdpbmcuc2VydmljZSc7XG5pbXBvcnQge1RhYmxlRGF0YVNlcnZpY2V9IGZyb20gJy4uL3RhYmxlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge0NPTlRFWFRTLCBNRVNTQUdFU30gZnJvbSAnLi4vdGFibGUuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtdGFibGUtcm93LCBbbWwtdGFibGUtcm93XScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIGlzRWRpdGFibGU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNFZGl0aW5nOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRlbGV0ZUFjdGl2YXRlZDogQm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogTG9jYWwgZGF0YVxuICAgKi9cbiAgcHVibGljIF9kYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVNZXNzYWdpbmdTZXJ2aWNlOiBUYWJsZU1lc3NhZ2luZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdGFibGVEYXRhU2VydmljZTogVGFibGVEYXRhU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLyoqXG4gICAgICogQ2xvbmUgZ2xvYmFsIGRhdGEgdG8gbG9jYWwgZGF0YVxuICAgICAqL1xuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICB9XG5cbiAgZWxlbWVudFNlbGVjdGVkKCkge1xuICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5lbGVtZW50U2VsZWN0ZWQkLm5leHQodGhpcy5fZGF0YSk7XG4gIH1cblxuICB0cmFja0NvbHVtbihpbmRleCwgaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZ2V0Q29sdW1uc0RhdGEoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudGFibGVEYXRhU2VydmljZS5nZXRIZWFkZXJzKCkpO1xuICB9XG5cbiAgZ2V0Q29sdW1uVHlwZUJ5S2V5KGtleSk6IFN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVEYXRhU2VydmljZS5nZXRIZWFkZXJzKClba2V5XS50eXBlO1xuICB9XG5cbiAgZ2V0Q29sdW1uSXNFZGl0YWJsZUJ5S2V5KGtleSk6IEJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YVNlcnZpY2UuZ2V0SGVhZGVycygpW2tleV0uaXNFZGl0YWJsZTtcbiAgfVxuXG4gIGdldERhdGFCeUtleShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSAhdGhpcy5pc0VkaXRpbmc7XG4gICAgaWYgKHRoaXMuaXNFZGl0aW5nKSB7XG4gICAgICB0aGlzLnRhYmxlTWVzc2FnaW5nU2VydmljZS5ub3RpZnkoe1xuICAgICAgICB0eXBlOiBDT05URVhUUy5ERUZBVUxULFxuICAgICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0VESVRfU1RBUlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy50YWJsZU1lc3NhZ2luZ1NlcnZpY2Uubm90aWZ5KHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0VESVQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJvdzogdGhpcy5fZGF0YVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMuZGVsZXRlQWN0aXZhdGVkID0gIXRoaXMuZGVsZXRlQWN0aXZhdGVkO1xuICAgIHRoaXMudGFibGVNZXNzYWdpbmdTZXJ2aWNlLm5vdGlmeSh7XG4gICAgICB0eXBlOiBDT05URVhUUy5ERUZBVUxULFxuICAgICAgbWVzc2FnZTogTUVTU0FHRVMuSVRFTV9ERUxFVEUsXG4gICAgICBkYXRhOiB0aGlzLl9kYXRhXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==