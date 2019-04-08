/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableDataService } from '../table-data.service';
export class TableRowComponent {
    /**
     * @param {?} tableDataService
     */
    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.isEditable = false;
        this.isEditing = false;
        this.select = new EventEmitter();
        this.deleteActivated = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
    /**
     * @param {?} type
     * @return {?}
     */
    save(type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.isEditing = false;
            if (type === 'add') {
                yield this.tableDataService.itemAdd(this.data);
            }
            else {
                yield this.tableDataService.itemEdit(this._data);
            }
        });
    }
    /**
     * @return {?}
     */
    delete() {
        this.deleteActivated = true;
        if (confirm(`Delete "${this.data.title}"?`)) {
            this.tableDataService.itemDelete(this.data._id);
        }
    }
}
TableRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-row, [ml-table-row]',
                template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (click)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable && !isEditing\">\n  <button\n          class=\"table-button\"\n          (click)=\"edit()\"\n  >Edit</button>\n  <button class=\"table-button\" (click)=\"delete()\">Delete</button>\n</td>\n<td *ngIf=\"isEditing\">\n  <button class=\"table-button\" (click)=\"save('edit')\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"table-button\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
            }] }
];
/** @nocollapse */
TableRowComponent.ctorParameters = () => [
    { type: TableDataService }
];
TableRowComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }],
    isEditing: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBTXZELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFTNUIsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQN0MsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6RCxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUd4QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEdBQUc7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsd0JBQXdCLENBQUMsR0FBRztRQUMxQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUssSUFBSSxDQUFDLElBQUk7O1lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUNsQixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDO0tBQUE7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsSUFBSSxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyx1d0JBQXlDO2FBQzFDOzs7O1lBTE8sZ0JBQWdCOzs7bUJBT3JCLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFIUCxpQ0FBYzs7SUFDZCx1Q0FBcUM7O0lBQ3JDLHNDQUFvQzs7SUFDcEMsbUNBQXlEOztJQUV6RCxrQ0FBYTs7SUFDYiw0Q0FBd0I7Ozs7O0lBRVosNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVEYXRhU2VydmljZX0gZnJvbSAnLi4vdGFibGUtZGF0YS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtdGFibGUtcm93LCBbbWwtdGFibGUtcm93XScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIGlzRWRpdGFibGU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNFZGl0aW5nOiBCb29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBfZGF0YTtcbiAgZGVsZXRlQWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZURhdGFTZXJ2aWNlOiBUYWJsZURhdGFTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIGVsZW1lbnRTZWxlY3RlZCgpIHtcbiAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2UuZWxlbWVudFNlbGVjdGVkJC5uZXh0KHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgdHJhY2tDb2x1bW4oaW5kZXgsIGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGdldENvbHVtbnNEYXRhKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRhYmxlRGF0YVNlcnZpY2UuZ2V0SGVhZGVycygpKTtcbiAgfVxuXG4gIGdldENvbHVtblR5cGVCeUtleShrZXkpOiBTdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YVNlcnZpY2UuZ2V0SGVhZGVycygpW2tleV0udHlwZTtcbiAgfVxuXG4gIGdldENvbHVtbklzRWRpdGFibGVCeUtleShrZXkpOiBCb29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZURhdGFTZXJ2aWNlLmdldEhlYWRlcnMoKVtrZXldLmlzRWRpdGFibGU7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSAhdGhpcy5pc0VkaXRpbmc7XG4gIH1cblxuICBhc3luYyBzYXZlKHR5cGUpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIGlmICh0eXBlID09PSAnYWRkJykge1xuICAgICAgYXdhaXQgdGhpcy50YWJsZURhdGFTZXJ2aWNlLml0ZW1BZGQodGhpcy5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy50YWJsZURhdGFTZXJ2aWNlLml0ZW1FZGl0KHRoaXMuX2RhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLmRlbGV0ZUFjdGl2YXRlZCA9IHRydWU7XG5cbiAgICBpZiAoY29uZmlybShgRGVsZXRlIFwiJHt0aGlzLmRhdGEudGl0bGV9XCI/YCkpIHtcbiAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5pdGVtRGVsZXRlKHRoaXMuZGF0YS5faWQpO1xuICAgIH1cbiAgfVxufVxuIl19