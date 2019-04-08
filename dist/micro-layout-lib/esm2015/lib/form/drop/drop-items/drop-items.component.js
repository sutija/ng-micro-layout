/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DropService } from '../drop.service';
export class DropItemsComponent {
    /**
     * @param {?} dropService
     */
    constructor(dropService) {
        this.dropService = dropService;
        this.isOpened = true;
        this.childrenVisible = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.childrenVisible = this.dropService.getItemsByParentId(this.parentId).map((/**
         * @return {?}
         */
        () => false));
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.dropService.getItemsByParentId(this.parentId);
    }
    /**
     * @param {?} parentId
     * @return {?}
     */
    hasChildren(parentId) {
        return this.dropService.getItemsByParentId(parentId).length > 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        this.dropService.selectItem(item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    toggleChildren(index) {
        this.childrenVisible[index] = !this.childrenVisible[index];
    }
}
DropItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-drop-items, [ml-drop-items]',
                template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n",
                providers: []
            }] }
];
/** @nocollapse */
DropItemsComponent.ctorParameters = () => [
    { type: DropService }
];
DropItemsComponent.propDecorators = {
    parentId: [{ type: Input }],
    isOpened: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vZHJvcC9kcm9wLWl0ZW1zL2Ryb3AtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPNUMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUs3QixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUhuQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBRTJCLENBQUM7Ozs7SUFFakQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7SUFDN0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQVE7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBYztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMseXJCQUEwQztnQkFDMUMsU0FBUyxFQUFFLEVBQUU7YUFDZDs7OztZQU5PLFdBQVc7Ozt1QkFRaEIsS0FBSzt1QkFDTCxLQUFLOzs7O0lBRE4sc0NBQWtCOztJQUNsQixzQ0FBeUI7O0lBQ3pCLDZDQUFxQjs7Ozs7SUFFVCx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Ryb3BJdGVtfSBmcm9tICcuLi9kcm9wJztcbmltcG9ydCB7RHJvcFNlcnZpY2V9IGZyb20gJy4uL2Ryb3Auc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLWRyb3AtaXRlbXMsIFttbC1kcm9wLWl0ZW1zXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wLWl0ZW1zLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwYXJlbnRJZDtcbiAgQElucHV0KCkgaXNPcGVuZWQgPSB0cnVlO1xuICBjaGlsZHJlblZpc2libGUgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3BTZXJ2aWNlOiBEcm9wU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGlsZHJlblZpc2libGUgPSB0aGlzLmRyb3BTZXJ2aWNlLmdldEl0ZW1zQnlQYXJlbnRJZCh0aGlzLnBhcmVudElkKS5tYXAoKCkgPT4gZmFsc2UpO1xuICB9XG5cbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcFNlcnZpY2UuZ2V0SXRlbXNCeVBhcmVudElkKHRoaXMucGFyZW50SWQpO1xuICB9XG5cbiAgaGFzQ2hpbGRyZW4ocGFyZW50SWQpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wU2VydmljZS5nZXRJdGVtc0J5UGFyZW50SWQocGFyZW50SWQpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBzZWxlY3RJdGVtKGl0ZW06IERyb3BJdGVtKSB7XG4gICAgdGhpcy5kcm9wU2VydmljZS5zZWxlY3RJdGVtKGl0ZW0pO1xuICB9XG5cbiAgdG9nZ2xlQ2hpbGRyZW4oaW5kZXgpIHtcbiAgICB0aGlzLmNoaWxkcmVuVmlzaWJsZVtpbmRleF0gPSAhdGhpcy5jaGlsZHJlblZpc2libGVbaW5kZXhdO1xuICB9XG5cbn1cbiJdfQ==