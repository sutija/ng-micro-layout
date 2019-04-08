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
        if (this.type === 'internal') {
            this.router.navigateByUrl(this.target);
        }
        else {
            window.location.href = this.target;
        }
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-link',
                template: "<a ngClass=\"link\" (click)=\"onClick()\">{{title}}</a>\n",
                styles: [".link{background:0 0;border:none;cursor:pointer}.link:hover{text-decoration:underline}"]
            }] }
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [
    { type: Router }
];
LinkComponent.propDecorators = {
    title: [{ type: Input }],
    target: [{ type: Input }],
    type: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2xpbmsvbGluay9saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUXZDLE1BQU0sT0FBTyxhQUFhOzs7O0lBS3hCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQzs7OztJQUV2QyxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixxRUFBb0M7O2FBRXJDOzs7O1lBUE8sTUFBTTs7O29CQVNYLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLOzs7O0lBRk4sOEJBQXVCOztJQUN2QiwrQkFBd0I7O0lBQ3hCLDZCQUF3Qjs7Ozs7SUFFWiwrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0xpbmtUeXBlfSBmcm9tICcuL2xpbmsnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlua0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBMaW5rVHlwZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBvbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbnRlcm5hbCcpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMudGFyZ2V0O1xuICAgIH1cbiAgfVxufVxuIl19