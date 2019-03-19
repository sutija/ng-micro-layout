/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DropService } from '../drop.service';
var DropItemsComponent = /** @class */ (function () {
    function DropItemsComponent(dropService) {
        this.dropService = dropService;
        this.isOpened = true;
        this.childrenVisible = [];
    }
    /**
     * @return {?}
     */
    DropItemsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.childrenVisible = this.dropService.getItemsByParentId(this.parentId).map((/**
         * @return {?}
         */
        function () { return false; }));
    };
    /**
     * @return {?}
     */
    DropItemsComponent.prototype.getItems = /**
     * @return {?}
     */
    function () {
        return this.dropService.getItemsByParentId(this.parentId);
    };
    /**
     * @param {?} parentId
     * @return {?}
     */
    DropItemsComponent.prototype.hasChildren = /**
     * @param {?} parentId
     * @return {?}
     */
    function (parentId) {
        return this.dropService.getItemsByParentId(parentId).length > 0;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DropItemsComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.dropService.selectItem(item);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DropItemsComponent.prototype.toggleChildren = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.childrenVisible[index] = !this.childrenVisible[index];
    };
    DropItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-drop-items, [ml-drop-items]',
                    template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n"
                }] }
    ];
    /** @nocollapse */
    DropItemsComponent.ctorParameters = function () { return [
        { type: DropService }
    ]; };
    DropItemsComponent.propDecorators = {
        parentId: [{ type: Input }],
        isOpened: [{ type: Input }]
    };
    return DropItemsComponent;
}());
export { DropItemsComponent };
if (false) {
    /** @type {?} */
    DropItemsComponent.prototype.parentId;
    /** @type {?} */
    DropItemsComponent.prototype.isOpened;
    /** @type {?} */
    DropItemsComponent.prototype.childrenVisible;
    /**
     * @type {?}
     * @private
     */
    DropItemsComponent.prototype.dropService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vZHJvcC9kcm9wLWl0ZW1zL2Ryb3AtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHNUM7SUFTRSw0QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIbkMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQUUyQixDQUFDOzs7O0lBRWpELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUMsQ0FBQztJQUM3RixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxRQUFRO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLElBQWM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCwyQ0FBYzs7OztJQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLHlyQkFBMEM7aUJBQzNDOzs7O2dCQU5PLFdBQVc7OzsyQkFRaEIsS0FBSzsyQkFDTCxLQUFLOztJQXlCUix5QkFBQztDQUFBLEFBL0JELElBK0JDO1NBM0JZLGtCQUFrQjs7O0lBQzdCLHNDQUFrQjs7SUFDbEIsc0NBQXlCOztJQUN6Qiw2Q0FBcUI7Ozs7O0lBRVQseUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEcm9wSXRlbX0gZnJvbSAnLi4vZHJvcCc7XG5pbXBvcnQge0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcENvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3AuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtZHJvcC1pdGVtcywgW21sLWRyb3AtaXRlbXNdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3AtaXRlbXMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERyb3BJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBhcmVudElkO1xuICBASW5wdXQoKSBpc09wZW5lZCA9IHRydWU7XG4gIGNoaWxkcmVuVmlzaWJsZSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJvcFNlcnZpY2U6IERyb3BTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoaWxkcmVuVmlzaWJsZSA9IHRoaXMuZHJvcFNlcnZpY2UuZ2V0SXRlbXNCeVBhcmVudElkKHRoaXMucGFyZW50SWQpLm1hcCgoKSA9PiBmYWxzZSk7XG4gIH1cblxuICBnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wU2VydmljZS5nZXRJdGVtc0J5UGFyZW50SWQodGhpcy5wYXJlbnRJZCk7XG4gIH1cblxuICBoYXNDaGlsZHJlbihwYXJlbnRJZCkge1xuICAgIHJldHVybiB0aGlzLmRyb3BTZXJ2aWNlLmdldEl0ZW1zQnlQYXJlbnRJZChwYXJlbnRJZCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHNlbGVjdEl0ZW0oaXRlbTogRHJvcEl0ZW0pIHtcbiAgICB0aGlzLmRyb3BTZXJ2aWNlLnNlbGVjdEl0ZW0oaXRlbSk7XG4gIH1cblxuICB0b2dnbGVDaGlsZHJlbihpbmRleCkge1xuICAgIHRoaXMuY2hpbGRyZW5WaXNpYmxlW2luZGV4XSA9ICF0aGlzLmNoaWxkcmVuVmlzaWJsZVtpbmRleF07XG4gIH1cblxufVxuIl19