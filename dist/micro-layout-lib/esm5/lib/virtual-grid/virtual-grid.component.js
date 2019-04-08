/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { VirtualGridService } from './virtual-grid.service';
var VirtualGridComponent = /** @class */ (function () {
    function VirtualGridComponent(virtualGridService) {
        this.virtualGridService = virtualGridService;
        this.maxRows = 24;
        this.visible = false;
    }
    /**
     * @return {?}
     */
    VirtualGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.range = new Array(this.maxRows).fill(null);
        this.$visible = this.virtualGridService.$visible
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) { return _this.visible = visible; }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    VirtualGridComponent.prototype.toggle = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log(e);
    };
    /**
     * @return {?}
     */
    VirtualGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$visible.unsubscribe();
    };
    VirtualGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-virtual-grid',
                    template: "<div [ngClass]=\"{\n'virtual-grid': true,\n'-visible': visible\n}\" (keyup)=\"toggle($event)\">\n  <div class=\"grid-container\">\n    <div class=\"grid\">\n      <span *ngFor=\"let i of range\"></span>\n    </div>\n  </div>\n</div>\n",
                    providers: [VirtualGridService],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    VirtualGridComponent.ctorParameters = function () { return [
        { type: VirtualGridService }
    ]; };
    VirtualGridComponent.propDecorators = {
        maxRows: [{ type: Input }]
    };
    return VirtualGridComponent;
}());
export { VirtualGridComponent };
if (false) {
    /** @type {?} */
    VirtualGridComponent.prototype.maxRows;
    /** @type {?} */
    VirtualGridComponent.prototype.range;
    /**
     * @type {?}
     * @private
     */
    VirtualGridComponent.prototype.$visible;
    /** @type {?} */
    VirtualGridComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    VirtualGridComponent.prototype.virtualGridService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdmlydHVhbC1ncmlkL3ZpcnR1YWwtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRDtJQVlJLDhCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUxqRCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR3RCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFFNkMsQ0FBQzs7OztJQUU5RCx1Q0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRO2FBQzNDLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBMUJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzUEFBNEM7b0JBRTVDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDOztpQkFDbEM7Ozs7Z0JBUE8sa0JBQWtCOzs7MEJBU3JCLEtBQUs7O0lBcUJWLDJCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F0Qlksb0JBQW9COzs7SUFDN0IsdUNBQXNCOztJQUN0QixxQ0FBTTs7Ozs7SUFDTix3Q0FBaUI7O0lBQ2pCLHVDQUFnQjs7Ozs7SUFFSixrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmlydHVhbEdyaWRTZXJ2aWNlfSBmcm9tICcuL3ZpcnR1YWwtZ3JpZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtbC12aXJ0dWFsLWdyaWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi92aXJ0dWFsLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ZpcnR1YWwtZ3JpZC5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbVmlydHVhbEdyaWRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBWaXJ0dWFsR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBtYXhSb3dzID0gMjQ7XG4gICAgcmFuZ2U7XG4gICAgcHJpdmF0ZSAkdmlzaWJsZTtcbiAgICB2aXNpYmxlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpcnR1YWxHcmlkU2VydmljZTogVmlydHVhbEdyaWRTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmFuZ2UgPSBuZXcgQXJyYXkodGhpcy5tYXhSb3dzKS5maWxsKG51bGwpO1xuICAgICAgICB0aGlzLiR2aXNpYmxlID0gdGhpcy52aXJ0dWFsR3JpZFNlcnZpY2UuJHZpc2libGVcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB0aGlzLnZpc2libGUgPSB2aXNpYmxlKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kdmlzaWJsZS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuIl19