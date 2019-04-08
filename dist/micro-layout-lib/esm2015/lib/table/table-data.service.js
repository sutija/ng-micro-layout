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
export class TableDataService {
    /**
     * @param {?} tableService
     * @param {?} arrayToChunksPipe
     * @param {?} ng2OrderPipe
     */
    constructor(tableService, arrayToChunksPipe, ng2OrderPipe) {
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
    setLimit(limit) {
        this.limit = limit;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.internalData), this._getLimit());
        this.changeData();
    }
    /**
     * @return {?}
     */
    getHeaders() {
        return this.schema;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    generateId(index) {
        return Math.round((new Date()).getTime() / 1000) + index;
    }
    /**
     * @param {?} data
     * @param {?} schema
     * @return {?}
     */
    setData(data, schema) {
        // Generate row _id
        if (data[0] && !data[0]._id) {
            this.internalData = data.map((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => {
                item._id = this.generateId(index);
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
    }
    /**
     * @return {?}
     */
    getData() {
        return this.tableData;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    goToPage(pageNumber) {
        this.pageNumber = pageNumber;
        this.changeData();
    }
    /**
     * @protected
     * @return {?}
     */
    changeData() {
        /** @type {?} */
        const data = this.data[this.pageNumber];
        this.internalTableData = {
            currentPage: this.pageNumber,
            data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        this.tableData.next(this.internalTableData);
    }
    /**
     * @protected
     * @return {?}
     */
    _getLimit() {
        if (this.limit) {
            return this.limit;
        }
        else {
            return this.internalData.length;
        }
    }
    /**
     * @protected
     * @param {?} schema
     * @param {?} rows
     * @return {?}
     */
    setColumns(schema, rows) {
        /** @type {?} */
        const newRows = [];
        /** @type {?} */
        const fields = Object.keys(schema);
        rows.forEach((/**
         * @param {?} oldRow
         * @return {?}
         */
        (oldRow) => {
            /** @type {?} */
            const existingColumns = Object.keys(oldRow);
            fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !existingColumns
                .includes(item)))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => oldRow[item] = schema[item].defaultValue));
            newRows.push(oldRow);
        }));
        return newRows;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    itemAdd(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.internalData.push(data);
            this.dataChange$.next({
                type: 'add',
                data: data
            });
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    itemEdit(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.internalData = this.internalData
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item._id === data._id) {
                    return data;
                }
                return item;
            }));
            this.dataChange$.next({
                type: 'edit',
                data: data
            });
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    itemDelete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const index = this.internalData
                .findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item._id === id));
            if (index < 0) {
                return false;
            }
            this.internalData.splice(index, 1);
            this.dataChange$.next({
                data: id,
                type: 'delete'
            });
        });
    }
    /**
     * @param {?} orderBy
     * @return {?}
     */
    reorder(orderBy) {
        this.orderBy === orderBy ? this.orderDir = !this.orderDir : this.orderBy = orderBy;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.ng2OrderPipe
            .transform(this.internalData, this.orderBy, this.orderDir)), this._getLimit());
        this.changeData();
    }
}
TableDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableDataService.ctorParameters = () => [
    { type: TableService },
    { type: ArrayToChunksPipe },
    { type: Ng2OrderPipe }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUk3QyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFlekIsWUFBb0IsWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ3BDLFlBQTBCO1FBRjFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFoQjlCLGdCQUFXLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakQscUJBQWdCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFckQsY0FBUyxHQUFtQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSzFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFPekIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENB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Y2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZzJPcmRlclBpcGV9IGZyb20gJ25nMi1vcmRlci1waXBlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0FycmF5VG9DaHVua3NQaXBlfSBmcm9tICcuLi9waXBlcy9hcnJheS5waXBlJztcbmltcG9ydCB7XG4gICAgRGF0YUNoYW5nZSxcbiAgICBUYWJsZSxcbiAgICBUYWJsZVJvdyxcbiAgICBUYWJsZVNjaGVtYVxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSAnLi90YWJsZS5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU2VydmljZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGRhdGFDaGFuZ2UkOiBTdWJqZWN0PERhdGFDaGFuZ2U+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZWxlbWVudFNlbGVjdGVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIHByb3RlY3RlZCB0YWJsZURhdGE6IFN1YmplY3Q8VGFibGU+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxUYWJsZURhdGE6IFRhYmxlO1xuICAgIHByb3RlY3RlZCBzY2hlbWE6IFRhYmxlU2NoZW1hO1xuXG4gICAgcHJvdGVjdGVkIG9yZGVyQnk6IFN0cmluZztcbiAgICBwcm90ZWN0ZWQgb3JkZXJEaXIgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgbGltaXQgPSAxMDA7XG4gICAgcHJvdGVjdGVkIHBhZ2VOdW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZGF0YTogQXJyYXk8QXJyYXk8VGFibGVSb3c+PjtcbiAgICBwcml2YXRlIGludGVybmFsRGF0YTogQXJyYXk8VGFibGVSb3c+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFycmF5VG9DaHVua3NQaXBlOiBBcnJheVRvQ2h1bmtzUGlwZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5nMk9yZGVyUGlwZTogTmcyT3JkZXJQaXBlKSB7XG4gICAgfVxuXG4gICAgc2V0TGltaXQobGltaXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpbWl0ID0gbGltaXQ7XG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXJyYXlUb0NodW5rc1BpcGVcbiAgICAgICAgICAgIC50cmFuc2Zvcm0odGhpcy5zZXRDb2x1bW5zKHRoaXMuc2NoZW1hLCB0aGlzLmludGVybmFsRGF0YSksXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0TGltaXQoKSk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgIH1cblxuICAgIGdldEhlYWRlcnMoKTogVGFibGVTY2hlbWEge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWE7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVJZChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSArIGluZGV4O1xuICAgIH1cblxuICAgIHNldERhdGEoZGF0YTogQXJyYXk8VGFibGVSb3c+LCBzY2hlbWE6IFRhYmxlU2NoZW1hKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHJvdyBfaWRcbiAgICAgICAgaWYgKGRhdGFbMF0gJiYgIWRhdGFbMF0uX2lkKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRGF0YSA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uX2lkID0gdGhpcy5nZW5lcmF0ZUlkKGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbERhdGEgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5hcnJheVRvQ2h1bmtzUGlwZVxuICAgICAgICAgICAgLnRyYW5zZm9ybSh0aGlzLnNldENvbHVtbnMoc2NoZW1hLCB0aGlzLmludGVybmFsRGF0YSksIHRoaXMuX2dldExpbWl0KCkpO1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpOiBTdWJqZWN0PFRhYmxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YTtcbiAgICB9XG5cbiAgICBnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICAgICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNoYW5nZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbdGhpcy5wYWdlTnVtYmVyXTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFRhYmxlRGF0YSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyOiB0aGlzLnNjaGVtYSxcbiAgICAgICAgICAgIG51bWJlck9mUGFnZXM6IHRoaXMuZGF0YS5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGFibGVEYXRhLm5leHQodGhpcy5pbnRlcm5hbFRhYmxlRGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRMaW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGltaXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbWl0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEYXRhLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRDb2x1bW5zKHNjaGVtYTogVGFibGVTY2hlbWEsIHJvd3M6IEFycmF5PGFueT4pOiBBcnJheTxUYWJsZVJvdz4ge1xuICAgICAgICBjb25zdCBuZXdSb3dzOiBBcnJheTxhbnk+ID0gW107XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgICAgICAgcm93cy5mb3JFYWNoKChvbGRSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nQ29sdW1ucyA9IE9iamVjdC5rZXlzKG9sZFJvdyk7XG4gICAgICAgICAgICBmaWVsZHMuZmlsdGVyKGl0ZW0gPT4gIWV4aXN0aW5nQ29sdW1uc1xuICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhpdGVtKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IG9sZFJvd1tpdGVtXSA9IHNjaGVtYVtpdGVtXS5kZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgbmV3Um93cy5wdXNoKG9sZFJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdSb3dzO1xuICAgIH1cblxuICAgIGFzeW5jIGl0ZW1BZGQoZGF0YSkge1xuICAgICAgICB0aGlzLmludGVybmFsRGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZSQubmV4dCh7XG4gICAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaXRlbUVkaXQoZGF0YSkge1xuICAgICAgICB0aGlzLmludGVybmFsRGF0YSA9IHRoaXMuaW50ZXJuYWxEYXRhXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLl9pZCA9PT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlJC5uZXh0KHtcbiAgICAgICAgICAgIHR5cGU6ICdlZGl0JyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaXRlbURlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbnRlcm5hbERhdGFcbiAgICAgICAgICAgIC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLl9pZCA9PT0gaWQpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW50ZXJuYWxEYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZSQubmV4dCh7XG4gICAgICAgICAgICBkYXRhOiBpZCxcbiAgICAgICAgICAgIHR5cGU6ICdkZWxldGUnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlb3JkZXIob3JkZXJCeTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMub3JkZXJCeSA9PT0gb3JkZXJCeSA/IHRoaXMub3JkZXJEaXIgPSAhdGhpcy5vcmRlckRpciA6IHRoaXMub3JkZXJCeSA9IG9yZGVyQnk7XG5cbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5hcnJheVRvQ2h1bmtzUGlwZVxuICAgICAgICAgICAgLnRyYW5zZm9ybSh0aGlzLnNldENvbHVtbnMoXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlbWEsXG4gICAgICAgICAgICAgICAgdGhpcy5uZzJPcmRlclBpcGVcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zZm9ybSh0aGlzLmludGVybmFsRGF0YSwgdGhpcy5vcmRlckJ5LCB0aGlzLm9yZGVyRGlyKSksXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0TGltaXQoKSk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gICAgfVxufVxuIl19