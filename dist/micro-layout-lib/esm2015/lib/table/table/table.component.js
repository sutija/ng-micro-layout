/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DEFAULT_TABLE_OPTIONS, PAGINATION } from '../table.constants';
import { TableDataService } from '../table-data.service';
import { TableService } from '../table.service';
import { ArrayToChunksPipe } from '../../pipes/array.pipe';
import { Ng2OrderPipe } from 'ng2-order-pipe';
export class TableComponent {
    /**
     * @param {?} tableDataService
     * @param {?} tableService
     */
    constructor(tableDataService, tableService) {
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
    ngOnInit() {
        if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
            this.tableDataService.setLimit(this.tableLimit);
        }
        // On data update
        this.dataChange$ = this.tableDataService.dataChange$
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this[data.type].emit(data.data)));
        // On new data
        this.getData$ = this.tableDataService
            .getData()
            .subscribe((/**
         * @param {?} newData
         * @return {?}
         */
        newData => {
            this.header = newData.header;
            this.container = newData.data;
            if (this.tableOptions.isInternalPagination) {
                this.numOfPages = newData.numberOfPages;
                this.currentPage = newData.currentPage;
            }
        }));
        if (!this.tableOptions.isInternalPagination) {
            this.currentPage = 0;
        }
        this.tableDataService.setData(this.data, this.tableOptions.schema);
        this.tableDataService.setLimit(this.tableOptions.numberOfItems[0]);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    getCurrentPage() {
        return this.currentPage + 1;
    }
    /**
     * @param {?} numOfItems
     * @return {?}
     */
    onChangeNumberOfItems(numOfItems) {
        this.tableLimit = parseInt(numOfItems, 10);
        this.tableDataService.setLimit(this.tableLimit);
        this.numberOfItemsChange.emit(this.tableLimit);
    }
    /**
     * @return {?}
     */
    onNextPage() {
        if (this.tableOptions.isInternalPagination) {
            this.tableDataService.goToPage(this.currentPage + 1);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.next,
            });
        }
    }
    /**
     * @return {?}
     */
    onPreviousPage() {
        if (this.tableOptions.isInternalPagination) {
            this.tableDataService.goToPage(this.currentPage - 1);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.previous,
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataChange$.unsubscribe();
        this.getData$.unsubscribe();
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table, [ml-table]',
                template: "<table\n        [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n>\n    <thead\n            ml-table-header\n            [data]=\"header\"\n            class=\"header\"\n            [isEditable]=\"tableOptions.isEditable\"\n    ></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isDraggable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody\n            ml-table-container\n            class=\"table-container\"\n            *ngIf=\"!tableOptions.isDraggable\"\n            [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n    ></tbody>\n</table>\n<div class=\"table-navigation\">\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onPreviousPage()\"\n            *ngIf=\"currentPage > 0\"\n    >\n        Previous page\n    </button>\n    <span class=\"page-information\">\n        {{ getCurrentPage() }} / {{ numOfPages }}\n    </span>\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onNextPage()\"\n            *ngIf=\"currentPage < numOfPages - 1\"\n    >\n        Next page\n    </button>\n</div>\n<div\n        class=\"number-of-items\"\n        *ngIf=\"tableOptions.canChangeNumberOfItems\"\n>\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n        <option\n                *ngFor=\"let value of tableOptions.numberOfItems\"\n                [value]=\"value\"\n        >{{value}}</option>\n    </select>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TableDataService, TableService, ArrayToChunksPipe, Ng2OrderPipe]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: TableDataService },
    { type: TableService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQzFCLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBUTVDLE1BQU0sT0FBTyxjQUFjOzs7OztJQXdCdkIsWUFBb0IsZ0JBQWtDLEVBQVUsWUFBMEI7UUFBdEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBdkJqRixZQUFPLEdBQUcsU0FBUyxDQUFDOztRQU9uQixRQUFHLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEUsY0FBUyxHQUFZLEtBQUssQ0FBQztJQVV5RCxDQUFDOzs7O0lBRTlGLFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxJ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QUVOLE1BQU07a0NBQ04sTUFBTTt3QkFDTixLQUFLOzs7O0lBYk4saUNBQTZCOztJQUM3Qiw4QkFBK0I7O0lBQy9CLHNDQUFvQzs7SUFDcEMsb0NBQTRCOztJQUM1Qix1Q0FBK0I7O0lBQy9CLG9DQUE0Qjs7SUFFNUIsNkJBQXNEOztJQUN0RCw4QkFBdUQ7O0lBQ3ZELGdDQUF5RDs7SUFFekQsb0NBQTZEOztJQUM3RCw2Q0FBeUU7O0lBQ3pFLG1DQUFvQzs7SUFFcEMsZ0NBQU87O0lBQ1AsbUNBQVU7O0lBQ1YscUNBQVk7O0lBQ1osb0NBQVc7O0lBRVgscUNBQVk7O0lBQ1osa0NBQVM7Ozs7O0lBRUcsMENBQTBDOzs7OztJQUFFLHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgVGFibGVSb3csXG4gICAgVGFibGVPcHRpb25zXG59IGZyb20gJy4uL3RhYmxlLmludGVyZmFjZSc7XG5cbmltcG9ydCB7REVGQVVMVF9UQUJMRV9PUFRJT05TLCBQQUdJTkFUSU9OfSBmcm9tICcuLi90YWJsZS5jb25zdGFudHMnO1xuaW1wb3J0IHtUYWJsZURhdGFTZXJ2aWNlfSBmcm9tICcuLi90YWJsZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gJy4uL3RhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtBcnJheVRvQ2h1bmtzUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvYXJyYXkucGlwZSc7XG5pbXBvcnQge05nMk9yZGVyUGlwZX0gZnJvbSAnbmcyLW9yZGVyLXBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21sLXRhYmxlLCBbbWwtdGFibGVdJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1RhYmxlRGF0YVNlcnZpY2UsIFRhYmxlU2VydmljZSwgQXJyYXlUb0NodW5rc1BpcGUsIE5nMk9yZGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB0YWJsZUlEID0gJ2RlZmF1bHQnO1xuICAgIEBJbnB1dCgpIGRhdGE6IEFycmF5PFRhYmxlUm93PjtcbiAgICBASW5wdXQoKSB0YWJsZU9wdGlvbnM6IFRhYmxlT3B0aW9ucztcbiAgICBASW5wdXQoKSB0YWJsZUxpbWl0OiBudW1iZXI7XG4gICAgQElucHV0KCkgbnVtYmVyT2ZQYWdlczogbnVtYmVyOyAvLyBPbmx5IGlmIHdlIGhhdmUgZXh0ZXJuYWwgcGFnZSBoYW5kbGVyXG4gICAgQElucHV0KCkgcGFnZU51bWJlcjogbnVtYmVyOyAvLyBPbmx5IGlmIHdlIGhhdmUgZXh0ZXJuYWwgcGFnZSBoYW5kbGVyXG5cbiAgICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG51bWJlck9mSXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIGlzTG9hZGluZzogQm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaGVhZGVyO1xuICAgIGNvbnRhaW5lcjtcbiAgICBjdXJyZW50UGFnZTtcbiAgICBudW1PZlBhZ2VzO1xuXG4gICAgZGF0YUNoYW5nZSQ7XG4gICAgZ2V0RGF0YSQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlRGF0YVNlcnZpY2U6IFRhYmxlRGF0YVNlcnZpY2UsIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCh0aGlzLnRhYmxlTGltaXQgPiAwKSAmJiB0aGlzLnRhYmxlT3B0aW9ucy5pc0ludGVybmFsUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldExpbWl0KHRoaXMudGFibGVMaW1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbiBkYXRhIHVwZGF0ZVxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UkID0gdGhpcy50YWJsZURhdGFTZXJ2aWNlLmRhdGFDaGFuZ2UkXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT5cbiAgICAgICAgICAgICAgICB0aGlzW2RhdGEudHlwZV0uZW1pdChkYXRhLmRhdGEpKTtcblxuICAgICAgICAvLyBPbiBuZXcgZGF0YVxuICAgICAgICB0aGlzLmdldERhdGEkID0gdGhpcy50YWJsZURhdGFTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0RGF0YSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKG5ld0RhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3RGF0YS5oZWFkZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXdEYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLmlzSW50ZXJuYWxQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtT2ZQYWdlcyA9IG5ld0RhdGEubnVtYmVyT2ZQYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld0RhdGEuY3VycmVudFBhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRhYmxlT3B0aW9ucy5pc0ludGVybmFsUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2Uuc2V0RGF0YSh0aGlzLmRhdGEsIHRoaXMudGFibGVPcHRpb25zLnNjaGVtYSk7XG4gICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXRMaW1pdCh0aGlzLnRhYmxlT3B0aW9ucy5udW1iZXJPZkl0ZW1zWzBdKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnRhYmxlT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy50YWJsZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1RBQkxFX09QVElPTlMsIHRoaXMudGFibGVPcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldE9wdGlvbnModGhpcy50YWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldERhdGEodGhpcy5kYXRhLCB0aGlzLnRhYmxlT3B0aW9ucy5zY2hlbWEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMubnVtYmVyT2ZQYWdlcykge1xuICAgICAgICAgICAgdGhpcy5udW1PZlBhZ2VzID0gdGhpcy5udW1iZXJPZlBhZ2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMucGFnZU51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnZU51bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLnRhYmxlTGltaXQpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXRMaW1pdChjaGFuZ2VzLnRhYmxlTGltaXQuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRQYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZSArIDE7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VOdW1iZXJPZkl0ZW1zKG51bU9mSXRlbXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRhYmxlTGltaXQgPSBwYXJzZUludChudW1PZkl0ZW1zLCAxMCk7XG4gICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXRMaW1pdCh0aGlzLnRhYmxlTGltaXQpO1xuICAgICAgICB0aGlzLm51bWJlck9mSXRlbXNDaGFuZ2UuZW1pdCh0aGlzLnRhYmxlTGltaXQpO1xuICAgIH1cblxuICAgIG9uTmV4dFBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5pc0ludGVybmFsUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLmdvVG9QYWdlKCB0aGlzLmN1cnJlbnRQYWdlICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBQQUdJTkFUSU9OLm5leHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUHJldmlvdXNQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBQQUdJTkFUSU9OLnByZXZpb3VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmdldERhdGEkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIl19