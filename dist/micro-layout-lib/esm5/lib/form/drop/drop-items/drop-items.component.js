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
                    template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n",
                    providers: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vZHJvcC9kcm9wLWl0ZW1zL2Ryb3AtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFNUM7SUFVRSw0QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIbkMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQUUyQixDQUFDOzs7O0lBRWpELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUMsQ0FBQztJQUM3RixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxRQUFRO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLElBQWM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCwyQ0FBYzs7OztJQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLHlyQkFBMEM7b0JBQzFDLFNBQVMsRUFBRSxFQUFFO2lCQUNkOzs7O2dCQU5PLFdBQVc7OzsyQkFRaEIsS0FBSzsyQkFDTCxLQUFLOztJQXlCUix5QkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLGtCQUFrQjs7O0lBQzdCLHNDQUFrQjs7SUFDbEIsc0NBQXlCOztJQUN6Qiw2Q0FBcUI7Ozs7O0lBRVQseUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEcm9wSXRlbX0gZnJvbSAnLi4vZHJvcCc7XG5pbXBvcnQge0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9kcm9wLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC1kcm9wLWl0ZW1zLCBbbWwtZHJvcC1pdGVtc10nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcC1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcGFyZW50SWQ7XG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gdHJ1ZTtcbiAgY2hpbGRyZW5WaXNpYmxlID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wU2VydmljZTogRHJvcFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hpbGRyZW5WaXNpYmxlID0gdGhpcy5kcm9wU2VydmljZS5nZXRJdGVtc0J5UGFyZW50SWQodGhpcy5wYXJlbnRJZCkubWFwKCgpID0+IGZhbHNlKTtcbiAgfVxuXG4gIGdldEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmRyb3BTZXJ2aWNlLmdldEl0ZW1zQnlQYXJlbnRJZCh0aGlzLnBhcmVudElkKTtcbiAgfVxuXG4gIGhhc0NoaWxkcmVuKHBhcmVudElkKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcFNlcnZpY2UuZ2V0SXRlbXNCeVBhcmVudElkKHBhcmVudElkKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgc2VsZWN0SXRlbShpdGVtOiBEcm9wSXRlbSkge1xuICAgIHRoaXMuZHJvcFNlcnZpY2Uuc2VsZWN0SXRlbShpdGVtKTtcbiAgfVxuXG4gIHRvZ2dsZUNoaWxkcmVuKGluZGV4KSB7XG4gICAgdGhpcy5jaGlsZHJlblZpc2libGVbaW5kZXhdID0gIXRoaXMuY2hpbGRyZW5WaXNpYmxlW2luZGV4XTtcbiAgfVxuXG59XG4iXX0=