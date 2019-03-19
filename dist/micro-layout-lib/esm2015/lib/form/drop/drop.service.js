/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class DropService {
    constructor() {
        this.items = [];
        this.disabledIds = [];
        this.selectedItem$ = new Subject();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItemsByParentId(id) {
        return this.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.parentId === id));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItemById(id) {
        return this.items.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.id === id));
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDisabledIds(ids) {
        this.disabledIds = ids;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this.items = items;
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    selectItem(selectedItem) {
        this.selectedItem = selectedItem;
        this.selectedItem$.next(this.selectedItem);
    }
    /**
     * @param {?} title
     * @return {?}
     */
    searchByTitle(title) {
        if (title) {
            return this.items.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.title.toLowerCase().search(title.toLowerCase()) >= 0));
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getFullPath(item) {
        return this.items.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        (prev, curr) => {
            if (prev && prev[prev.length - 1].parentId
                === curr.id) {
                prev.push(curr);
            }
            return prev;
        }), [item]).reverse();
    }
}
DropService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropService.prototype.items;
    /**
     * @type {?}
     * @private
     */
    DropService.prototype.selectedItem;
    /**
     * @type {?}
     * @protected
     */
    DropService.prototype.disabledIds;
    /** @type {?} */
    DropService.prototype.selectedItem$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Ryb3AvZHJvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFJN0IsTUFBTSxPQUFPLFdBQVc7SUFNcEI7UUFMUSxVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUUxQixnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBc0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUdqRSxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsRUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxHQUFrQjtRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFzQjtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxZQUFzQjtRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztTQUMvRjtJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUTtvQkFDbEMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxHQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUE3Q0osVUFBVTs7Ozs7Ozs7O0lBRVAsNEJBQW9DOzs7OztJQUNwQyxtQ0FBK0I7Ozs7O0lBQy9CLGtDQUEwQzs7SUFDMUMsb0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJvcEl0ZW19IGZyb20gJy4vZHJvcCc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtEcm9wfSBmcm9tICcuLi8uLi90YWJsZS90YWJsZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJvcFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PERyb3BJdGVtPiA9IFtdO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBEcm9wSXRlbTtcbiAgICBwcm90ZWN0ZWQgZGlzYWJsZWRJZHM6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2VsZWN0ZWRJdGVtJDogU3ViamVjdDxEcm9wSXRlbT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXNCeVBhcmVudElkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnRJZCA9PT0gaWQpO1xuICAgIH1cblxuICAgIGdldEl0ZW1CeUlkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZElkcyhpZHM6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZElkcyA9IGlkcztcbiAgICB9XG5cbiAgICBzZXRJdGVtcyhpdGVtczogQXJyYXk8RHJvcEl0ZW0+KSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICBzZWxlY3RJdGVtKHNlbGVjdGVkSXRlbTogRHJvcEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtJC5uZXh0KHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRpdGxlLnRvTG93ZXJDYXNlKCkpID49IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RnVsbFBhdGgoaXRlbTogRHJvcEl0ZW0pOiBBcnJheTxEcm9wSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2ICYmIHByZXZbcHJldi5sZW5ndGggLSAxXS5wYXJlbnRJZFxuICAgICAgICAgICAgICAgID09PSBjdXJyLmlkKSB7XG4gICAgICAgICAgICAgICAgcHJldi5wdXNoKGN1cnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH0sIFtpdGVtXSkucmV2ZXJzZSgpO1xuICAgIH1cbn1cbiJdfQ==