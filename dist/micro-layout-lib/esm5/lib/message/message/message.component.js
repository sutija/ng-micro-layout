/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    /**
     * @return {?}
     */
    MessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    MessageComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'ml-message',
                    template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">{{message}}</div>\n"
                }] }
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return []; };
    MessageComponent.propDecorators = {
        message: [{ type: Input }],
        type: [{ type: Input }]
    };
    return MessageComponent;
}());
export { MessageComponent };
if (false) {
    /** @type {?} */
    MessageComponent.prototype.message;
    /** @type {?} */
    MessageComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2UvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFaEY7SUFTRTtJQUFnQixDQUFDOzs7O0lBRWpCLG1DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLGFBQVcsSUFBSSxDQUFDLElBQU0sQ0FBQztJQUNoQyxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsK0VBQXVDO2lCQUN4Qzs7Ozs7MEJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQVdSLHVCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSxnQkFBZ0I7OztJQUMzQixtQ0FBeUI7O0lBQ3pCLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdtbC1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldENsYXNzKCkge1xuICAgIHJldHVybiBgbWVzc2FnZSAke3RoaXMudHlwZX1gO1xuICB9XG5cbn1cbiJdfQ==