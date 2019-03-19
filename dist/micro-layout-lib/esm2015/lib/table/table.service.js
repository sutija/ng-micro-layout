/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export class TableService {
    constructor() {
        this._tableOptions = {};
    }
    /**
     * @param {?} tableID
     * @param {?} tableOptions
     * @return {?}
     */
    setTableOptions(tableID, tableOptions) {
        this._tableOptions[tableID] = Object.assign({}, tableOptions);
    }
    /**
     * @return {?}
     */
    getTableOptions() {
        return of(this._tableOptions);
    }
}
TableService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TableService.prototype._tableOptions;
    /**
     * @type {?}
     * @protected
     */
    TableService.prototype.isReordable;
}
/**
 * @record
 */
export function TableOptionsArray() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRVksa0JBQWEsR0FBc0IsRUFBRSxDQUFDO0lBYWxELENBQUM7Ozs7OztJQVZDLGVBQWUsQ0FDWCxPQUFlLEVBQ2YsWUFBMEI7UUFFNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFkRixVQUFVOzs7Ozs7O0lBRVQscUNBQWdEOzs7OztJQUNoRCxtQ0FBc0I7Ozs7O0FBY3hCLHVDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVPcHRpb25zIH0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlU2VydmljZSB7XG4gIHByb3RlY3RlZCBfdGFibGVPcHRpb25zOiBUYWJsZU9wdGlvbnNBcnJheSA9IHt9O1xuICBwcm90ZWN0ZWQgaXNSZW9yZGFibGU7XG5cbiAgc2V0VGFibGVPcHRpb25zKFxuICAgICAgdGFibGVJRDogc3RyaW5nLFxuICAgICAgdGFibGVPcHRpb25zOiBUYWJsZU9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5fdGFibGVPcHRpb25zW3RhYmxlSURdID0gT2JqZWN0LmFzc2lnbih7fSwgdGFibGVPcHRpb25zKTtcbiAgfVxuXG4gIGdldFRhYmxlT3B0aW9ucygpOiBPYnNlcnZhYmxlPFRhYmxlT3B0aW9uc0FycmF5PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuX3RhYmxlT3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZU9wdGlvbnNBcnJheSB7XG4gIFtpbmRleDogc3RyaW5nXTogVGFibGVPcHRpb25zO1xufVxuIl19