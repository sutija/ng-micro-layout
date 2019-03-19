/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @todo Do not sort when edit is activated
 */
import { Component, Input, ElementRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TableService } from '../table.service';
import { DEFAULT_TABLE_OPTIONS, PAGINATION } from '../table.constants';
import { TableDataService } from '../table-data.service';
import { TableMessagingService } from '../table-messaging.service';
export class TableComponent {
    /**
     * @param {?} tableDataService
     * @param {?} tableService
     * @param {?} el
     */
    constructor(tableDataService, tableService, el) {
        this.tableDataService = tableDataService;
        this.tableService = tableService;
        this.el = el;
        this.tableID = 'default';
        // Only if we have external page handler
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
        this.pageChange = new EventEmitter();
        this.numberOfItemsChange = new EventEmitter();
        this.isLoading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tableDataService.setTableId(this.tableID);
        if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
            this.tableDataService.setLimit(this.tableLimit);
        }
        // On data update
        this.dataChange$ = this.tableDataService.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            // Emit new data
            if (data.type === 'edit') {
                this.update.emit(data.data);
            }
            if (data.type === 'delete') {
                this.delete.emit(data.data);
            }
        }));
        // On new data
        this.getData$ = this.tableDataService
            .getData()
            .subscribe({
            next: (/**
             * @param {?} newData
             * @return {?}
             */
            (newData) => {
                this.header = newData.header;
                this.container = newData.data;
                if (this.tableOptions.isInternalPagination) {
                    this.numOfPages = newData.numberOfPages;
                    this.currentPage = newData.currentPage;
                }
            })
        });
        if (!this.tableOptions.isInternalPagination) {
            this.currentPage = 0;
        }
        this.tableDataService.setData(this.data, this.tableOptions.schema);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.tableOptions) {
            this.tableService.setTableOptions(this.tableID, this.tableOptions);
            this.tableOptions = Object.assign({}, DEFAULT_TABLE_OPTIONS, this.tableOptions);
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
            console.log('table limit', changes.tableLimit);
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
        this.tableLimit = numOfItems;
        this.tableDataService.setLimit(this.tableLimit);
        this.numberOfItemsChange.emit(numOfItems);
    }
    /**
     * @return {?}
     */
    onNextPage() {
        if (this.tableOptions.isInternalPagination) {
            /** @type {?} */
            const newPage = this.currentPage + 1;
            this.tableDataService.goToPage(newPage);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.NEXT,
            });
        }
    }
    /**
     * @return {?}
     */
    onPreviousPage() {
        if (this.tableOptions.isInternalPagination) {
            /** @type {?} */
            const newPage = this.currentPage - 1;
            this.tableDataService.goToPage(newPage);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.PREVIOUS,
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
                template: "<div ngClass=\"wrapper\">\n  <table\n          [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n  >\n    <thead ml-table-header [data]=\"header\" ngClass=\"header\" [isEditable]=\"tableOptions.isEditable\"></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isReordable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody ml-table-container *ngIf=\"!tableOptions.isReordable\" [isEditable]=\"tableOptions.isEditable\" [data]=\"container\" class=\"Table__Container\"></tbody>\n  </table>\n</div>\n<div ngClass=\"table-navigation\">\n  <button [disabled]=\"isLoading\" ngClass=\"button\" (click)=\"onPreviousPage()\" *ngIf=\"currentPage > 0\">Previous page</button>\n  <span ngClass=\"page-information\">{{ getCurrentPage() }} / {{ numOfPages }}</span>\n  <button [disabled]=\"isLoading\" ngClass=\"button\" (click)=\"onNextPage()\" *ngIf=\"currentPage < numOfPages - 1\">Next page</button>\n</div>\n<div *ngIf=\"tableOptions.canChangeNumberOfItems\">\n  <div class=\"form-Item\">\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n      <option value=\"50\">50</option>\n      <option value=\"100\">100</option>\n      <option value=\"200\">200</option>\n    </select>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TableDataService, TableService, TableMessagingService]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: TableDataService },
    { type: TableService },
    { type: ElementRef }
];
TableComponent.propDecorators = {
    tableID: [{ type: Input }],
    data: [{ type: Input }],
    tableOptions: [{ type: Input }],
    tableLimit: [{ type: Input }],
    numberOfPages: [{ type: Input }],
    pageNumber: [{ type: Input }],
    update: [{ type: Output }],
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
    TableComponent.prototype.update;
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
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFROUMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBUWpFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFxQnpCLFlBQW9CLGdCQUFrQyxFQUNsQyxZQUEwQixFQUN4QixFQUFjO1FBRmhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXRCM0IsWUFBTyxHQUFHLFNBQVMsQ0FBQzs7UUFNbkIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEUsY0FBUyxHQUFZLEtBQUssQ0FBQztJQVlJLENBQUM7Ozs7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxJ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NENBQXFDO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixDQUFDO2FBQ25FOzs7O1lBUk8sZ0JBQWdCO1lBVGhCLFlBQVk7WUFObEIsVUFBVTs7O3NCQXlCVCxLQUFLO21CQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxNQUFNO3FCQUNOLE1BQU07eUJBQ04sTUFBTTtrQ0FDTixNQUFNO3dCQUNOLEtBQUs7Ozs7SUFWTixpQ0FBNkI7O0lBQzdCLDhCQUErQjs7SUFDL0Isc0NBQW9DOztJQUNwQyxvQ0FBNEI7O0lBQzVCLHVDQUErQjs7SUFDL0Isb0NBQTRCOztJQUM1QixnQ0FBeUQ7O0lBQ3pELGdDQUE0RDs7SUFDNUQsb0NBQTZEOztJQUM3RCw2Q0FBeUU7O0lBQ3pFLG1DQUFvQzs7SUFFcEMsZ0NBQU87O0lBQ1AsbUNBQVU7O0lBQ1YscUNBQVk7O0lBQ1osb0NBQVc7O0lBRVgscUNBQVk7O0lBQ1osa0NBQVM7Ozs7O0lBRUcsMENBQTBDOzs7OztJQUMxQyxzQ0FBa0M7Ozs7O0lBQ2xDLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHRvZG8gRG8gbm90IHNvcnQgd2hlbiBlZGl0IGlzIGFjdGl2YXRlZFxuICovXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tICcuLi90YWJsZS5zZXJ2aWNlJztcblxuXG5pbXBvcnQge1xuICBUYWJsZVJvdyxcbiAgVGFibGVPcHRpb25zLCBUYWJsZVxufSBmcm9tICcuLi90YWJsZS5pbnRlcmZhY2UnO1xuXG5pbXBvcnQge0RFRkFVTFRfVEFCTEVfT1BUSU9OUywgUEFHSU5BVElPTn0gZnJvbSAnLi4vdGFibGUuY29uc3RhbnRzJztcbmltcG9ydCB7VGFibGVEYXRhU2VydmljZX0gZnJvbSAnLi4vdGFibGUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7VGFibGVNZXNzYWdpbmdTZXJ2aWNlfSBmcm9tICcuLi90YWJsZS1tZXNzYWdpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLXRhYmxlLCBbbWwtdGFibGVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1RhYmxlRGF0YVNlcnZpY2UsIFRhYmxlU2VydmljZSwgVGFibGVNZXNzYWdpbmdTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB0YWJsZUlEID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBkYXRhOiBBcnJheTxUYWJsZVJvdz47XG4gIEBJbnB1dCgpIHRhYmxlT3B0aW9uczogVGFibGVPcHRpb25zO1xuICBASW5wdXQoKSB0YWJsZUxpbWl0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG51bWJlck9mUGFnZXM6IG51bWJlcjsgLy8gT25seSBpZiB3ZSBoYXZlIGV4dGVybmFsIHBhZ2UgaGFuZGxlclxuICBASW5wdXQoKSBwYWdlTnVtYmVyOiBudW1iZXI7IC8vIE9ubHkgaWYgd2UgaGF2ZSBleHRlcm5hbCBwYWdlIGhhbmRsZXJcbiAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWxldGU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBudW1iZXJPZkl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgaGVhZGVyO1xuICBjb250YWluZXI7XG4gIGN1cnJlbnRQYWdlO1xuICBudW1PZlBhZ2VzO1xuXG4gIGRhdGFDaGFuZ2UkO1xuICBnZXREYXRhJDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlRGF0YVNlcnZpY2U6IFRhYmxlRGF0YVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldFRhYmxlSWQodGhpcy50YWJsZUlEKTtcblxuICAgIGlmICgodGhpcy50YWJsZUxpbWl0ID4gMCkgJiYgdGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXRMaW1pdCh0aGlzLnRhYmxlTGltaXQpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhdGEgdXBkYXRlXG4gICAgdGhpcy5kYXRhQ2hhbmdlJCA9IHRoaXMudGFibGVEYXRhU2VydmljZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIC8vIEVtaXQgbmV3IGRhdGFcbiAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdlZGl0Jykge1xuICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KGRhdGEuZGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS50eXBlID09PSAnZGVsZXRlJykge1xuICAgICAgICB0aGlzLmRlbGV0ZS5lbWl0KGRhdGEuZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPbiBuZXcgZGF0YVxuICAgIHRoaXMuZ2V0RGF0YSQgPSB0aGlzLnRhYmxlRGF0YVNlcnZpY2VcbiAgICAgICAgLmdldERhdGEoKVxuICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAobmV3RGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXdEYXRhLmhlYWRlcjtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3RGF0YS5kYXRhO1xuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLmlzSW50ZXJuYWxQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMubnVtT2ZQYWdlcyA9IG5ld0RhdGEubnVtYmVyT2ZQYWdlcztcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld0RhdGEuY3VycmVudFBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIGlmICghdGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xuICAgIH1cblxuICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXREYXRhKHRoaXMuZGF0YSwgdGhpcy50YWJsZU9wdGlvbnMuc2NoZW1hKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy50YWJsZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldFRhYmxlT3B0aW9ucyh0aGlzLnRhYmxlSUQsIHRoaXMudGFibGVPcHRpb25zKTtcbiAgICAgIHRoaXMudGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9UQUJMRV9PUFRJT05TLCB0aGlzLnRhYmxlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLnNldERhdGEodGhpcy5kYXRhLCB0aGlzLnRhYmxlT3B0aW9ucy5zY2hlbWEpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHRoaXMubnVtT2ZQYWdlcyA9IHRoaXMubnVtYmVyT2ZQYWdlcztcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5wYWdlTnVtYmVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdlTnVtYmVyO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnRhYmxlTGltaXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0YWJsZSBsaW1pdCcsIGNoYW5nZXMudGFibGVMaW1pdCk7XG4gICAgICB0aGlzLnRhYmxlRGF0YVNlcnZpY2Uuc2V0TGltaXQoY2hhbmdlcy50YWJsZUxpbWl0LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgKyAxO1xuICB9XG5cbiAgb25DaGFuZ2VOdW1iZXJPZkl0ZW1zKG51bU9mSXRlbXMpIHtcbiAgICB0aGlzLnRhYmxlTGltaXQgPSBudW1PZkl0ZW1zO1xuICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5zZXRMaW1pdCh0aGlzLnRhYmxlTGltaXQpO1xuICAgIHRoaXMubnVtYmVyT2ZJdGVtc0NoYW5nZS5lbWl0KG51bU9mSXRlbXMpO1xuICB9XG5cbiAgb25OZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuaXNJbnRlcm5hbFBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IG5ld1BhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlICsgMTtcbiAgICAgIHRoaXMudGFibGVEYXRhU2VydmljZS5nb1RvUGFnZShuZXdQYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgICBkaXJlY3Rpb246IFBBR0lOQVRJT04uTkVYVCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJldmlvdXNQYWdlKCkge1xuICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5pc0ludGVybmFsUGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgbmV3UGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgLSAxO1xuICAgICAgdGhpcy50YWJsZURhdGFTZXJ2aWNlLmdvVG9QYWdlKG5ld1BhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICAgIGRpcmVjdGlvbjogUEFHSU5BVElPTi5QUkVWSU9VUyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGF0YUNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmdldERhdGEkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==