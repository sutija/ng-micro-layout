/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class MessageComponent {
    constructor() {
        this.hasTimeOut = false;
        this.timeout = 1000;
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.hasTimeOut) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.close.emit(true);
            }), this.timeout);
        }
    }
    /**
     * @return {?}
     */
    getClass() {
        return `message ${this.type}`;
    }
    /**
     * @return {?}
     */
    onClose() {
        this.close.emit(true);
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'ml-message',
                template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">\n    <span ngClass=\"message-text\">{{message}}</span>\n    <button ngClass=\"message-close\" (click)=\"onClose()\">X</button>\n</div>\n"
            }] }
];
/** @nocollapse */
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    message: [{ type: Input }],
    type: [{ type: Input }],
    hasTimeOut: [{ type: Input }],
    timeout: [{ type: Input }],
    close: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2UvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVF0RyxNQUFNLE9BQU8sZ0JBQWdCO0lBT3pCO1FBSlMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVDLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxXQUFXLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQTVCSixTQUFTLFNBQUM7Z0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixxTUFBdUM7YUFDMUM7Ozs7O3NCQUVJLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsTUFBTTs7OztJQUpQLG1DQUF5Qjs7SUFDekIsZ0NBQTJCOztJQUMzQixzQ0FBNEI7O0lBQzVCLG1DQUF3Qjs7SUFDeEIsaUNBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VUeXBlfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzZWxlY3RvcjogJ21sLW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHR5cGU6IE1lc3NhZ2VUeXBlO1xuICAgIEBJbnB1dCgpIGhhc1RpbWVPdXQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0aW1lb3V0ID0gMTAwMDtcbiAgICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVGltZU91dCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENsYXNzKCkge1xuICAgICAgICByZXR1cm4gYG1lc3NhZ2UgJHt0aGlzLnR5cGV9YDtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlLmVtaXQodHJ1ZSk7XG4gICAgfVxufVxuIl19