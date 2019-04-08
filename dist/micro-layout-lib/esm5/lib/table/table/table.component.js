/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DEFAULT_TABLE_OPTIONS, PAGINATION } from '../table.constants';
import { TableDataService } from '../table-data.service';
import { TableService } from '../table.service';
var TableComponent = /** @class */ (function () {
    function TableComponent(tableDataService, tableService) {
        this.tableDataService = tableDataService;
        this.tableService = tableService;
        this.tableID = 'default';
        // Only if we have external page handler
        this.add = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.pageChange = new EventEmitter();
        this.numberOfItemsChange = new EventEmitter();
        this.isLoading = false;
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
            this.tableDataService.setLimit(this.tableLimit);
        }
        // On data update
        this.dataChange$ = this.tableDataService.dataChange$
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this[data.type].emit(data.data);
        }));
        // On new data
        this.getData$ = this.tableDataService
            .getData()
            .subscribe((/**
         * @param {?} newData
         * @return {?}
         */
        function (newData) {
            _this.header = newData.header;
            _this.container = newData.data;
            if (_this.tableOptions.isInternalPagination) {
                _this.numOfPages = newData.numberOfPages;
                _this.currentPage = newData.currentPage;
            }
        }));
        if (!this.tableOptions.isInternalPagination) {
            this.currentPage = 0;
        }
        this.tableDataService.setData(this.data, this.tableOptions.schema);
        this.tableDataService.setLimit(this.tableOptions.numberOfItems[0]);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.tableOptions) {
            this.tableOptions = Object.assign({}, DEFAULT_TABLE_OPTIONS, this.tableOptions);
            this.tableService.setOptions(this.tableOptions);
        }
        if (changes.data) {
            this.tableDataService.setData(this.data, this.tableOptions.schema);
        }
        if (changes.numberOfPages) {
            this.numOfPages = this.numberOfPages;
        }
        if (changes.pageNumber) {
            this.currentPage = this.pageNumber;
        }
        if (changes.tableLimit) {
            this.tableDataService.setLimit(changes.tableLimit.currentValue);
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.getCurrentPage = /**
     * @return {?}
     */
    function () {
        return this.currentPage + 1;
    };
    /**
     * @param {?} numOfItems
     * @return {?}
     */
    TableComponent.prototype.onChangeNumberOfItems = /**
     * @param {?} numOfItems
     * @return {?}
     */
    function (numOfItems) {
        this.tableLimit = parseInt(numOfItems, 10);
        this.tableDataService.setLimit(this.tableLimit);
        this.numberOfItemsChange.emit(this.tableLimit);
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.onNextPage = /**
     * @return {?}
     */
    function () {
        if (this.tableOptions.isInternalPagination) {
            this.tableDataService.goToPage(this.currentPage + 1);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.next,
            });
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.onPreviousPage = /**
     * @return {?}
     */
    function () {
        if (this.tableOptions.isInternalPagination) {
            this.tableDataService.goToPage(this.currentPage - 1);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.previous,
            });
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dataChange$.unsubscribe();
        this.getData$.unsubscribe();
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-table, [ml-table]',
                    template: "<table\n        [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n>\n    <thead\n            ml-table-header\n            [data]=\"header\"\n            class=\"header\"\n            [isEditable]=\"tableOptions.isEditable\"\n    ></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isDraggable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody\n            ml-table-container\n            class=\"table-container\"\n            *ngIf=\"!tableOptions.isDraggable\"\n            [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n    ></tbody>\n</table>\n<div class=\"table-navigation\">\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onPreviousPage()\"\n            *ngIf=\"currentPage > 0\"\n    >\n        Previous page\n    </button>\n    <span class=\"page-information\">\n        {{ getCurrentPage() }} / {{ numOfPages }}\n    </span>\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onNextPage()\"\n            *ngIf=\"currentPage < numOfPages - 1\"\n    >\n        Next page\n    </button>\n</div>\n<div\n        class=\"number-of-items\"\n        *ngIf=\"tableOptions.canChangeNumberOfItems\"\n>\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n        <option\n                *ngFor=\"let value of tableOptions.numberOfItems\"\n                [value]=\"value\"\n        >{{value}}</option>\n    </select>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [TableDataService, TableService]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: TableDataService },
        { type: TableService }
    ]; };
    TableComponent.propDecorators = {
        tableID: [{ type: Input }],
        data: [{ type: Input }],
        tableOptions: [{ type: Input }],
        tableLimit: [{ type: Input }],
        numberOfPages: [{ type: Input }],
        pageNumber: [{ type: Input }],
        add: [{ type: Output }],
        edit: [{ type: Output }],
        delete: [{ type: Output }],
        pageChange: [{ type: Output }],
        numberOfItemsChange: [{ type: Output }],
        isLoading: [{ type: Input }]
    };
    return TableComponent;
}());
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.tableID;
    /** @type {?} */
    TableComponent.prototype.data;
    /** @type {?} */
    TableComponent.prototype.tableOptions;
    /** @type {?} */
    TableComponent.prototype.tableLimit;
    /** @type {?} */
    TableComponent.prototype.numberOfPages;
    /** @type {?} */
    TableComponent.prototype.pageNumber;
    /** @type {?} */
    TableComponent.prototype.add;
    /** @type {?} */
    TableComponent.prototype.edit;
    /** @type {?} */
    TableComponent.prototype.delete;
    /** @type {?} */
    TableComponent.prototype.pageChange;
    /** @type {?} */
    TableComponent.prototype.numberOfItemsChange;
    /** @type {?} */
    TableComponent.prototype.isLoading;
    /** @type {?} */
    TableComponent.prototype.header;
    /** @type {?} */
    TableComponent.prototype.container;
    /** @type {?} */
    TableComponent.prototype.currentPage;
    /** @type {?} */
    TableComponent.prototype.numOfPages;
    /** @type {?} */
    TableComponent.prototype.dataChange$;
    /** @type {?} */
    TableComponent.prototype.getData$;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.tableDataService;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.tableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQzFCLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFOUM7SUE4Qkksd0JBQW9CLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXRFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXZCakYsWUFBTyxHQUFHLFNBQVMsQ0FBQzs7UUFPbkIsUUFBRyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0MsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELHdCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFVeUQsQ0FBQzs7OztJQUU5RixpQ0FBUTs7O0lBQVI7UUFBQSxpQkE0QkM7UUEzQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtZQUNqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENB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LEFBdkhELElBdUhDO1NBakhZLGNBQWM7OztJQUN2QixpQ0FBNkI7O0lBQzdCLDhCQUErQjs7SUFDL0Isc0NBQW9DOztJQUNwQyxvQ0FBNEI7O0lBQzVCLHVDQUErQjs7SUFDL0Isb0NBQTRCOztJQUU1Qiw2QkFBc0Q7O0lBQ3RELDhCQUF1RDs7SUFDdkQsZ0NBQXlEOztJQUV6RCxvQ0FBNkQ7O0lBQzdELDZDQUF5RTs7SUFDekUsbUNBQW9DOztJQUVwQyxnQ0FBTzs7SUFDUCxtQ0FBVTs7SUFDVixxQ0FBWTs7SUFDWixvQ0FBVzs7SUFFWCxxQ0FBWTs7SUFDWixrQ0FBUzs7Ozs7SUFFRywwQ0FBMEM7Ozs7O0lBQUUsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBUYWJsZVJvdyxcbiAgICBUYWJsZU9wdGlvbnNcbn0gZnJvbSAnLi4vdGFibGUuaW50ZXJmYWNlJztcblxuaW1wb3J0IHtERUZBVUxUX1RBQkxFX09QVElPTlMsIFBBR0lOQVRJT059IGZyb20gJy4uL3RhYmxlLmNvbnN0YW50cyc7XG5pbXBvcnQge1RhYmxlRGF0YVNlcnZpY2V9IGZyb20gJy4uL3RhYmxlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSAnLi4vdGFibGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWwtdGFibGUsIFttbC10YWJsZV0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbVGFibGVEYXRhU2VydmljZSwgVGFibGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHRhYmxlSUQgPSAnZGVmYXVsdCc7XG4gICAgQElucHV0KCkgZGF0YTogQXJyYXk8VGFibGVSb3c+O1xuICAgIEBJbnB1dCgpIHRhYmxlT3B0aW9uczogVGFibGVPcHRpb25zO1xuICAgIEBJbnB1dCgpIHRhYmxlTGltaXQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBudW1iZXJPZlBhZ2VzOiBudW1iZXI7IC8vIE9ubHkgaWYgd2UgaGF2ZSBleHRlcm5hbCBwYWdlIGhhbmRsZXJcbiAgICBASW5wdXQoKSBwYWdlTnVtYmVyOiBudW1iZXI7IC8vIE9ubHkgaWYgd2UgaGF2ZSBleHRlcm5hbCBwYWdlIGhhbmRsZXJcblxuICAgIEBPdXRwdXQoKSBhZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwYWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbnVtYmVyT2ZJdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkgaXNMb2FkaW5nOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgICBoZWFkZXI7XG4gICAgY29udGFpbmVyO1xuICAgIGN1cnJlbnRQYWdlO1xuICAgIG51bU9mUGFnZXM7XG5cbiAgICBkYXRhQ2hhbmdlJDtcbiAgICBnZXREYXRhJDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVEYXRhU2VydmljZTogVGFibGVEYXRhU2VydmljZSwgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoKHRoaXMudGFibGVMaW1pdCA+IDApICYmIHRoaXMudGFibGVPcHRpb25zLmlzSW50ZXJuYWxQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2Uuc2V0TGltaXQodGhpcy50YWJsZUxpbWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9uIGRhdGEgdXBkYXRlXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZSQgPSB0aGlzLnRhYmxlRGF0YVNlcnZpY2UuZGF0YUNoYW5nZSRcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PlxuICAgICAgICAgICAgICAgIHRoaXNbZGF0YS50eXBlXS5lbWl0KGRhdGEuZGF0YSkpO1xuXG4gICAgICAgIC8vIE9uIG5ldyBkYXRhXG4gICAgICAgIHRoaXMuZ2V0RGF0YSQgPSB0aGlzLnRhYmxlRGF0YVNlcnZpY2VcbiAgICAgICAgICAgIC5nZXREYXRhKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobmV3RGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXdEYXRhLmhlYWRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ld0RhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1PZlBhZ2VzID0gbmV3RGF0YS5udW1iZXJPZlBhZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbmV3RGF0YS5jdXJyZW50UGFnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXRoaXMudGFibGVPcHRpb25zLmlzSW50ZXJuYWxQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXREYXRhKHRoaXMuZGF0YSwgdGhpcy50YWJsZU9wdGlvbnMuc2NoZW1hKTtcbiAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldExpbWl0KHRoaXMudGFibGVPcHRpb25zLm51bWJlck9mSXRlbXNbMF0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMudGFibGVPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfVEFCTEVfT1BUSU9OUywgdGhpcy50YWJsZU9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uuc2V0T3B0aW9ucyh0aGlzLnRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2Uuc2V0RGF0YSh0aGlzLmRhdGEsIHRoaXMudGFibGVPcHRpb25zLnNjaGVtYSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5udW1iZXJPZlBhZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLm51bU9mUGFnZXMgPSB0aGlzLm51bWJlck9mUGFnZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5wYWdlTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdlTnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMudGFibGVMaW1pdCkge1xuICAgICAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldExpbWl0KGNoYW5nZXMudGFibGVMaW1pdC5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlICsgMTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU51bWJlck9mSXRlbXMobnVtT2ZJdGVtczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGFibGVMaW1pdCA9IHBhcnNlSW50KG51bU9mSXRlbXMsIDEwKTtcbiAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldExpbWl0KHRoaXMudGFibGVMaW1pdCk7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtc0NoYW5nZS5lbWl0KHRoaXMudGFibGVMaW1pdCk7XG4gICAgfVxuXG4gICAgb25OZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLmlzSW50ZXJuYWxQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2UuZ29Ub1BhZ2UoIHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFBBR0lOQVRJT04ubmV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QcmV2aW91c1BhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5pc0ludGVybmFsUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UgLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFBBR0lOQVRJT04ucHJldmlvdXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4iXX0=