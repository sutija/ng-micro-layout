/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { VirtualGridService } from './virtual-grid.service';
export class VirtualGridComponent {
    /**
     * @param {?} virtualGridService
     */
    constructor(virtualGridService) {
        this.virtualGridService = virtualGridService;
        this.maxRows = 24;
        this.visible = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.range = new Array(this.maxRows).fill(null);
        this.$visible = this.virtualGridService.$visible
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => this.visible = visible));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    toggle(e) {
        console.log(e);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$visible.unsubscribe();
    }
}
VirtualGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-virtual-grid',
                template: "<div [ngClass]=\"{\n'virtual-grid': true,\n'-visible': visible\n}\" (keyup)=\"toggle($event)\">\n  <div class=\"grid-container\">\n    <div class=\"grid\">\n      <span *ngFor=\"let i of range\"></span>\n    </div>\n  </div>\n</div>\n",
                providers: [VirtualGridService],
                styles: [""]
            }] }
];
/** @nocollapse */
VirtualGridComponent.ctorParameters = () => [
    { type: VirtualGridService }
];
VirtualGridComponent.propDecorators = {
    maxRows: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdmlydHVhbC1ncmlkL3ZpcnR1YWwtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQVExRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBTTdCLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTGpELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUU2QyxDQUFDOzs7O0lBRTlELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUTthQUMzQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUExQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHNQQUE0QztnQkFFNUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7O2FBQ2xDOzs7O1lBUE8sa0JBQWtCOzs7c0JBU3JCLEtBQUs7Ozs7SUFBTix1Q0FBc0I7O0lBQ3RCLHFDQUFNOzs7OztJQUNOLHdDQUFpQjs7SUFDakIsdUNBQWdCOzs7OztJQUVKLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaXJ0dWFsR3JpZFNlcnZpY2V9IGZyb20gJy4vdmlydHVhbC1ncmlkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21sLXZpcnR1YWwtZ3JpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpcnR1YWwtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdmlydHVhbC1ncmlkLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtWaXJ0dWFsR3JpZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFZpcnR1YWxHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIG1heFJvd3MgPSAyNDtcbiAgICByYW5nZTtcbiAgICBwcml2YXRlICR2aXNpYmxlO1xuICAgIHZpc2libGUgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlydHVhbEdyaWRTZXJ2aWNlOiBWaXJ0dWFsR3JpZFNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yYW5nZSA9IG5ldyBBcnJheSh0aGlzLm1heFJvd3MpLmZpbGwobnVsbCk7XG4gICAgICAgIHRoaXMuJHZpc2libGUgPSB0aGlzLnZpcnR1YWxHcmlkU2VydmljZS4kdmlzaWJsZVxuICAgICAgICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHRoaXMudmlzaWJsZSA9IHZpc2libGUpO1xuICAgIH1cblxuICAgIHRvZ2dsZShlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLiR2aXNpYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG59XG4iXX0=