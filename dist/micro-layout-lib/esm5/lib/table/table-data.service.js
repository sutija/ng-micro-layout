/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Ng2OrderPipe } from 'ng2-order-pipe';
import { Subject } from 'rxjs';
import { ArrayToChunksPipe } from '../pipes/array.pipe';
import { TableService } from './table.service';
var TableDataService = /** @class */ (function () {
    function TableDataService(tableService, arrayToChunksPipe, ng2OrderPipe) {
        this.tableService = tableService;
        this.arrayToChunksPipe = arrayToChunksPipe;
        this.ng2OrderPipe = ng2OrderPipe;
        this.dataChange$ = new Subject();
        this.elementSelected$ = new Subject();
        this.tableData = new Subject();
        this.orderDir = false;
        this.limit = 100;
        this.pageNumber = 0;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    TableDataService.prototype.setLimit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.limit = limit;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.internalData), this._getLimit());
        this.changeData();
    };
    /**
     * @return {?}
     */
    TableDataService.prototype.getHeaders = /**
     * @return {?}
     */
    function () {
        return this.schema;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TableDataService.prototype.generateId = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return Math.round((new Date()).getTime() / 1000) + index;
    };
    /**
     * @param {?} data
     * @param {?} schema
     * @return {?}
     */
    TableDataService.prototype.setData = /**
     * @param {?} data
     * @param {?} schema
     * @return {?}
     */
    function (data, schema) {
        var _this = this;
        // Generate row _id
        if (data[0] && !data[0]._id) {
            this.internalData = data.map((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) {
                item._id = _this.generateId(index);
                return item;
            }));
        }
        else {
            this.internalData = data;
        }
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(schema, this.internalData), this._getLimit());
        this.schema = schema;
        this.changeData();
    };
    /**
     * @return {?}
     */
    TableDataService.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.tableData;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    TableDataService.prototype.goToPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.pageNumber = pageNumber;
        this.changeData();
    };
    /**
     * @protected
     * @return {?}
     */
    TableDataService.prototype.changeData = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this.data[this.pageNumber];
        this.internalTableData = {
            currentPage: this.pageNumber,
            data: data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        this.tableData.next(this.internalTableData);
    };
    /**
     * @protected
     * @return {?}
     */
    TableDataService.prototype._getLimit = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.limit) {
            return this.limit;
        }
        else {
            return this.internalData.length;
        }
    };
    /**
     * @protected
     * @param {?} schema
     * @param {?} rows
     * @return {?}
     */
    TableDataService.prototype.setColumns = /**
     * @protected
     * @param {?} schema
     * @param {?} rows
     * @return {?}
     */
    function (schema, rows) {
        /** @type {?} */
        var newRows = [];
        /** @type {?} */
        var fields = Object.keys(schema);
        rows.forEach((/**
         * @param {?} oldRow
         * @return {?}
         */
        function (oldRow) {
            /** @type {?} */
            var existingColumns = Object.keys(oldRow);
            fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !existingColumns
                .includes(item); }))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return oldRow[item] = schema[item].defaultValue; }));
            newRows.push(oldRow);
        }));
        return newRows;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableDataService.prototype.itemAdd = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.internalData.push(data);
                this.dataChange$.next({
                    type: 'add',
                    data: data
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableDataService.prototype.itemEdit = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.internalData = this.internalData
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item._id === data._id) {
                        return data;
                    }
                    return item;
                }));
                this.dataChange$.next({
                    type: 'edit',
                    data: data
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TableDataService.prototype.itemDelete = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var index;
            return tslib_1.__generator(this, function (_a) {
                index = this.internalData
                    .findIndex((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item._id === id; }));
                if (index < 0) {
                    return [2 /*return*/, false];
                }
                this.internalData.splice(index, 1);
                this.dataChange$.next({
                    data: id,
                    type: 'delete'
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} orderBy
     * @return {?}
     */
    TableDataService.prototype.reorder = /**
     * @param {?} orderBy
     * @return {?}
     */
    function (orderBy) {
        this.orderBy === orderBy ? this.orderDir = !this.orderDir : this.orderBy = orderBy;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.ng2OrderPipe
            .transform(this.internalData, this.orderBy, this.orderDir)), this._getLimit());
        this.changeData();
    };
    TableDataService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TableDataService.ctorParameters = function () { return [
        { type: TableService },
        { type: ArrayToChunksPipe },
        { type: Ng2OrderPipe }
    ]; };
    return TableDataService;
}());
export { TableDataService };
if (false) {
    /** @type {?} */
    TableDataService.prototype.dataChange$;
    /** @type {?} */
    TableDataService.prototype.elementSelected$;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.tableData;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.internalTableData;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.schema;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.orderBy;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.orderDir;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.limit;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.pageNumber;
    /**
     * @type {?}
     * @private
     */
    TableDataService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    TableDataService.prototype.internalData;
    /**
     * @type {?}
     * @private
     */
    TableDataService.prototype.tableService;
    /**
     * @type {?}
     * @private
     */
    TableDataService.prototype.arrayToChunksPipe;
    /**
     * @type {?}
     * @private
     */
    TableDataService.prototype.ng2OrderPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QztJQWdCSSwwQkFBb0IsWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ3BDLFlBQTBCO1FBRjFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFoQjlCLGdCQUFXLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakQscUJBQWdCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFckQsY0FBUyxHQUFtQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSzFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFPekIsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFD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bkMsa0NBQThCOzs7OztJQUU5QixtQ0FBMEI7Ozs7O0lBQzFCLG9DQUEyQjs7Ozs7SUFDM0IsaUNBQXNCOzs7OztJQUN0QixzQ0FBeUI7Ozs7O0lBQ3pCLGdDQUFxQzs7Ozs7SUFDckMsd0NBQXNDOzs7OztJQUUxQix3Q0FBa0M7Ozs7O0lBQ2xDLDZDQUE0Qzs7Ozs7SUFDNUMsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmcyT3JkZXJQaXBlfSBmcm9tICduZzItb3JkZXItcGlwZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBcnJheVRvQ2h1bmtzUGlwZX0gZnJvbSAnLi4vcGlwZXMvYXJyYXkucGlwZSc7XG5pbXBvcnQge1xuICAgIERhdGFDaGFuZ2UsXG4gICAgVGFibGUsXG4gICAgVGFibGVSb3csXG4gICAgVGFibGVTY2hlbWFcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gJy4vdGFibGUuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YVNlcnZpY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBkYXRhQ2hhbmdlJDogU3ViamVjdDxEYXRhQ2hhbmdlPiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHVibGljIHJlYWRvbmx5IGVsZW1lbnRTZWxlY3RlZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBTdWJqZWN0PFRhYmxlPiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJvdGVjdGVkIGludGVybmFsVGFibGVEYXRhOiBUYWJsZTtcbiAgICBwcm90ZWN0ZWQgc2NoZW1hOiBUYWJsZVNjaGVtYTtcblxuICAgIHByb3RlY3RlZCBvcmRlckJ5OiBTdHJpbmc7XG4gICAgcHJvdGVjdGVkIG9yZGVyRGlyID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIGxpbWl0ID0gMTAwO1xuICAgIHByb3RlY3RlZCBwYWdlTnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRhdGE6IEFycmF5PEFycmF5PFRhYmxlUm93Pj47XG4gICAgcHJpdmF0ZSBpbnRlcm5hbERhdGE6IEFycmF5PFRhYmxlUm93PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcnJheVRvQ2h1bmtzUGlwZTogQXJyYXlUb0NodW5rc1BpcGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuZzJPcmRlclBpcGU6IE5nMk9yZGVyUGlwZSkge1xuICAgIH1cblxuICAgIHNldExpbWl0KGxpbWl0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saW1pdCA9IGxpbWl0O1xuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmFycmF5VG9DaHVua3NQaXBlXG4gICAgICAgICAgICAudHJhbnNmb3JtKHRoaXMuc2V0Q29sdW1ucyh0aGlzLnNjaGVtYSwgdGhpcy5pbnRlcm5hbERhdGEpLFxuICAgICAgICAgICAgICAgIHRoaXMuX2dldExpbWl0KCkpO1xuICAgICAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgICB9XG5cbiAgICBnZXRIZWFkZXJzKCk6IFRhYmxlU2NoZW1hIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hO1xuICAgIH1cblxuICAgIGdlbmVyYXRlSWQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgKyBpbmRleDtcbiAgICB9XG5cbiAgICBzZXREYXRhKGRhdGE6IEFycmF5PFRhYmxlUm93Piwgc2NoZW1hOiBUYWJsZVNjaGVtYSkge1xuICAgICAgICAvLyBHZW5lcmF0ZSByb3cgX2lkXG4gICAgICAgIGlmIChkYXRhWzBdICYmICFkYXRhWzBdLl9pZCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbERhdGEgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLl9pZCA9IHRoaXMuZ2VuZXJhdGVJZChpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxEYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXJyYXlUb0NodW5rc1BpcGVcbiAgICAgICAgICAgIC50cmFuc2Zvcm0odGhpcy5zZXRDb2x1bW5zKHNjaGVtYSwgdGhpcy5pbnRlcm5hbERhdGEpLCB0aGlzLl9nZXRMaW1pdCgpKTtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgIH1cblxuICAgIGdldERhdGEoKTogU3ViamVjdDxUYWJsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZURhdGE7XG4gICAgfVxuXG4gICAgZ29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VEYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhW3RoaXMucGFnZU51bWJlcl07XG4gICAgICAgIHRoaXMuaW50ZXJuYWxUYWJsZURhdGEgPSB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcjogdGhpcy5zY2hlbWEsXG4gICAgICAgICAgICBudW1iZXJPZlBhZ2VzOiB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhYmxlRGF0YS5uZXh0KHRoaXMuaW50ZXJuYWxUYWJsZURhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TGltaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbWl0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW1pdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGF0YS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Q29sdW1ucyhzY2hlbWE6IFRhYmxlU2NoZW1hLCByb3dzOiBBcnJheTxhbnk+KTogQXJyYXk8VGFibGVSb3c+IHtcbiAgICAgICAgY29uc3QgbmV3Um93czogQXJyYXk8YW55PiA9IFtdO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgICAgIHJvd3MuZm9yRWFjaCgob2xkUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0NvbHVtbnMgPSBPYmplY3Qua2V5cyhvbGRSb3cpO1xuICAgICAgICAgICAgZmllbGRzLmZpbHRlcihpdGVtID0+ICFleGlzdGluZ0NvbHVtbnNcbiAgICAgICAgICAgICAgICAuaW5jbHVkZXMoaXRlbSkpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBvbGRSb3dbaXRlbV0gPSBzY2hlbWFbaXRlbV0uZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIG5ld1Jvd3MucHVzaChvbGRSb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3Um93cztcbiAgICB9XG5cbiAgICBhc3luYyBpdGVtQWRkKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbERhdGEucHVzaChkYXRhKTtcblxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UkLm5leHQoe1xuICAgICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGl0ZW1FZGl0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbERhdGEgPSB0aGlzLmludGVybmFsRGF0YVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5faWQgPT09IGRhdGEuX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZSQubmV4dCh7XG4gICAgICAgICAgICB0eXBlOiAnZWRpdCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGl0ZW1EZWxldGUoaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaW50ZXJuYWxEYXRhXG4gICAgICAgICAgICAuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5faWQgPT09IGlkKTtcblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludGVybmFsRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UkLm5leHQoe1xuICAgICAgICAgICAgZGF0YTogaWQsXG4gICAgICAgICAgICB0eXBlOiAnZGVsZXRlJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW9yZGVyKG9yZGVyQnk6IHN0cmluZykge1xuICAgICAgICB0aGlzLm9yZGVyQnkgPT09IG9yZGVyQnkgPyB0aGlzLm9yZGVyRGlyID0gIXRoaXMub3JkZXJEaXIgOiB0aGlzLm9yZGVyQnkgPSBvcmRlckJ5O1xuXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXJyYXlUb0NodW5rc1BpcGVcbiAgICAgICAgICAgIC50cmFuc2Zvcm0odGhpcy5zZXRDb2x1bW5zKFxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1hLFxuICAgICAgICAgICAgICAgIHRoaXMubmcyT3JkZXJQaXBlXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0odGhpcy5pbnRlcm5hbERhdGEsIHRoaXMub3JkZXJCeSwgdGhpcy5vcmRlckRpcikpLFxuICAgICAgICAgICAgICAgIHRoaXMuX2dldExpbWl0KCkpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgIH1cbn1cbiJdfQ==