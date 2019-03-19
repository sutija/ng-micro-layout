/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DropService = /** @class */ (function () {
    function DropService() {
        this.items = [];
        this.disabledIds = [];
        this.selectedItem$ = new Subject();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DropService.prototype.getItemsByParentId = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.parentId === id; }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DropService.prototype.getItemById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === id; }));
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    DropService.prototype.setDisabledIds = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this.disabledIds = ids;
    };
    /**
     * @param {?} items
     * @return {?}
     */
    DropService.prototype.setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.items = items;
    };
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    DropService.prototype.selectItem = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        this.selectedItem = selectedItem;
        this.selectedItem$.next(this.selectedItem);
    };
    /**
     * @param {?} title
     * @return {?}
     */
    DropService.prototype.searchByTitle = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        if (title) {
            return this.items.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.title.toLowerCase().search(title.toLowerCase()) >= 0; }));
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DropService.prototype.getFullPath = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.items.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            if (prev && prev[prev.length - 1].parentId
                === curr.id) {
                prev.push(curr);
            }
            return prev;
        }), [item]).reverse();
    };
    DropService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DropService.ctorParameters = function () { return []; };
    return DropService;
}());
export { DropService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Ryb3AvZHJvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHN0I7SUFPSTtRQUxRLFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBRTFCLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR2pFLENBQUM7Ozs7O0lBRUQsd0NBQWtCOzs7O0lBQWxCLFVBQW1CLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFwQixDQUFvQixFQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksRUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxFQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxvQ0FBYzs7OztJQUFkLFVBQWUsR0FBa0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCw4QkFBUTs7OztJQUFSLFVBQVMsS0FBc0I7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsWUFBc0I7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsbUNBQWE7Ozs7SUFBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUF6RCxDQUF5RCxFQUFDLENBQUM7U0FDL0Y7SUFDTCxDQUFDOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxJQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsSUFBSSxFQUFFLElBQUk7WUFDaEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUTtvQkFDbEMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxHQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkE3Q0osVUFBVTs7OztJQThDWCxrQkFBQztDQUFBLEFBOUNELElBOENDO1NBN0NZLFdBQVc7Ozs7OztJQUNwQiw0QkFBb0M7Ozs7O0lBQ3BDLG1DQUErQjs7Ozs7SUFDL0Isa0NBQTBDOztJQUMxQyxvQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEcm9wSXRlbX0gZnJvbSAnLi9kcm9wJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Ryb3B9IGZyb20gJy4uLy4uL3RhYmxlL3RhYmxlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8RHJvcEl0ZW0+ID0gW107XG4gICAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IERyb3BJdGVtO1xuICAgIHByb3RlY3RlZCBkaXNhYmxlZElkczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHB1YmxpYyByZWFkb25seSBzZWxlY3RlZEl0ZW0kOiBTdWJqZWN0PERyb3BJdGVtPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZXRJdGVtc0J5UGFyZW50SWQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudElkID09PSBpZCk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbUJ5SWQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkSWRzKGlkczogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICB0aGlzLmRpc2FibGVkSWRzID0gaWRzO1xuICAgIH1cblxuICAgIHNldEl0ZW1zKGl0ZW1zOiBBcnJheTxEcm9wSXRlbT4pIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHNlbGVjdEl0ZW0oc2VsZWN0ZWRJdGVtOiBEcm9wSXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0kLm5leHQodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIHNlYXJjaEJ5VGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5zZWFyY2godGl0bGUudG9Mb3dlckNhc2UoKSkgPj0gMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGdWxsUGF0aChpdGVtOiBEcm9wSXRlbSk6IEFycmF5PERyb3BJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXYgJiYgcHJldltwcmV2Lmxlbmd0aCAtIDFdLnBhcmVudElkXG4gICAgICAgICAgICAgICAgPT09IGN1cnIuaWQpIHtcbiAgICAgICAgICAgICAgICBwcmV2LnB1c2goY3Vycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfSwgW2l0ZW1dKS5yZXZlcnNlKCk7XG4gICAgfVxufVxuIl19