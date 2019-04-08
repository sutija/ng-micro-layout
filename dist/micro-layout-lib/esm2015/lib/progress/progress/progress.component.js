/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ProgressComponent {
    constructor() {
        this.progressPercent = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-progress',
                template: "<div class=\"progress-container\">\n    <div class=\"progress\" [ngStyle]=\"{width: progressPercent + '%'}\">\n        <span class=\"progress-text\">{{progressText ? progressText : null}}</span>\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    progressPercent: [{ type: Input }],
    progressText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProgressComponent.prototype.progressPercent;
    /** @type {?} */
    ProgressComponent.prototype.progressText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBTXZELE1BQU0sT0FBTyxpQkFBaUI7SUFJNUI7UUFIUyxvQkFBZSxHQUFHLENBQUMsQ0FBQztJQUdiLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsb09BQXdDO2FBQ3pDOzs7Ozs4QkFFRSxLQUFLOzJCQUNMLEtBQUs7Ozs7SUFETiw0Q0FBNkI7O0lBQzdCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJvZ3Jlc3NQZXJjZW50ID0gMDtcbiAgQElucHV0KCkgcHJvZ3Jlc3NUZXh0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19