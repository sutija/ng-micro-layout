/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var LinkComponent = /** @class */ (function () {
    function LinkComponent(router) {
        this.router = router;
    }
    /**
     * @return {?}
     */
    LinkComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl(this.target);
    };
    LinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-link',
                    template: "<button ngClass=\"link\" type=\"button\" (click)=\"onClick()\">{{title}}</button>\n",
                    styles: [".link{background:0 0;border:none;cursor:pointer}.link:hover{text-decoration:underline}"]
                }] }
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    LinkComponent.propDecorators = {
        title: [{ type: Input }],
        target: [{ type: Input }]
    };
    return LinkComponent;
}());
export { LinkComponent };
if (false) {
    /** @type {?} */
    LinkComponent.prototype.title;
    /** @type {?} */
    LinkComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    LinkComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2xpbmsvbGluay9saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZDO0lBU0UsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQzs7OztJQUV2QywrQkFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiwrRkFBb0M7O2lCQUVyQzs7OztnQkFOTyxNQUFNOzs7d0JBUVgsS0FBSzt5QkFDTCxLQUFLOztJQU9SLG9CQUFDO0NBQUEsQUFkRCxJQWNDO1NBVFksYUFBYTs7O0lBQ3hCLDhCQUF1Qjs7SUFDdkIsK0JBQXdCOzs7OztJQUVaLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YXJnZXQpO1xuICB9XG59XG4iXX0=