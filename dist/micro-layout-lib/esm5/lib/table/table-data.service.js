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
var TableDataService = /** @class */ (function () {
    function TableDataService(tableMessagingService, arrayToChunksPipe, ng2OrderPipe) {
        var _this = this;
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
                function () {
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
                function (data) {
                    _this.reorder(data.sort_by);
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
                function (data) { return _this.itemEdit(data); })
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
                function (data) {
                    if (confirm("Delete " + data.id + "?")) {
                        _this.itemDelete(data.id);
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
        function (message) {
            return MessageResolver(_this.callbacks, message);
        }));
    }
    /**
     * @param {?} tableId
     * @return {?}
     */
    TableDataService.prototype.setTableId = /**
     * @param {?} tableId
     * @return {?}
     */
    function (tableId) {
        console.log('table id', tableId);
        return this.tableId;
    };
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
        this.data = null;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this._data), this._getLimit());
        this.changeData();
    };
    /**
     * @return {?}
     */
    TableDataService.prototype.getLimit = /**
     * @return {?}
     */
    function () {
        return this.limit;
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
     * @return {?}
     */
    TableDataService.prototype.getRows = /**
     * @return {?}
     */
    function () {
        return this.data;
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
        this._data = data;
        this.data = this.arrayToChunksPipe.transform(this.setColumns(schema, this._data), this._getLimit());
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
     * @return {?}
     */
    TableDataService.prototype.getNumberOfPages = /**
     * @return {?}
     */
    function () {
        return this.data.length;
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
        this._tableData = {
            currentPage: this.pageNumber,
            data: data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        console.log('table id', this.tableId);
        this.tableData.next(this._tableData);
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
            return this._data.length;
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
            var newColumns = [];
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
     * @protected
     * @param {?} data
     * @return {?}
     */
    TableDataService.prototype.itemEdit = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.data = this.data.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item['_id'] === data.row._id) {
                return data.row;
            }
            return item;
        }));
        this.dataChange.next({
            type: 'edit',
            data: data.row
        });
    };
    /**
     * @protected
     * @param {?} id
     * @return {?}
     */
    TableDataService.prototype.itemDelete = /**
     * @protected
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.dataChange.next({
            type: 'delete',
            data: id
        });
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    TableDataService.prototype.resolveItemPagePosition = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
    };
    /**
     * @protected
     * @param {?} orderBy
     * @return {?}
     */
    TableDataService.prototype.reorder = /**
     * @protected
     * @param {?} orderBy
     * @return {?}
     */
    function (orderBy) {
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
    };
    TableDataService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TableDataService.ctorParameters = function () { return [
        { type: TableMessagingService },
        { type: ArrayToChunksPipe },
        { type: Ng2OrderPipe }
    ]; };
    return TableDataService;
}());
export { TableDataService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRixPQUFPLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT3RELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFLN0I7SUF1REUsMEJBQW9CLHFCQUE0QyxFQUM1QyxpQkFBb0MsRUFDcEMsWUFBMEI7UUFGOUMsaUJBU0M7UUFUbUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBdkQ5QixlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekMscUJBQWdCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDckQsY0FBUyxHQUFtQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRzFDLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFFbEIsY0FBUyxHQUFHO1lBQ3BCO2dCQUNFLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTztnQkFDdEIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxpQkFBaUI7Z0JBQ25DLFFBQVE7OztnQkFBRTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQTthQUNG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OUIsbUNBQTRCOzs7OztJQUU1QixxQ0FzQ0U7Ozs7O0lBQ0YsbUNBQTBCOzs7OztJQUMxQixvQ0FBMkI7Ozs7O0lBQzNCLGlDQUErQjs7Ozs7SUFDL0Isc0NBQTZCOzs7OztJQUM3QixnQ0FBcUM7Ozs7O0lBQ3JDLGlDQUErQjs7Ozs7SUFFbkIsaURBQW9EOzs7OztJQUNwRCw2Q0FBNEM7Ozs7O0lBQzVDLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nMk9yZGVyUGlwZX0gZnJvbSAnbmcyLW9yZGVyLXBpcGUnO1xuXG5pbXBvcnQge1RhYmxlTWVzc2FnaW5nU2VydmljZSwgTWVzc2FnZVJlc29sdmVyfSBmcm9tICcuL3RhYmxlLW1lc3NhZ2luZy5zZXJ2aWNlJztcbmltcG9ydCB7TUVTU0FHRVMsIENPTlRFWFRTfSBmcm9tICcuL3RhYmxlLmNvbnN0YW50cyc7XG5cbmltcG9ydCB7QXJyYXlUb0NodW5rc1BpcGV9IGZyb20gJy4uL3BpcGVzL2FycmF5LnBpcGUnO1xuXG5pbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVSb3csXG4gIFRhYmxlU2NoZW1hXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQHRvZG8gQ3JlYXRlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYWJsZURhdGFTZXJ2aWNlIHtcbiAgcHVibGljIHJlYWRvbmx5IGRhdGFDaGFuZ2U6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyByZWFkb25seSBlbGVtZW50U2VsZWN0ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgdGFibGVEYXRhOiBTdWJqZWN0PFRhYmxlPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBfdGFibGVEYXRhOiBUYWJsZTtcbiAgcHJvdGVjdGVkIHNjaGVtYTogVGFibGVTY2hlbWE7XG4gIHByb3RlY3RlZCB0YWJsZUlkID0gJ3RhYmxlJztcblxuICBwcm90ZWN0ZWQgY2FsbGJhY2tzID0gW1xuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0VESVRfU1RBUlRFRCxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGVkaXQgc3RhcnRlZCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gT24gc29ydFxuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5TT1JUX0NMSUNLLFxuICAgICAgY2FsbGJhY2s6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMucmVvcmRlcihkYXRhLnNvcnRfYnkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gT24gZWRpdFxuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0VESVQsXG4gICAgICBjYWxsYmFjazogKGRhdGEpID0+IHRoaXMuaXRlbUVkaXQoZGF0YSlcbiAgICB9LFxuICAgIC8vIE9uIGFkZFxuICAgIHtcbiAgICAgIHR5cGU6IENPTlRFWFRTLkRFRkFVTFQsXG4gICAgICBtZXNzYWdlOiBNRVNTQUdFUy5JVEVNX0FERCxcbiAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgfSxcbiAgICAvLyBPbiBkZWxldGVcbiAgICB7XG4gICAgICB0eXBlOiBDT05URVhUUy5ERUZBVUxULFxuICAgICAgbWVzc2FnZTogTUVTU0FHRVMuSVRFTV9ERUxFVEUsXG4gICAgICBjYWxsYmFjazogKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm0oYERlbGV0ZSAke2RhdGEuaWR9P2ApKSB7XG4gICAgICAgICAgdGhpcy5pdGVtRGVsZXRlKGRhdGEuaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgXTtcbiAgcHJvdGVjdGVkIG9yZGVyQnk6IFN0cmluZztcbiAgcHJvdGVjdGVkIG9yZGVyRGlyID0gZmFsc2U7XG4gIHByb3RlY3RlZCBsaW1pdDogbnVtYmVyID0gbnVsbDtcbiAgcHJvdGVjdGVkIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBBcnJheTxBcnJheTxUYWJsZVJvdz4+O1xuICBwcml2YXRlIF9kYXRhOiBBcnJheTxUYWJsZVJvdz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZU1lc3NhZ2luZ1NlcnZpY2U6IFRhYmxlTWVzc2FnaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcnJheVRvQ2h1bmtzUGlwZTogQXJyYXlUb0NodW5rc1BpcGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmcyT3JkZXJQaXBlOiBOZzJPcmRlclBpcGUpIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSAwO1xuICAgIHRoaXMubGltaXQgPSAxMDA7XG4gICAgdGhpcy50YWJsZU1lc3NhZ2luZ1NlcnZpY2VcbiAgICAgICAgLm1lc3NhZ2VcbiAgICAgICAgLnN1YnNjcmliZSgobWVzc2FnZSkgPT5cbiAgICAgICAgICAgIE1lc3NhZ2VSZXNvbHZlcih0aGlzLmNhbGxiYWNrcywgbWVzc2FnZSkpO1xuICB9XG5cbiAgc2V0VGFibGVJZCh0YWJsZUlkKSB7XG4gICAgY29uc29sZS5sb2coJ3RhYmxlIGlkJywgdGFibGVJZCk7XG4gICAgcmV0dXJuIHRoaXMudGFibGVJZDtcbiAgfVxuXG4gIHNldExpbWl0KGxpbWl0OiBudW1iZXIpIHtcbiAgICB0aGlzLmxpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gMDtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuYXJyYXlUb0NodW5rc1BpcGVcbiAgICAgICAgLnRyYW5zZm9ybSh0aGlzLnNldENvbHVtbnModGhpcy5zY2hlbWEsIHRoaXMuX2RhdGEpLCB0aGlzLl9nZXRMaW1pdCgpKTtcbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgfVxuXG4gIGdldExpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmxpbWl0O1xuICB9XG5cbiAgZ2V0SGVhZGVycygpOiBUYWJsZVNjaGVtYSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hO1xuICB9XG5cbiAgZ2V0Um93cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhOiBBcnJheTxUYWJsZVJvdz4sIHNjaGVtYTogVGFibGVTY2hlbWEpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmFycmF5VG9DaHVua3NQaXBlLnRyYW5zZm9ybSh0aGlzLnNldENvbHVtbnMoc2NoZW1hLCB0aGlzLl9kYXRhKSwgdGhpcy5fZ2V0TGltaXQoKSk7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gIH1cblxuICBnZXREYXRhKCk6IFN1YmplY3Q8VGFibGU+IHtcbiAgICByZXR1cm4gdGhpcy50YWJsZURhdGE7XG4gIH1cblxuICBnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICB9XG5cbiAgZ2V0TnVtYmVyT2ZQYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGFuZ2VEYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbdGhpcy5wYWdlTnVtYmVyXTtcbiAgICB0aGlzLl90YWJsZURhdGEgPSB7XG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgZGF0YSxcbiAgICAgIGhlYWRlcjogdGhpcy5zY2hlbWEsXG4gICAgICBudW1iZXJPZlBhZ2VzOiB0aGlzLmRhdGEubGVuZ3RoLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ3RhYmxlIGlkJywgdGhpcy50YWJsZUlkKTtcbiAgICB0aGlzLnRhYmxlRGF0YS5uZXh0KHRoaXMuX3RhYmxlRGF0YSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldExpbWl0KCkge1xuICAgIGlmICh0aGlzLmxpbWl0KSB7XG4gICAgICByZXR1cm4gdGhpcy5saW1pdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRDb2x1bW5zKHNjaGVtYTogVGFibGVTY2hlbWEsIHJvd3M6IEFycmF5PGFueT4pOiBBcnJheTxUYWJsZVJvdz4ge1xuICAgIGNvbnN0IG5ld1Jvd3M6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgcm93cy5mb3JFYWNoKChvbGRSb3cpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NvbHVtbnMgPSBbXTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nQ29sdW1ucyA9IE9iamVjdC5rZXlzKG9sZFJvdyk7XG4gICAgICBmaWVsZHMuZmlsdGVyKGl0ZW0gPT4gIWV4aXN0aW5nQ29sdW1uc1xuICAgICAgICAgIC5pbmNsdWRlcyhpdGVtKSlcbiAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IG9sZFJvd1tpdGVtXSA9IHNjaGVtYVtpdGVtXS5kZWZhdWx0VmFsdWUpO1xuICAgICAgbmV3Um93cy5wdXNoKG9sZFJvdyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Um93cztcbiAgfVxuXG4gIHByb3RlY3RlZCBpdGVtRWRpdChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtWydfaWQnXSA9PT0gZGF0YS5yb3cuX2lkKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnJvdztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoe1xuICAgICAgdHlwZTogJ2VkaXQnLFxuICAgICAgZGF0YTogZGF0YS5yb3dcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpdGVtRGVsZXRlKGlkKSB7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoe1xuICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICBkYXRhOiBpZFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc29sdmVJdGVtUGFnZVBvc2l0aW9uKGl0ZW0pIHtcblxuICB9XG5cbiAgcHJvdGVjdGVkIHJlb3JkZXIob3JkZXJCeSkge1xuICAgIGlmICh0aGlzLm9yZGVyQnkgPT09IG9yZGVyQnkpIHtcbiAgICAgIHRoaXMub3JkZXJEaXIgPSAhdGhpcy5vcmRlckRpcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcmRlckJ5ID0gb3JkZXJCeTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSAwO1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5hcnJheVRvQ2h1bmtzUGlwZVxuICAgICAgICAudHJhbnNmb3JtKHRoaXMuc2V0Q29sdW1ucyhcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLFxuICAgICAgICAgICAgdGhpcy5uZzJPcmRlclBpcGVcbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtKHRoaXMuX2RhdGEsIHRoaXMub3JkZXJCeSwgdGhpcy5vcmRlckRpcikpLFxuICAgICAgICAgICAgdGhpcy5fZ2V0TGltaXQoKSk7XG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gIH1cbn1cbiJdfQ==