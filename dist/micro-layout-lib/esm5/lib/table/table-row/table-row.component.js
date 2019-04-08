/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableDataService } from '../table-data.service';
var TableRowComponent = /** @class */ (function () {
    function TableRowComponent(tableDataService) {
        this.tableDataService = tableDataService;
        this.isEditable = false;
        this.isEditing = false;
        this.select = new EventEmitter();
        this.deleteActivated = false;
    }
    /**
     * @return {?}
     */
    TableRowComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} type
     * @return {?}
     */
    TableRowComponent.prototype.save = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isEditing = false;
                        if (!(type === 'add')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tableDataService.itemAdd(this.data)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.tableDataService.itemEdit(this._data)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    TableRowComponent.prototype.delete = /**
     * @return {?}
     */
    function () {
        this.deleteActivated = true;
        if (confirm("Delete \"" + this.data.title + "\"?")) {
            this.tableDataService.itemDelete(this.data._id);
        }
    };
    TableRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-table-row, [ml-table-row]',
                    template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (click)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable && !isEditing\">\n  <button\n          class=\"table-button\"\n          (click)=\"edit()\"\n  >Edit</button>\n  <button class=\"table-button\" (click)=\"delete()\">Delete</button>\n</td>\n<td *ngIf=\"isEditing\">\n  <button class=\"table-button\" (click)=\"save('edit')\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"table-button\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
                }] }
    ];
    /** @nocollapse */
    TableRowComponent.ctorParameters = function () { return [
        { type: TableDataService }
    ]; };
    TableRowComponent.propDecorators = {
        data: [{ type: Input }],
        isEditable: [{ type: Input }],
        isEditing: [{ type: Input }],
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
    TableRowComponent.prototype.select;
    /** @type {?} */
    TableRowComponent.prototype._data;
    /** @type {?} */
    TableRowComponent.prototype.deleteActivated;
    /**
     * @type {?}
     * @private
     */
    TableRowComponent.prototype.tableDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXZEO0lBYUUsMkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUDdDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHekQsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFHeEIsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCx1Q0FBVzs7Ozs7SUFBWCxVQUFZLEtBQUssRUFBRSxJQUFJO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsMENBQWM7OztJQUFkO1FBQ0UsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsOENBQWtCOzs7O0lBQWxCLFVBQW1CLEdBQUc7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsb0RBQXdCOzs7O0lBQXhCLFVBQXlCLEdBQUc7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFSyxnQ0FBSTs7OztJQUFWLFVBQVcsSUFBSTs7Ozs7d0JBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7NkJBQ25CLENBQUEsSUFBSSxLQUFLLEtBQUssQ0FBQSxFQUFkLHdCQUFjO3dCQUNoQixxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTlDLFNBQThDLENBQUM7OzRCQUUvQyxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQWhELFNBQWdELENBQUM7Ozs7OztLQUVwRDs7OztJQUVELGtDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTVCLElBQUksT0FBTyxDQUFDLGNBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsdXdCQUF5QztpQkFDMUM7Ozs7Z0JBTE8sZ0JBQWdCOzs7dUJBT3JCLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBNkRULHdCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FqRVksaUJBQWlCOzs7SUFDNUIsaUNBQWM7O0lBQ2QsdUNBQXFDOztJQUNyQyxzQ0FBb0M7O0lBQ3BDLG1DQUF5RDs7SUFFekQsa0NBQWE7O0lBQ2IsNENBQXdCOzs7OztJQUVaLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlRGF0YVNlcnZpY2V9IGZyb20gJy4uL3RhYmxlLWRhdGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLXRhYmxlLXJvdywgW21sLXRhYmxlLXJvd10nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSBpc0VkaXRhYmxlOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzRWRpdGluZzogQm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgX2RhdGE7XG4gIGRlbGV0ZUFjdGl2YXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVEYXRhU2VydmljZTogVGFibGVEYXRhU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gIH1cblxuICBlbGVtZW50U2VsZWN0ZWQoKSB7XG4gICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLmVsZW1lbnRTZWxlY3RlZCQubmV4dCh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIHRyYWNrQ29sdW1uKGluZGV4LCBpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBnZXRDb2x1bW5zRGF0YSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50YWJsZURhdGFTZXJ2aWNlLmdldEhlYWRlcnMoKSk7XG4gIH1cblxuICBnZXRDb2x1bW5UeXBlQnlLZXkoa2V5KTogU3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZURhdGFTZXJ2aWNlLmdldEhlYWRlcnMoKVtrZXldLnR5cGU7XG4gIH1cblxuICBnZXRDb2x1bW5Jc0VkaXRhYmxlQnlLZXkoa2V5KTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVEYXRhU2VydmljZS5nZXRIZWFkZXJzKClba2V5XS5pc0VkaXRhYmxlO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gIXRoaXMuaXNFZGl0aW5nO1xuICB9XG5cbiAgYXN5bmMgc2F2ZSh0eXBlKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgICBpZiAodHlwZSA9PT0gJ2FkZCcpIHtcbiAgICAgIGF3YWl0IHRoaXMudGFibGVEYXRhU2VydmljZS5pdGVtQWRkKHRoaXMuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMudGFibGVEYXRhU2VydmljZS5pdGVtRWRpdCh0aGlzLl9kYXRhKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgdGhpcy5kZWxldGVBY3RpdmF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbmZpcm0oYERlbGV0ZSBcIiR7dGhpcy5kYXRhLnRpdGxlfVwiP2ApKSB7XG4gICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2UuaXRlbURlbGV0ZSh0aGlzLmRhdGEuX2lkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==