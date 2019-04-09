import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MicroTestService {
    constructor() { }
}
MicroTestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MicroTestService.ctorParameters = () => [];
/** @nocollapse */ MicroTestService.ngInjectableDef = defineInjectable({ factory: function MicroTestService_Factory() { return new MicroTestService(); }, token: MicroTestService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MicroTestComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MicroTestComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-micro-test',
                template: `
    <p>
      micro-test works!
    </p>
  `
            }] }
];
/** @nocollapse */
MicroTestComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MicroTestModule {
}
MicroTestModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MicroTestComponent],
                imports: [],
                exports: [MicroTestComponent]
            },] }
];

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