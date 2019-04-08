/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.progressPercent = 0;
    }
    /**
     * @return {?}
     */
    ProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-progress',
                    template: "<div class=\"progress-container\">\n    <div class=\"progress\" [ngStyle]=\"{width: progressPercent + '%'}\">\n        <span class=\"progress-text\">{{progressText ? progressText : null}}</span>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProgressComponent.ctorParameters = function () { return []; };
    ProgressComponent.propDecorators = {
        progressPercent: [{ type: Input }],
        progressText: [{ type: Input }]
    };
    return ProgressComponent;
}());
export { ProgressComponent };
if (false) {
    /** @type {?} */
    ProgressComponent.prototype.progressPercent;
    /** @type {?} */
    ProgressComponent.prototype.progressText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXZEO0lBUUU7UUFIUyxvQkFBZSxHQUFHLENBQUMsQ0FBQztJQUdiLENBQUM7Ozs7SUFFakIsb0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixvT0FBd0M7aUJBQ3pDOzs7OztrQ0FFRSxLQUFLOytCQUNMLEtBQUs7O0lBTVIsd0JBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxpQkFBaUI7OztJQUM1Qiw0Q0FBNkI7O0lBQzdCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJvZ3Jlc3NQZXJjZW50ID0gMDtcbiAgQElucHV0KCkgcHJvZ3Jlc3NUZXh0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19