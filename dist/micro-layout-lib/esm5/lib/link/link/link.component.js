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
        if (this.type === 'internal') {
            this.router.navigateByUrl(this.target);
        }
        else {
            window.location.href = this.target;
        }
    };
    LinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-link',
                    template: "<a ngClass=\"link\" (click)=\"onClick()\">{{title}}</a>\n",
                    styles: [".link{background:0 0;border:none;cursor:pointer}.link:hover{text-decoration:underline}"]
                }] }
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    LinkComponent.propDecorators = {
        title: [{ type: Input }],
        target: [{ type: Input }],
        type: [{ type: Input }]
    };
    return LinkComponent;
}());
export { LinkComponent };
if (false) {
    /** @type {?} */
    LinkComponent.prototype.title;
    /** @type {?} */
    LinkComponent.prototype.target;
    /** @type {?} */
    LinkComponent.prototype.type;
    /**
     * @type {?}
     * @private
     */
    LinkComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2xpbmsvbGluay9saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBR3ZDO0lBVUUsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQzs7OztJQUV2QywrQkFBTzs7O0lBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLHFFQUFvQzs7aUJBRXJDOzs7O2dCQVBPLE1BQU07Ozt3QkFTWCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUFXUixvQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFksYUFBYTs7O0lBQ3hCLDhCQUF1Qjs7SUFDdkIsK0JBQXdCOztJQUN4Qiw2QkFBd0I7Ozs7O0lBRVosK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtMaW5rVHlwZX0gZnJvbSAnLi9saW5rJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogTGlua1R5cGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnaW50ZXJuYWwnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnRhcmdldDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==