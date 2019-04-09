(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('micro-test', ['exports', '@angular/core'], factory) :
    (factory((global['micro-test'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MicroTestService = /** @class */ (function () {
        function MicroTestService() {
        }
        MicroTestService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MicroTestService.ctorParameters = function () { return []; };
        /** @nocollapse */ MicroTestService.ngInjectableDef = i0.defineInjectable({ factory: function MicroTestService_Factory() { return new MicroTestService(); }, token: MicroTestService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.MicroTestService = MicroTestService;
    exports.MicroTestComponent = MicroTestComponent;
    exports.MicroTestModule = MicroTestModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=micro-test.umd.js.map