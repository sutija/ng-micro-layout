/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class LinkComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.router.navigateByUrl(this.target);
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-link',
                template: "<button ngClass=\"link\" type=\"button\" (click)=\"onClick()\">{{title}}</button>\n",
                styles: [".link{background:0 0;border:none;cursor:pointer}.link:hover{text-decoration:underline}"]
            }] }
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [
    { type: Router }
];
LinkComponent.propDecorators = {
    title: [{ type: Input }],
    target: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2xpbmsvbGluay9saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBT3ZDLE1BQU0sT0FBTyxhQUFhOzs7O0lBSXhCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQzs7OztJQUV2QyxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsK0ZBQW9DOzthQUVyQzs7OztZQU5PLE1BQU07OztvQkFRWCxLQUFLO3FCQUNMLEtBQUs7Ozs7SUFETiw4QkFBdUI7O0lBQ3ZCLCtCQUF3Qjs7Ozs7SUFFWiwrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFyZ2V0KTtcbiAgfVxufVxuIl19