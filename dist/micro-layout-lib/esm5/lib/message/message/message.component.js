/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.hasTimeOut = false;
        this.timeout = 1000;
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.hasTimeOut) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.close.emit(true);
            }), this.timeout);
        }
    };
    /**
     * @return {?}
     */
    MessageComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        return "message " + this.type;
    };
    /**
     * @return {?}
     */
    MessageComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.close.emit(true);
    };
    MessageComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'ml-message',
                    template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">\n    <span ngClass=\"message-text\">{{message}}</span>\n    <button ngClass=\"message-close\" (click)=\"onClose()\">X</button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return []; };
    MessageComponent.propDecorators = {
        message: [{ type: Input }],
        type: [{ type: Input }],
        hasTimeOut: [{ type: Input }],
        timeout: [{ type: Input }],
        close: [{ type: Output }]
    };
    return MessageComponent;
}());
export { MessageComponent };
if (false) {
    /** @type {?} */
    MessageComponent.prototype.message;
    /** @type {?} */
    MessageComponent.prototype.type;
    /** @type {?} */
    MessageComponent.prototype.hasTimeOut;
    /** @type {?} */
    MessageComponent.prototype.timeout;
    /** @type {?} */
    MessageComponent.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2UvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd0RztJQVlJO1FBSlMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVDLENBQUM7Ozs7SUFFakIsbUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsVUFBVTs7O1lBQUM7Z0JBQ1AsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDSSxPQUFPLGFBQVcsSUFBSSxDQUFDLElBQU0sQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsa0NBQU87OztJQUFQO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBNUJKLFNBQVMsU0FBQztvQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHFNQUF1QztpQkFDMUM7Ozs7OzBCQUVJLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsTUFBTTs7SUFtQlgsdUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxnQkFBZ0I7OztJQUN6QixtQ0FBeUI7O0lBQ3pCLGdDQUEyQjs7SUFDM0Isc0NBQTRCOztJQUM1QixtQ0FBd0I7O0lBQ3hCLGlDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlVHlwZX0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6ICdtbC1tZXNzYWdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgICBASW5wdXQoKSB0eXBlOiBNZXNzYWdlVHlwZTtcbiAgICBASW5wdXQoKSBoYXNUaW1lT3V0ID0gZmFsc2U7XG4gICAgQElucHV0KCkgdGltZW91dCA9IDEwMDA7XG4gICAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1RpbWVPdXQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UuZW1pdCh0cnVlKTtcbiAgICAgICAgICAgIH0sIHRoaXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIGBtZXNzYWdlICR7dGhpcy50eXBlfWA7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICAgIH1cbn1cbiJdfQ==