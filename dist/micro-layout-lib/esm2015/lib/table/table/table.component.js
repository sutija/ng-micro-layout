/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DEFAULT_TABLE_OPTIONS, PAGINATION } from '../table.constants';
import { TableDataService } from '../table-data.service';
import { TableService } from '../table.service';
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
                providers: [TableDataService, TableService]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQzFCLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFROUMsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBd0J2QixZQUFvQixnQkFBa0MsRUFBVSxZQUEwQjtRQUF0RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUF2QmpGLFlBQU8sR0FBRyxTQUFTLENBQUM7O1FBT25CLFFBQUcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRSxjQUFTLEdBQVksS0FBSyxDQUFDO0lBVXlELENBQUM7Ozs7SUFFOUYsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUU7WUFDakUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFD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Q0FBNEI7O0lBRTVCLDZCQUFzRDs7SUFDdEQsOEJBQXVEOztJQUN2RCxnQ0FBeUQ7O0lBRXpELG9DQUE2RDs7SUFDN0QsNkNBQXlFOztJQUN6RSxtQ0FBb0M7O0lBRXBDLGdDQUFPOztJQUNQLG1DQUFVOztJQUNWLHFDQUFZOztJQUNaLG9DQUFXOztJQUVYLHFDQUFZOztJQUNaLGtDQUFTOzs7OztJQUVHLDBDQUEwQzs7Ozs7SUFBRSxzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIFRhYmxlUm93LFxuICAgIFRhYmxlT3B0aW9uc1xufSBmcm9tICcuLi90YWJsZS5pbnRlcmZhY2UnO1xuXG5pbXBvcnQge0RFRkFVTFRfVEFCTEVfT1BUSU9OUywgUEFHSU5BVElPTn0gZnJvbSAnLi4vdGFibGUuY29uc3RhbnRzJztcbmltcG9ydCB7VGFibGVEYXRhU2VydmljZX0gZnJvbSAnLi4vdGFibGUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tICcuLi90YWJsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtbC10YWJsZSwgW21sLXRhYmxlXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFtUYWJsZURhdGFTZXJ2aWNlLCBUYWJsZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdGFibGVJRCA9ICdkZWZhdWx0JztcbiAgICBASW5wdXQoKSBkYXRhOiBBcnJheTxUYWJsZVJvdz47XG4gICAgQElucHV0KCkgdGFibGVPcHRpb25zOiBUYWJsZU9wdGlvbnM7XG4gICAgQElucHV0KCkgdGFibGVMaW1pdDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG51bWJlck9mUGFnZXM6IG51bWJlcjsgLy8gT25seSBpZiB3ZSBoYXZlIGV4dGVybmFsIHBhZ2UgaGFuZGxlclxuICAgIEBJbnB1dCgpIHBhZ2VOdW1iZXI6IG51bWJlcjsgLy8gT25seSBpZiB3ZSBoYXZlIGV4dGVybmFsIHBhZ2UgaGFuZGxlclxuXG4gICAgQE91dHB1dCgpIGFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBudW1iZXJPZkl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBpc0xvYWRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGhlYWRlcjtcbiAgICBjb250YWluZXI7XG4gICAgY3VycmVudFBhZ2U7XG4gICAgbnVtT2ZQYWdlcztcblxuICAgIGRhdGFDaGFuZ2UkO1xuICAgIGdldERhdGEkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZURhdGFTZXJ2aWNlOiBUYWJsZURhdGFTZXJ2aWNlLCBwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICgodGhpcy50YWJsZUxpbWl0ID4gMCkgJiYgdGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXRMaW1pdCh0aGlzLnRhYmxlTGltaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT24gZGF0YSB1cGRhdGVcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlJCA9IHRoaXMudGFibGVEYXRhU2VydmljZS5kYXRhQ2hhbmdlJFxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+XG4gICAgICAgICAgICAgICAgdGhpc1tkYXRhLnR5cGVdLmVtaXQoZGF0YS5kYXRhKSk7XG5cbiAgICAgICAgLy8gT24gbmV3IGRhdGFcbiAgICAgICAgdGhpcy5nZXREYXRhJCA9IHRoaXMudGFibGVEYXRhU2VydmljZVxuICAgICAgICAgICAgLmdldERhdGEoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShuZXdEYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlciA9IG5ld0RhdGEuaGVhZGVyO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3RGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5pc0ludGVybmFsUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bU9mUGFnZXMgPSBuZXdEYXRhLm51bWJlck9mUGFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBuZXdEYXRhLmN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldERhdGEodGhpcy5kYXRhLCB0aGlzLnRhYmxlT3B0aW9ucy5zY2hlbWEpO1xuICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2Uuc2V0TGltaXQodGhpcy50YWJsZU9wdGlvbnMubnVtYmVyT2ZJdGVtc1swXSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy50YWJsZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9UQUJMRV9PUFRJT05TLCB0aGlzLnRhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5zZXRPcHRpb25zKHRoaXMudGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXREYXRhKHRoaXMuZGF0YSwgdGhpcy50YWJsZU9wdGlvbnMuc2NoZW1hKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgICAgICAgIHRoaXMubnVtT2ZQYWdlcyA9IHRoaXMubnVtYmVyT2ZQYWdlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLnBhZ2VOdW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2VOdW1iZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy50YWJsZUxpbWl0KSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2Uuc2V0TGltaXQoY2hhbmdlcy50YWJsZUxpbWl0LmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgKyAxO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTnVtYmVyT2ZJdGVtcyhudW1PZkl0ZW1zOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50YWJsZUxpbWl0ID0gcGFyc2VJbnQobnVtT2ZJdGVtcywgMTApO1xuICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2Uuc2V0TGltaXQodGhpcy50YWJsZUxpbWl0KTtcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zQ2hhbmdlLmVtaXQodGhpcy50YWJsZUxpbWl0KTtcbiAgICB9XG5cbiAgICBvbk5leHRQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5nb1RvUGFnZSggdGhpcy5jdXJyZW50UGFnZSArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogUEFHSU5BVElPTi5uZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblByZXZpb3VzUGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLmlzSW50ZXJuYWxQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2UuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogUEFHSU5BVElPTi5wcmV2aW91cyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5nZXREYXRhJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiJdfQ==