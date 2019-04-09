import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MicroTestService = /** @class */ (function () {
    function MicroTestService() {
    }
    MicroTestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MicroTestService.ctorParameters = function () { return []; };
    /** @nocollapse */ MicroTestService.ngInjectableDef = defineInjectable({ factory: function MicroTestService_Factory() { return new MicroTestService(); }, token: MicroTestService, providedIn: "root" });
    return MicroTestService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MicroTestComponent = /** @class */ (function () {
    function MicroTestComponent() {
    }
    /**
     * @return {?}
     */
    MicroTestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MicroTestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-micro-test',
                    template: "\n    <p>\n      micro-test works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    MicroTestComponent.ctorParameters = function () { return []; };
    return MicroTestComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MicroTestModule = /** @class */ (function () {
    function MicroTestModule() {
    }
    MicroTestModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MicroTestComponent],
                    imports: [],
                    exports: [MicroTestComponent]
                },] }
    ];
    return MicroTestModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MicroTestService, MicroTestComponent, MicroTestModule };

//# sourceMappingURL=micro-test.js.map