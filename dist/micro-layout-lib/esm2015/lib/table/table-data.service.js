/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Ng2OrderPipe } from 'ng2-order-pipe';
import { TableMessagingService, MessageResolver } from './table-messaging.service';
import { MESSAGES, CONTEXTS } from './table.constants';
import { ArrayToChunksPipe } from '../pipes/array.pipe';
import { Subject } from 'rxjs';
/**
 * \@todo Create
 */
export class TableDataService {
    /**
     * @param {?} tableMessagingService
     * @param {?} arrayToChunksPipe
     * @param {?} ng2OrderPipe
     */
    constructor(tableMessagingService, arrayToChunksPipe, ng2OrderPipe) {
        this.tableMessagingService = tableMessagingService;
        this.arrayToChunksPipe = arrayToChunksPipe;
        this.ng2OrderPipe = ng2OrderPipe;
        this.dataChange = new Subject();
        this.elementSelected$ = new Subject();
        this.tableData = new Subject();
        this.tableId = 'table';
        this.callbacks = [
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_EDIT_STARTED,
                callback: (/**
                 * @return {?}
                 */
                () => {
                    console.log('item edit started');
                })
            },
            // On sort
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.SORT_CLICK,
                callback: (/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    this.reorder(data.sort_by);
                })
            },
            // On edit
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_EDIT,
                callback: (/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => this.itemEdit(data))
            },
            // On add
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_ADD,
                callback: null
            },
            // On delete
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_DELETE,
                callback: (/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    if (confirm(`Delete ${data.id}?`)) {
                        this.itemDelete(data.id);
                    }
                })
            },
        ];
        this.orderDir = false;
        this.limit = null;
        this.pageNumber = 0;
        this.limit = 100;
        this.tableMessagingService
            .message
            .subscribe((/**
         * @param {?} message
         * @return {?}
         */
        (message) => MessageResolver(this.callbacks, message)));
    }
    /**
     * @param {?} tableId
     * @return {?}
     */
    setTableId(tableId) {
        console.log('table id', tableId);
        return this.tableId;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    setLimit(limit) {
        this.limit = limit;
        this.pageNumber = 0;
        this.data = null;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this._data), this._getLimit());
        this.changeData();
    }
    /**
     * @return {?}
     */
    getLimit() {
        return this.limit;
    }
    /**
     * @return {?}
     */
    getHeaders() {
        return this.schema;
    }
    /**
     * @return {?}
     */
    getRows() {
        return this.data;
    }
    /**
     * @param {?} data
     * @param {?} schema
     * @return {?}
     */
    setData(data, schema) {
        this._data = data;
        this.data = this.arrayToChunksPipe.transform(this.setColumns(schema, this._data), this._getLimit());
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
     * @return {?}
     */
    getNumberOfPages() {
        return this.data.length;
    }
    /**
     * @protected
     * @return {?}
     */
    changeData() {
        /** @type {?} */
        const data = this.data[this.pageNumber];
        this._tableData = {
            currentPage: this.pageNumber,
            data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        console.log('table id', this.tableId);
        this.tableData.next(this._tableData);
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
            return this._data.length;
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
            const newColumns = [];
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
     * @protected
     * @param {?} data
     * @return {?}
     */
    itemEdit(data) {
        this.data = this.data.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item['_id'] === data.row._id) {
                return data.row;
            }
            return item;
        }));
        this.dataChange.next({
            type: 'edit',
            data: data.row
        });
    }
    /**
     * @protected
     * @param {?} id
     * @return {?}
     */
    itemDelete(id) {
        this.dataChange.next({
            type: 'delete',
            data: id
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    resolveItemPagePosition(item) {
    }
    /**
     * @protected
     * @param {?} orderBy
     * @return {?}
     */
    reorder(orderBy) {
        if (this.orderBy === orderBy) {
            this.orderDir = !this.orderDir;
        }
        else {
            this.orderBy = orderBy;
        }
        this.pageNumber = 0;
        this.data = null;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.ng2OrderPipe
            .transform(this._data, this.orderBy, this.orderDir)), this._getLimit());
        this.changeData();
    }
}
TableDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableDataService.ctorParameters = () => [
    { type: TableMessagingService },
    { type: ArrayToChunksPipe },
    { type: Ng2OrderPipe }
];
if (false) {
    /** @type {?} */
    TableDataService.prototype.dataChange;
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
    TableDataService.prototype._tableData;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.schema;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.tableId;
    /**
     * @type {?}
     * @protected
     */
    TableDataService.prototype.callbacks;
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
    TableDataService.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TableDataService.prototype.tableMessagingService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRixPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT3RELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFNN0IsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBc0QzQixZQUFvQixxQkFBNEMsRUFDNUMsaUJBQW9DLEVBQ3BDLFlBQTBCO1FBRjFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXZEOUIsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLHFCQUFnQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3JELGNBQVMsR0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUcxQyxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBRWxCLGNBQVMsR0FBRztZQUNwQjtnQkFDRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRLENBQUMsaUJBQWlCO2dCQUNuQyxRQUFROzs7Z0JBQUUsR0FBRyxFQUFFO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztn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dXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nMk9yZGVyUGlwZX0gZnJvbSAnbmcyLW9yZGVyLXBpcGUnO1xuXG5pbXBvcnQge1RhYmxlTWVzc2FnaW5nU2VydmljZSwgTWVzc2FnZVJlc29sdmVyfSBmcm9tICcuL3RhYmxlLW1lc3NhZ2luZy5zZXJ2aWNlJztcbmltcG9ydCB7TUVTU0FHRVMsIENPTlRFWFRTfSBmcm9tICcuL3RhYmxlLmNvbnN0YW50cyc7XG5cbmltcG9ydCB7QXJyYXlUb0NodW5rc1BpcGV9IGZyb20gJy4uL3BpcGVzL2FycmF5LnBpcGUnO1xuXG5pbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVSb3csXG4gIFRhYmxlU2NoZW1hXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQHRvZG8gQ3JlYXRlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYWJsZURhdGFTZXJ2aWNlIHtcbiAgcHVibGljIHJlYWRvbmx5IGRhdGFDaGFuZ2U6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyByZWFkb25seSBlbGVtZW50U2VsZWN0ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBTdWJqZWN0PFRhYmxlPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBfdGFibGVEYXRhOiBUYWJsZTtcbiAgcHJvdGVjdGVkIHNjaGVtYTogVGFibGVTY2hlbWE7XG4gIHByb3RlY3RlZCB0YWJsZUlkID0gJ3RhYmxlJztcblxuICBwcm90ZWN0ZWQgY2FsbGJhY2tzID0gW1xuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0VESVRfU1RBUlRFRCxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGVkaXQgc3RhcnRlZCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gT24gc29ydFxuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5TT1JUX0NMSUNLLFxuICAgICAgY2FsbGJhY2s6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMucmVvcmRlcihkYXRhLnNvcnRfYnkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gT24gZWRpdFxuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0VESVQsXG4gICAgICBjYWxsYmFjazogKGRhdGEpID0+IHRoaXMuaXRlbUVkaXQoZGF0YSlcbiAgICB9LFxuICAgIC8vIE9uIGFkZFxuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0FERCxcbiAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgfSxcbiAgICAvLyBPbiBkZWxldGVcbiAgICB7XG4gICAgICB0eXBlOiBDT05URVhUUy5ERUZBVUxULFxuICAgICAgbWVzc2FnZTogTUVTU0FHRVMuSVRFTV9ERUxFVEUsXG4gICAgICBjYWxsYmFjazogKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm0oYERlbGV0ZSAke2RhdGEuaWR9P2ApKSB7XG4gICAgICAgICAgdGhpcy5pdGVtRGVsZXRlKGRhdGEuaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgXTtcbiAgcHJvdGVjdGVkIG9yZGVyQnk6IFN0cmluZztcbiAgcHJvdGVjdGVkIG9yZGVyRGlyID0gZmFsc2U7XG4gIHByb3RlY3RlZCBsaW1pdDogbnVtYmVyID0gbnVsbDtcbiAgcHJvdGVjdGVkIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBBcnJheTxBcnJheTxUYWJsZVJvdz4+O1xuICBwcml2YXRlIF9kYXRhOiBBcnJheTxUYWJsZVJvdz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZU1lc3NhZ2luZ1NlcnZpY2U6IFRhYmxlTWVzc2FnaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcnJheVRvQ2h1bmtzUGlwZTogQXJyYXlUb0NodW5rc1BpcGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmcyT3JkZXJQaXBlOiBOZzJPcmRlclBpcGUpIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSAwO1xuICAgIHRoaXMubGltaXQgPSAxMDA7XG4gICAgdGhpcy50YWJsZU1lc3NhZ2luZ1NlcnZpY2VcbiAgICAgICAgLm1lc3NhZ2VcbiAgICAgICAgLnN1YnNjcmliZSgobWVzc2FnZSkgPT5cbiAgICAgICAgICAgIE1lc3NhZ2VSZXNvbHZlcih0aGlzLmNhbGxiYWNrcywgbWVzc2FnZSkpO1xuICB9XG5cbiAgc2V0VGFibGVJZCh0YWJsZUlkKSB7XG4gICAgY29uc29sZS5sb2coJ3RhYmxlIGlkJywgdGFibGVJZCk7XG4gICAgcmV0dXJuIHRoaXMudGFibGVJZDtcbiAgfVxuXG4gIHNldExpbWl0KGxpbWl0OiBudW1iZXIpIHtcbiAgICB0aGlzLmxpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gMDtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuYXJyYXlUb0NodW5rc1BpcGVcbiAgICAgICAgLnRyYW5zZm9ybSh0aGlzLnNldENvbHVtbnModGhpcy5zY2hlbWEsIHRoaXMuX2RhdGEpLCB0aGlzLl9nZXRMaW1pdCgpKTtcbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgfVxuXG4gIGdldExpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmxpbWl0O1xuICB9XG5cbiAgZ2V0SGVhZGVycygpOiBUYWJsZVNjaGVtYSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hO1xuICB9XG5cbiAgZ2V0Um93cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhOiBBcnJheTxUYWJsZVJvdz4sIHNjaGVtYTogVGFibGVTY2hlbWEpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmFycmF5VG9DaHVua3NQaXBlLnRyYW5zZm9ybSh0aGlzLnNldENvbHVtbnMoc2NoZW1hLCB0aGlzLl9kYXRhKSwgdGhpcy5fZ2V0TGltaXQoKSk7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gIH1cblxuICBnZXREYXRhKCk6IFN1YmplY3Q8VGFibGU+IHtcbiAgICByZXR1cm4gdGhpcy50YWJsZURhdGE7XG4gIH1cblxuICBnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICB9XG5cbiAgZ2V0TnVtYmVyT2ZQYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGFuZ2VEYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbdGhpcy5wYWdlTnVtYmVyXTtcbiAgICB0aGlzLl90YWJsZURhdGEgPSB7XG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgZGF0YSxcbiAgICAgIGhlYWRlcjogdGhpcy5zY2hlbWEsXG4gICAgICBudW1iZXJPZlBhZ2VzOiB0aGlzLmRhdGEubGVuZ3RoLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ3RhYmxlIGlkJywgdGhpcy50YWJsZUlkKTtcbiAgICB0aGlzLnRhYmxlRGF0YS5uZXh0KHRoaXMuX3RhYmxlRGF0YSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldExpbWl0KCkge1xuICAgIGlmICh0aGlzLmxpbWl0KSB7XG4gICAgICByZXR1cm4gdGhpcy5saW1pdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRDb2x1bW5zKHNjaGVtYTogVGFibGVTY2hlbWEsIHJvd3M6IEFycmF5PGFueT4pOiBBcnJheTxUYWJsZVJvdz4ge1xuICAgIGNvbnN0IG5ld1Jvd3M6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgcm93cy5mb3JFYWNoKChvbGRSb3cpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NvbHVtbnMgPSBbXTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nQ29sdW1ucyA9IE9iamVjdC5rZXlzKG9sZFJvdyk7XG4gICAgICBmaWVsZHMuZmlsdGVyKGl0ZW0gPT4gIWV4aXN0aW5nQ29sdW1uc1xuICAgICAgICAgIC5pbmNsdWRlcyhpdGVtKSlcbiAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IG9sZFJvd1tpdGVtXSA9IHNjaGVtYVtpdGVtXS5kZWZhdWx0VmFsdWUpO1xuICAgICAgbmV3Um93cy5wdXNoKG9sZFJvdyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Um93cztcbiAgfVxuXG4gIHByb3RlY3RlZCBpdGVtRWRpdChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtWydfaWQnXSA9PT0gZGF0YS5yb3cuX2lkKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnJvdztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoe1xuICAgICAgdHlwZTogJ2VkaXQnLFxuICAgICAgZGF0YTogZGF0YS5yb3dcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpdGVtRGVsZXRlKGlkKSB7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoe1xuICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICBkYXRhOiBpZFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc29sdmVJdGVtUGFnZVBvc2l0aW9uKGl0ZW0pIHtcblxuICB9XG5cbiAgcHJvdGVjdGVkIHJlb3JkZXIob3JkZXJCeSkge1xuICAgIGlmICh0aGlzLm9yZGVyQnkgPT09IG9yZGVyQnkpIHtcbiAgICAgIHRoaXMub3JkZXJEaXIgPSAhdGhpcy5vcmRlckRpcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcmRlckJ5ID0gb3JkZXJCeTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSAwO1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5hcnJheVRvQ2h1bmtzUGlwZVxuICAgICAgICAudHJhbnNmb3JtKHRoaXMuc2V0Q29sdW1ucyhcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLFxuICAgICAgICAgICAgdGhpcy5uZzJPcmRlclBpcGVcbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtKHRoaXMuX2RhdGEsIHRoaXMub3JkZXJCeSwgdGhpcy5vcmRlckRpcikpLFxuICAgICAgICAgICAgdGhpcy5fZ2V0TGltaXQoKSk7XG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gIH1cbn1cbiJdfQ==