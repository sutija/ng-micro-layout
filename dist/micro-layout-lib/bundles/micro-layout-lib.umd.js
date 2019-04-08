(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/animations'), require('@angular/platform-browser'), require('ng2-order-pipe'), require('@angular/forms'), require('@angular/common'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('micro-layout-lib', ['exports', '@angular/router', '@angular/animations', '@angular/platform-browser', 'ng2-order-pipe', '@angular/forms', '@angular/common', '@angular/core', 'rxjs'], factory) :
    (factory((global['micro-layout-lib'] = {}),global.ng.router,global.ng.animations,global.ng.platformBrowser,global.ng2OrderPipe,global.ng.forms,global.ng.common,global.ng.core,global.rxjs));
}(this, (function (exports,router,animations,platformBrowser,ng2OrderPipe,forms,common,i0,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MicroLayoutLibService = /** @class */ (function () {
        function MicroLayoutLibService() {
        }
        MicroLayoutLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MicroLayoutLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MicroLayoutLibService.ngInjectableDef = i0.defineInjectable({ factory: function MicroLayoutLibService_Factory() { return new MicroLayoutLibService(); }, token: MicroLayoutLibService, providedIn: "root" });
        return MicroLayoutLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MicroLayoutLibComponent = /** @class */ (function () {
        function MicroLayoutLibComponent() {
        }
        /**
         * @return {?}
         */
        MicroLayoutLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MicroLayoutLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-micro-layout-lib',
                        template: "\n    <p>\n      micro-layout-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        MicroLayoutLibComponent.ctorParameters = function () { return []; };
        return MicroLayoutLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.disabled = false;
            this.types = [];
            this.type = 'button';
            this.title = false;
            this.clicked = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.emitClick = /**
         * @return {?}
         */
            function () {
                this.clicked.emit(true);
            };
        /**
         * @return {?}
         */
        ButtonComponent.prototype.getClass = /**
         * @return {?}
         */
            function () {
                return "button " + this.types.join(' ');
            };
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-button',
                        template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content *ngIf=\"!title\"></ng-content>\n    {{ title ? title : null }}\n</button>\n"
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            disabled: [{ type: i0.Input }],
            types: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            clicked: [{ type: i0.Output }],
            emitClick: [{ type: i0.HostListener, args: ['click',] }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonsModule = /** @class */ (function () {
        function ButtonsModule() {
        }
        ButtonsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ButtonComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            common.CommonModule
                        ],
                        exports: [ButtonComponent],
                    },] }
        ];
        return ButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardService = /** @class */ (function () {
        function CardService() {
            this.isCollapsed = false;
            this.canCollapse = true;
            this.isCollapsed$ = new rxjs.Subject();
            this.canCollapse$ = new rxjs.Subject();
        }
        /**
         * @param {?} canCollapse
         * @return {?}
         */
        CardService.prototype.setCanCollapse = /**
         * @param {?} canCollapse
         * @return {?}
         */
            function (canCollapse) {
                this.canCollapse = canCollapse;
                this.canCollapse$.next(this.canCollapse);
            };
        /**
         * @param {?} isCollapsed
         * @return {?}
         */
        CardService.prototype.setIsCollapsed = /**
         * @param {?} isCollapsed
         * @return {?}
         */
            function (isCollapsed) {
                this.isCollapsed = isCollapsed;
                this.isCollapsed$.next(this.isCollapsed);
            };
        /**
         * @return {?}
         */
        CardService.prototype.toggleCollapsed = /**
         * @return {?}
         */
            function () {
                this.isCollapsed = !this.isCollapsed;
                this.isCollapsed$.next(this.isCollapsed);
            };
        CardService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CardService.ctorParameters = function () { return []; };
        return CardService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardComponent = /** @class */ (function () {
        function CardComponent(cardService) {
            this.cardService = cardService;
            this.isCollapsed = false;
            this.canCollapse = true;
            this.subscriptions$ = [];
        }
        /**
         * @return {?}
         */
        CardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.cardService.setIsCollapsed(this.isCollapsed);
                this.cardService.setCanCollapse(this.canCollapse);
                this.subscriptions$.push(this.cardService.isCollapsed$
                    .subscribe(( /**
             * @param {?} isCollapsed
             * @return {?}
             */function (isCollapsed) { return _this.isCollapsed = isCollapsed; })));
            };
        /**
         * @return {?}
         */
        CardComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subscriptions$.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item.unsubscribe(); }));
            };
        CardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-card, [ml-card]',
                        template: "<div [ngClass]=\"{\n'card': true,\n'card-collapsed': isCollapsed\n}\">\n  <ng-content select=\"ml-card-header, [ml-card-header]\"></ng-content>\n  <ng-content select=\"ml-card-container, [ml-card-container]\"></ng-content>\n  <ng-content select=\"ml-card-footer, [ml-card-footer]\"></ng-content>\n</div>\n",
                        providers: [CardService]
                    }] }
        ];
        /** @nocollapse */
        CardComponent.ctorParameters = function () {
            return [
                { type: CardService }
            ];
        };
        CardComponent.propDecorators = {
            isCollapsed: [{ type: i0.Input }],
            canCollapse: [{ type: i0.Input }]
        };
        return CardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardHeaderComponent = /** @class */ (function () {
        function CardHeaderComponent(cardService) {
            this.cardService = cardService;
            this.canCollapse = true;
            this.isCollapsed = false;
            this.subscriptions$ = [];
        }
        /**
         * @return {?}
         */
        CardHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.subscriptions$.push(this.cardService.isCollapsed$
                    .subscribe(( /**
             * @param {?} isCollapsed
             * @return {?}
             */function (isCollapsed) { return _this.isCollapsed = isCollapsed; })));
                this.subscriptions$.push(this.cardService.canCollapse$
                    .subscribe(( /**
             * @param {?} canCollapse
             * @return {?}
             */function (canCollapse) { return _this.canCollapse = canCollapse; })));
            };
        /**
         * @return {?}
         */
        CardHeaderComponent.prototype.toggleCollapse = /**
         * @return {?}
         */
            function () {
                this.cardService.toggleCollapsed();
            };
        /**
         * @return {?}
         */
        CardHeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subscriptions$.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item.unsubscribe(); }));
            };
        CardHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-card-header',
                        template: "<div ngClass=\"wrapper\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"canCollapse\" [ngClass]=\"{'toggle-collapse': true, 'collapsed': isCollapsed}\" (click)=\"toggleCollapse()\">{{ isCollapsed ? '+' : '-'}}</div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardHeaderComponent.ctorParameters = function () {
            return [
                { type: CardService }
            ];
        };
        return CardHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardFooterComponent = /** @class */ (function () {
        function CardFooterComponent() {
        }
        /**
         * @return {?}
         */
        CardFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CardFooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-card-footer',
                        template: "<div ngClass=\"wrapper\">\n    <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardFooterComponent.ctorParameters = function () { return []; };
        return CardFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardContainerComponent = /** @class */ (function () {
        function CardContainerComponent(cardService) {
            this.cardService = cardService;
            this.subscriptions$ = [];
        }
        /**
         * @return {?}
         */
        CardContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.subscriptions$.push(this.cardService.isCollapsed$
                    .subscribe(( /**
             * @param {?} isCollapsed
             * @return {?}
             */function (isCollapsed) { return _this.isCollapsed = isCollapsed; })));
            };
        /**
         * @return {?}
         */
        CardContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subscriptions$.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item.unsubscribe(); }));
            };
        CardContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-card-container',
                        template: "<div [ngClass]=\"{'wrapper': true, 'collapsed': isCollapsed}\">\n    <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardContainerComponent.ctorParameters = function () {
            return [
                { type: CardService }
            ];
        };
        return CardContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        CardModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CardComponent, CardHeaderComponent, CardFooterComponent, CardContainerComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            CardComponent, CardHeaderComponent, CardFooterComponent, CardContainerComponent
                        ]
                    },] }
        ];
        return CardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkComponent = /** @class */ (function () {
        function LinkComponent(router$$1) {
            this.router = router$$1;
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
            { type: i0.Component, args: [{
                        selector: 'ml-link',
                        template: "<a ngClass=\"link\" (click)=\"onClick()\">{{title}}</a>\n",
                        styles: [".link{background:0 0;border:none;cursor:pointer}.link:hover{text-decoration:underline}"]
                    }] }
        ];
        /** @nocollapse */
        LinkComponent.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        LinkComponent.propDecorators = {
            title: [{ type: i0.Input }],
            target: [{ type: i0.Input }],
            type: [{ type: i0.Input }]
        };
        return LinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkModule = /** @class */ (function () {
        function LinkModule() {
        }
        LinkModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LinkComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LinkComponent]
                    },] }
        ];
        return LinkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'ml-progress',
                        template: "<div class=\"progress-container\">\n    <div class=\"progress\" [ngStyle]=\"{width: progressPercent + '%'}\">\n        <span class=\"progress-text\">{{progressText ? progressText : null}}</span>\n    </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        ProgressComponent.ctorParameters = function () { return []; };
        ProgressComponent.propDecorators = {
            progressPercent: [{ type: i0.Input }],
            progressText: [{ type: i0.Input }]
        };
        return ProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressModule = /** @class */ (function () {
        function ProgressModule() {
        }
        ProgressModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ProgressComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [ProgressComponent]
                    },] }
        ];
        return ProgressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TABLE_COLUMN_TYPES = {
        string: 'string',
        number: 'number',
        textarea: 'textarea',
        switch: 'switch',
        drop: 'drop',
        component: 'component',
        date: 'date'
    };
    /** @type {?} */
    var DEFAULT_TABLE_OPTIONS = {
        canAddRows: false,
        canDelete: false,
        editOption: 'internal',
        isEditable: false,
        isDraggable: false,
        isSortable: false,
        numberOfItems: [50, 100, 200],
        schema: {}
    };
    /** @type {?} */
    var PAGINATION = {
        previous: 'previous',
        next: 'next',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableColumnComponent = /** @class */ (function () {
        function TableColumnComponent(compiler) {
            this.compiler = compiler;
            this.dataValue = false;
            this.subscriptions$ = [];
            this.dataChange = new i0.EventEmitter();
            this.isEditing = false;
            this.isEditable = true;
            this.tableColumnTypes = TABLE_COLUMN_TYPES;
        }
        Object.defineProperty(TableColumnComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this.dataValue;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this.dataValue = val;
                this.dataChange.emit(this.dataValue);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newData
         * @return {?}
         */
        TableColumnComponent.prototype.ngOnChanges = /**
         * @param {?} newData
         * @return {?}
         */
            function (newData) {
                if (newData.data) {
                    this.handleData();
                }
            };
        /**
         * @return {?}
         */
        TableColumnComponent.prototype.handleData = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.dataValue instanceof Array) {
                    this.dataValue.forEach(( /**
                     * @param {?} component
                     * @return {?}
                     */function (component) {
                        return _this.render(component);
                    }));
                }
                else {
                    this.render(this.dataValue);
                }
            };
        /**
         * @param {?} component
         * @return {?}
         */
        TableColumnComponent.prototype.render = /**
         * @param {?} component
         * @return {?}
         */
            function (component) {
                var _this = this;
                if (component && this.columnType === TABLE_COLUMN_TYPES.component) {
                    this.componentRef =
                        this.columnComponent.createComponent(this.compiler.resolveComponentFactory(component.component));
                    // Set component params
                    component.componentParams.forEach(( /**
                     * @param {?} param
                     * @return {?}
                     */function (param) {
                        if (param.value instanceof Function) {
                            if (_this.componentRef.instance[param.name]) {
                                // Subscribe to event
                                _this.subscriptions$.push(_this.componentRef.instance[param.name]
                                    .subscribe(( /**
                             * @param {?} e
                             * @return {?}
                             */function (e) {
                                    param.value(e);
                                })));
                            }
                        }
                        else {
                            // Set param
                            _this.componentRef.instance[param.name] = param.value;
                        }
                    }));
                }
            };
        /**
         * @return {?}
         */
        TableColumnComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subscriptions$.forEach(( /**
                 * @param {?} subscription
                 * @return {?}
                 */function (subscription) {
                    return subscription.unsubscribe();
                }));
            };
        TableColumnComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table-column, [ml-table-column]',
                        template: "<div\n    *ngIf=\"data !== null && !isEditing && (columnType !== tableColumnTypes.component)\"\n    class=\"column\"\n>\n    <span>{{data}}</span>\n</div>\n<div #columnComponent class=\"component\"></div>\n<div\n        [ngSwitch]=\"columnType\"\n        *ngIf=\"data !== null && isEditing && isEditable\"\n        class=\"column table-form-element\"\n>\n    <textarea *ngSwitchCase=\"tableColumnTypes.textarea\" [(ngModel)]=\"data\"></textarea>\n    <ml-switch *ngSwitchCase=\"tableColumnTypes.switch\" [(ngModel)]=\"data\"></ml-switch>\n    <input *ngSwitchDefault type=\"text\" [(ngModel)]=\"data\"/>\n</div>\n<div class=\"column column-empty\" *ngIf=\"data === null && !isEditing\">/</div>\n"
                    }] }
        ];
        /** @nocollapse */
        TableColumnComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver }
            ];
        };
        TableColumnComponent.propDecorators = {
            data: [{ type: i0.Input }],
            dataChange: [{ type: i0.Output }],
            isEditing: [{ type: i0.Input }],
            isEditable: [{ type: i0.Input }],
            columnType: [{ type: i0.Input }],
            columnComponent: [{ type: i0.ViewChild, args: ['columnComponent', { read: i0.ViewContainerRef },] }]
        };
        return TableColumnComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableContainerComponent = /** @class */ (function () {
        function TableContainerComponent() {
            this.isEditable = false;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        TableContainerComponent.prototype.getClass = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (data._options && data._options._backgroundColor) {
                    return "row " + data._options._backgroundColor;
                }
                else {
                    return 'row';
                }
            };
        TableContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table-container, [ml-table-container]',
                        template: "<tr\n        ml-table-row\n        [ngClass]=\"getClass(row)\"\n        *ngFor=\"let row of data\"\n        [data]=\"row\"\n        [isEditable]=\"isEditable\"></tr>\n"
                    }] }
        ];
        /** @nocollapse */
        TableContainerComponent.ctorParameters = function () { return []; };
        TableContainerComponent.propDecorators = {
            data: [{ type: i0.Input }],
            isEditable: [{ type: i0.Input }]
        };
        return TableContainerComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ArrayToChunksPipe = /** @class */ (function () {
        function ArrayToChunksPipe() {
        }
        /**
         * @param {?} array
         * @param {?} numberOfItems
         * @return {?}
         */
        ArrayToChunksPipe.prototype.transform = /**
         * @param {?} array
         * @param {?} numberOfItems
         * @return {?}
         */
            function (array, numberOfItems) {
                return array.map(( /**
                 * @param {?} e
                 * @param {?} i
                 * @return {?}
                 */function (e, i) {
                    if (i % numberOfItems === 0) {
                        return array.slice(i, i + numberOfItems);
                    }
                    else {
                        return null;
                    }
                })).filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item; }));
            };
        ArrayToChunksPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'arrayToChunks'
                    },] }
        ];
        return ArrayToChunksPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableService = /** @class */ (function () {
        function TableService() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        TableService.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.tableOptions = options;
            };
        /**
         * @return {?}
         */
        TableService.prototype.getOptions = /**
         * @return {?}
         */
            function () {
                return this.tableOptions;
            };
        TableService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        TableService.ctorParameters = function () { return []; };
        return TableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableDataService = /** @class */ (function () {
        function TableDataService(tableService, arrayToChunksPipe, ng2OrderPipe$$1) {
            this.tableService = tableService;
            this.arrayToChunksPipe = arrayToChunksPipe;
            this.ng2OrderPipe = ng2OrderPipe$$1;
            this.dataChange$ = new rxjs.Subject();
            this.elementSelected$ = new rxjs.Subject();
            this.tableData = new rxjs.Subject();
            this.orderDir = false;
            this.limit = 100;
            this.pageNumber = 0;
        }
        /**
         * @param {?} limit
         * @return {?}
         */
        TableDataService.prototype.setLimit = /**
         * @param {?} limit
         * @return {?}
         */
            function (limit) {
                this.limit = limit;
                this.pageNumber = 0;
                this.data = this.arrayToChunksPipe
                    .transform(this.setColumns(this.schema, this.internalData), this._getLimit());
                this.changeData();
            };
        /**
         * @return {?}
         */
        TableDataService.prototype.getHeaders = /**
         * @return {?}
         */
            function () {
                return this.schema;
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TableDataService.prototype.generateId = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return Math.round((new Date()).getTime() / 1000) + index;
            };
        /**
         * @param {?} data
         * @param {?} schema
         * @return {?}
         */
        TableDataService.prototype.setData = /**
         * @param {?} data
         * @param {?} schema
         * @return {?}
         */
            function (data, schema) {
                var _this = this;
                // Generate row _id
                if (data[0] && !data[0]._id) {
                    this.internalData = data.map(( /**
                     * @param {?} item
                     * @param {?} index
                     * @return {?}
                     */function (item, index) {
                        item._id = _this.generateId(index);
                        return item;
                    }));
                }
                else {
                    this.internalData = data;
                }
                this.data = this.arrayToChunksPipe
                    .transform(this.setColumns(schema, this.internalData), this._getLimit());
                this.schema = schema;
                this.changeData();
            };
        /**
         * @return {?}
         */
        TableDataService.prototype.getData = /**
         * @return {?}
         */
            function () {
                return this.tableData;
            };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        TableDataService.prototype.goToPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
            function (pageNumber) {
                this.pageNumber = pageNumber;
                this.changeData();
            };
        /**
         * @protected
         * @return {?}
         */
        TableDataService.prototype.changeData = /**
         * @protected
         * @return {?}
         */
            function () {
                /** @type {?} */
                var data = this.data[this.pageNumber];
                this.internalTableData = {
                    currentPage: this.pageNumber,
                    data: data,
                    header: this.schema,
                    numberOfPages: this.data.length,
                };
                this.tableData.next(this.internalTableData);
            };
        /**
         * @protected
         * @return {?}
         */
        TableDataService.prototype._getLimit = /**
         * @protected
         * @return {?}
         */
            function () {
                if (this.limit) {
                    return this.limit;
                }
                else {
                    return this.internalData.length;
                }
            };
        /**
         * @protected
         * @param {?} schema
         * @param {?} rows
         * @return {?}
         */
        TableDataService.prototype.setColumns = /**
         * @protected
         * @param {?} schema
         * @param {?} rows
         * @return {?}
         */
            function (schema, rows) {
                /** @type {?} */
                var newRows = [];
                /** @type {?} */
                var fields = Object.keys(schema);
                rows.forEach(( /**
                 * @param {?} oldRow
                 * @return {?}
                 */function (oldRow) {
                    /** @type {?} */
                    var existingColumns = Object.keys(oldRow);
                    fields.filter(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return !existingColumns
                            .includes(item);
                    }))
                        .forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return oldRow[item] = schema[item].defaultValue; }));
                    newRows.push(oldRow);
                }));
                return newRows;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        TableDataService.prototype.itemAdd = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.internalData.push(data);
                        this.dataChange$.next({
                            type: 'add',
                            data: data
                        });
                        return [2 /*return*/];
                    });
                });
            };
        /**
         * @param {?} data
         * @return {?}
         */
        TableDataService.prototype.itemEdit = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.internalData = this.internalData
                            .map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                            if (item._id === data._id) {
                                return data;
                            }
                            return item;
                        }));
                        this.dataChange$.next({
                            type: 'edit',
                            data: data
                        });
                        return [2 /*return*/];
                    });
                });
            };
        /**
         * @param {?} id
         * @return {?}
         */
        TableDataService.prototype.itemDelete = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return __awaiter(this, void 0, void 0, function () {
                    var index;
                    return __generator(this, function (_a) {
                        index = this.internalData
                            .findIndex(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item._id === id; }));
                        if (index < 0) {
                            return [2 /*return*/, false];
                        }
                        this.internalData.splice(index, 1);
                        this.dataChange$.next({
                            data: id,
                            type: 'delete'
                        });
                        return [2 /*return*/];
                    });
                });
            };
        /**
         * @param {?} orderBy
         * @return {?}
         */
        TableDataService.prototype.reorder = /**
         * @param {?} orderBy
         * @return {?}
         */
            function (orderBy) {
                this.orderBy === orderBy ? this.orderDir = !this.orderDir : this.orderBy = orderBy;
                this.pageNumber = 0;
                this.data = this.arrayToChunksPipe
                    .transform(this.setColumns(this.schema, this.ng2OrderPipe
                    .transform(this.internalData, this.orderBy, this.orderDir)), this._getLimit());
                this.changeData();
            };
        TableDataService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        TableDataService.ctorParameters = function () {
            return [
                { type: TableService },
                { type: ArrayToChunksPipe },
                { type: ng2OrderPipe.Ng2OrderPipe }
            ];
        };
        return TableDataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableRowComponent = /** @class */ (function () {
        function TableRowComponent(tableDataService) {
            this.tableDataService = tableDataService;
            this.isEditable = false;
            this.isEditing = false;
            this.select = new i0.EventEmitter();
            this.deleteActivated = false;
        }
        /**
         * @return {?}
         */
        TableRowComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this._data = Object.assign({}, this.data);
            };
        /**
         * @return {?}
         */
        TableRowComponent.prototype.elementSelected = /**
         * @return {?}
         */
            function () {
                this.tableDataService.elementSelected$.next(this._data);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        TableRowComponent.prototype.trackColumn = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                if (!item) {
                    return null;
                }
                return index;
            };
        /**
         * @return {?}
         */
        TableRowComponent.prototype.getColumnsData = /**
         * @return {?}
         */
            function () {
                return Object.keys(this.tableDataService.getHeaders());
            };
        /**
         * @param {?} key
         * @return {?}
         */
        TableRowComponent.prototype.getColumnTypeByKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.tableDataService.getHeaders()[key].type;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        TableRowComponent.prototype.getColumnIsEditableByKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.tableDataService.getHeaders()[key].isEditable;
            };
        /**
         * @return {?}
         */
        TableRowComponent.prototype.cancel = /**
         * @return {?}
         */
            function () {
                this._data = Object.assign({}, this.data);
                this.isEditing = false;
            };
        /**
         * @return {?}
         */
        TableRowComponent.prototype.edit = /**
         * @return {?}
         */
            function () {
                this.isEditing = !this.isEditing;
            };
        /**
         * @param {?} type
         * @return {?}
         */
        TableRowComponent.prototype.save = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.isEditing = false;
                                if (!(type === 'add'))
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.tableDataService.itemAdd(this.data)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.tableDataService.itemEdit(this._data)];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        TableRowComponent.prototype.delete = /**
         * @return {?}
         */
            function () {
                this.deleteActivated = true;
                if (confirm("Delete \"" + this.data.title + "\"?")) {
                    this.tableDataService.itemDelete(this.data._id);
                }
            };
        TableRowComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table-row, [ml-table-row]',
                        template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (click)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable && !isEditing\">\n  <button\n          class=\"table-button\"\n          (click)=\"edit()\"\n  >Edit</button>\n  <button class=\"table-button\" (click)=\"delete()\">Delete</button>\n</td>\n<td *ngIf=\"isEditing\">\n  <button class=\"table-button\" (click)=\"save('edit')\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"table-button\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
                    }] }
        ];
        /** @nocollapse */
        TableRowComponent.ctorParameters = function () {
            return [
                { type: TableDataService }
            ];
        };
        TableRowComponent.propDecorators = {
            data: [{ type: i0.Input }],
            isEditable: [{ type: i0.Input }],
            isEditing: [{ type: i0.Input }],
            select: [{ type: i0.Output }]
        };
        return TableRowComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent(tableDataService, tableService) {
            this.tableDataService = tableDataService;
            this.tableService = tableService;
            this.tableID = 'default';
            // Only if we have external page handler
            this.add = new i0.EventEmitter();
            this.edit = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
            this.pageChange = new i0.EventEmitter();
            this.numberOfItemsChange = new i0.EventEmitter();
            this.isLoading = false;
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
                    this.tableDataService.setLimit(this.tableLimit);
                }
                // On data update
                this.dataChange$ = this.tableDataService.dataChange$
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    return _this[data.type].emit(data.data);
                }));
                // On new data
                this.getData$ = this.tableDataService
                    .getData()
                    .subscribe(( /**
             * @param {?} newData
             * @return {?}
             */function (newData) {
                    _this.header = newData.header;
                    _this.container = newData.data;
                    if (_this.tableOptions.isInternalPagination) {
                        _this.numOfPages = newData.numberOfPages;
                        _this.currentPage = newData.currentPage;
                    }
                }));
                if (!this.tableOptions.isInternalPagination) {
                    this.currentPage = 0;
                }
                this.tableDataService.setData(this.data, this.tableOptions.schema);
                this.tableDataService.setLimit(this.tableOptions.numberOfItems[0]);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        TableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.tableOptions) {
                    this.tableOptions = Object.assign({}, DEFAULT_TABLE_OPTIONS, this.tableOptions);
                    this.tableService.setOptions(this.tableOptions);
                }
                if (changes.data) {
                    this.tableDataService.setData(this.data, this.tableOptions.schema);
                }
                if (changes.numberOfPages) {
                    this.numOfPages = this.numberOfPages;
                }
                if (changes.pageNumber) {
                    this.currentPage = this.pageNumber;
                }
                if (changes.tableLimit) {
                    this.tableDataService.setLimit(changes.tableLimit.currentValue);
                }
            };
        /**
         * @return {?}
         */
        TableComponent.prototype.getCurrentPage = /**
         * @return {?}
         */
            function () {
                return this.currentPage + 1;
            };
        /**
         * @param {?} numOfItems
         * @return {?}
         */
        TableComponent.prototype.onChangeNumberOfItems = /**
         * @param {?} numOfItems
         * @return {?}
         */
            function (numOfItems) {
                this.tableLimit = parseInt(numOfItems, 10);
                this.tableDataService.setLimit(this.tableLimit);
                this.numberOfItemsChange.emit(this.tableLimit);
            };
        /**
         * @return {?}
         */
        TableComponent.prototype.onNextPage = /**
         * @return {?}
         */
            function () {
                if (this.tableOptions.isInternalPagination) {
                    this.tableDataService.goToPage(this.currentPage + 1);
                }
                else {
                    this.pageChange.emit({
                        direction: PAGINATION.next,
                    });
                }
            };
        /**
         * @return {?}
         */
        TableComponent.prototype.onPreviousPage = /**
         * @return {?}
         */
            function () {
                if (this.tableOptions.isInternalPagination) {
                    this.tableDataService.goToPage(this.currentPage - 1);
                }
                else {
                    this.pageChange.emit({
                        direction: PAGINATION.previous,
                    });
                }
            };
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.dataChange$.unsubscribe();
                this.getData$.unsubscribe();
            };
        TableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table, [ml-table]',
                        template: "<table\n        [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n>\n    <thead\n            ml-table-header\n            [data]=\"header\"\n            class=\"header\"\n            [isEditable]=\"tableOptions.isEditable\"\n    ></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isDraggable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody\n            ml-table-container\n            class=\"table-container\"\n            *ngIf=\"!tableOptions.isDraggable\"\n            [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n    ></tbody>\n</table>\n<div class=\"table-navigation\">\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onPreviousPage()\"\n            *ngIf=\"currentPage > 0\"\n    >\n        Previous page\n    </button>\n    <span class=\"page-information\">\n        {{ getCurrentPage() }} / {{ numOfPages }}\n    </span>\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onNextPage()\"\n            *ngIf=\"currentPage < numOfPages - 1\"\n    >\n        Next page\n    </button>\n</div>\n<div\n        class=\"number-of-items\"\n        *ngIf=\"tableOptions.canChangeNumberOfItems\"\n>\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n        <option\n                *ngFor=\"let value of tableOptions.numberOfItems\"\n                [value]=\"value\"\n        >{{value}}</option>\n    </select>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [TableDataService, TableService]
                    }] }
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () {
            return [
                { type: TableDataService },
                { type: TableService }
            ];
        };
        TableComponent.propDecorators = {
            tableID: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            tableOptions: [{ type: i0.Input }],
            tableLimit: [{ type: i0.Input }],
            numberOfPages: [{ type: i0.Input }],
            pageNumber: [{ type: i0.Input }],
            add: [{ type: i0.Output }],
            edit: [{ type: i0.Output }],
            delete: [{ type: i0.Output }],
            pageChange: [{ type: i0.Output }],
            numberOfItemsChange: [{ type: i0.Output }],
            isLoading: [{ type: i0.Input }]
        };
        return TableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SwitchComponent = /** @class */ (function (_super) {
        __extends(SwitchComponent, _super);
        function SwitchComponent() {
            var _this = _super.call(this) || this;
            _this.change = new i0.EventEmitter();
            _this.value = false;
            return _this;
        }
        /**
         * @return {?}
         */
        SwitchComponent.prototype.toggleOnOff = /**
         * @return {?}
         */
            function () {
                this.value = !this.value;
                if (this.onChange) {
                    this.onChange(this.value);
                }
                this.change.emit(this.value);
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        SwitchComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                this.value = obj;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        SwitchComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        SwitchComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
            };
        SwitchComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-switch',
                        template: "<div [ngClass]=\"{'switch-on': value, 'switch': true}\">\n  <div ngClass=\"switch-container\" (click)=\"toggleOnOff()\">\n    <div ngClass=\"button\"></div>\n  </div>\n</div>\n",
                        providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: SwitchComponent, multi: true }]
                    }] }
        ];
        /** @nocollapse */
        SwitchComponent.ctorParameters = function () { return []; };
        SwitchComponent.propDecorators = {
            change: [{ type: i0.Output }],
            value: [{ type: i0.Input }]
        };
        return SwitchComponent;
    }(forms.FormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropService = /** @class */ (function () {
        function DropService() {
            this.items = [];
            this.disabledIds = [];
            this.selectedItem$ = new rxjs.Subject();
        }
        /**
         * @param {?} id
         * @return {?}
         */
        DropService.prototype.getItemsByParentId = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.items.filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item.parentId === id; }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        DropService.prototype.getItemById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.items.find(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item.id === id; }));
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        DropService.prototype.setDisabledIds = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                this.disabledIds = ids;
            };
        /**
         * @param {?} items
         * @return {?}
         */
        DropService.prototype.setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                this.items = items;
            };
        /**
         * @param {?} selectedItem
         * @return {?}
         */
        DropService.prototype.selectItem = /**
         * @param {?} selectedItem
         * @return {?}
         */
            function (selectedItem) {
                this.selectedItem = selectedItem;
                this.selectedItem$.next(this.selectedItem);
            };
        /**
         * @param {?} title
         * @return {?}
         */
        DropService.prototype.searchByTitle = /**
         * @param {?} title
         * @return {?}
         */
            function (title) {
                if (title) {
                    return this.items.filter(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item.title.toLowerCase().search(title.toLowerCase()) >= 0; }));
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        DropService.prototype.getFullPath = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return this.items.reduce(( /**
                 * @param {?} prev
                 * @param {?} curr
                 * @return {?}
                 */function (prev, curr) {
                    if (prev && prev[prev.length - 1].parentId
                        === curr.id) {
                        prev.push(curr);
                    }
                    return prev;
                }), [item]).reverse();
            };
        DropService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        DropService.ctorParameters = function () { return []; };
        return DropService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BUTTON_TYPES = {
        primary: 'primary',
        cancel: 'cancel',
        close: 'close'
    };
    /** @type {?} */
    var BUTTON_POSITIONS = {
        attachToRight: 'attach-to-right',
        attachToLeft: 'attach-to-left',
        attachToBottom: 'attach-to-bottom',
        attachToTop: 'attach-to-top'
    };
    /** @type {?} */
    var BUTTON_STYLES = {
        standard: 'standard',
        flat: 'flat'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropComponent = /** @class */ (function (_super) {
        __extends(DropComponent, _super);
        function DropComponent(dropService) {
            var _this = _super.call(this) || this;
            _this.dropService = dropService;
            _this.disabledIds = [];
            _this.items = [];
            _this.editable = false;
            _this.update = new i0.EventEmitter();
            _this.delete = new i0.EventEmitter();
            _this.add = new i0.EventEmitter();
            _this.select = new i0.EventEmitter();
            _this.dropVisible = false;
            _this.dropButtonStyles = [
                BUTTON_POSITIONS.attachToRight,
                BUTTON_TYPES.primary,
                BUTTON_STYLES.flat
            ];
            _this.foundItems = [];
            _this.path = [];
            _this.searchActive = false;
            _this.selectedItem = {
                title: null,
                parentId: null,
                id: null
            };
            return _this;
        }
        /**
         * @return {?}
         */
        DropComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.dropService.selectedItem$.subscribe(( /**
                 * @param {?} selectedItem
                 * @return {?}
                 */function (selectedItem) { return _this.selectItem(selectedItem); }));
            };
        /**
         * @return {?}
         */
        DropComponent.prototype.activateSearch = /**
         * @return {?}
         */
            function () {
                this.searchActive = true;
            };
        /**
         * @param {?} selectedItem
         * @return {?}
         */
        DropComponent.prototype.selectItem = /**
         * @param {?} selectedItem
         * @return {?}
         */
            function (selectedItem) {
                this.path = this.dropService.getFullPath(selectedItem);
                this.selectedItem = selectedItem;
                this.value = selectedItem.id;
                this.searchText = selectedItem.title;
                this.searchActive = false;
                this.dropVisible = false;
                this.select.emit(selectedItem);
                if (this.onChange) {
                    this.onChange(this.value);
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        DropComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this.dropService.setItems(this.items);
                if (changes['value'] && changes['value'].currentValue > 0) {
                    this.selectItem(this.dropService.getItemById(this.value));
                }
                if (changes['disabledIds']) {
                    this.dropService.setDisabledIds(changes['disabledIds'].currentValue);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DropComponent.prototype.dropToggle = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log('toggle', this.dropVisible);
                this.dropVisible = !this.dropVisible;
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        DropComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                this.value = obj;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        DropComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        DropComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DropComponent.prototype.onKeyUp = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.key === 'Escape') {
                    this.searchActive = false;
                    this.dropVisible = false;
                    return;
                }
                this.foundItems = this.dropService.searchByTitle(this.searchText);
            };
        DropComponent.decorators = [
            { type: i0.Component, args: [{
                        animations: [
                            animations.trigger('toggle', [
                                animations.state('visible', animations.style({
                                    height: '*'
                                })),
                                animations.state('hidden', animations.style({
                                    height: 0
                                }))
                            ])
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        selector: 'ml-drop',
                        template: "<div ngClass=\"search-and-selected\">\n  <div *ngIf=\"!searchActive\" (click)=\"activateSearch()\" ngClass=\"selected\">\n    <span *ngFor=\"let pathItem of path\">{{pathItem.title}}</span>\n  </div>\n  <input *ngIf=\"searchActive\"\n         type=\"text\"\n         [(ngModel)]=\"searchText\"\n         (keyup)=\"onKeyUp($event)\"\n         [autofocus]=\"searchActive\"\n         ngClass=\"search-field\"\n         placeholder=\"search...\"\n  />\n  <ml-button\n          (click)=\"dropToggle($event)\"\n          type=\"button\" ngClass=\"drop-button\"\n          *ngIf=\"!searchActive\"\n          [types]=\"dropButtonStyles\"\n  >\n    <svg ngClass=\"toggle-image {{dropVisible ? '-active' : null}}\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"16\" viewBox=\"0 0 32 16\">\n      <polygon id=\"toggle-icon\" points=\"16 8.95 7.06 0 0 0 16 16 32 0 24.95 0 16 8.95\" style=\"fill:#231f20\"/></svg>\n  </ml-button>\n</div>\n<div *ngIf=\"searchActive\" ngClass=\"results\">\n  <ul>\n    <li *ngFor=\"let item of foundItems\" ngClass=\"result-item\" (click)=\"selectItem(item)\">{{item.title}}</li>\n  </ul>\n</div>\n<div *ngIf=\"dropVisible\" ngClass=\"drop-list\">\n  <ml-drop-items [parentId]=\"0\" [isOpened]=\"true\"></ml-drop-items>\n</div>\n",
                        providers: [
                            DropService,
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: DropComponent,
                                multi: true
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        DropComponent.ctorParameters = function () {
            return [
                { type: DropService }
            ];
        };
        DropComponent.propDecorators = {
            disabledIds: [{ type: i0.Input }],
            items: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            editable: [{ type: i0.Input }],
            update: [{ type: i0.Output }],
            delete: [{ type: i0.Output }],
            add: [{ type: i0.Output }],
            select: [{ type: i0.Output }]
        };
        return DropComponent;
    }(forms.FormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropItemsComponent = /** @class */ (function () {
        function DropItemsComponent(dropService) {
            this.dropService = dropService;
            this.isOpened = true;
            this.childrenVisible = [];
        }
        /**
         * @return {?}
         */
        DropItemsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.childrenVisible = this.dropService.getItemsByParentId(this.parentId).map(( /**
                 * @return {?}
                 */function () { return false; }));
            };
        /**
         * @return {?}
         */
        DropItemsComponent.prototype.getItems = /**
         * @return {?}
         */
            function () {
                return this.dropService.getItemsByParentId(this.parentId);
            };
        /**
         * @param {?} parentId
         * @return {?}
         */
        DropItemsComponent.prototype.hasChildren = /**
         * @param {?} parentId
         * @return {?}
         */
            function (parentId) {
                return this.dropService.getItemsByParentId(parentId).length > 0;
            };
        /**
         * @param {?} item
         * @return {?}
         */
        DropItemsComponent.prototype.selectItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.dropService.selectItem(item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        DropItemsComponent.prototype.toggleChildren = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.childrenVisible[index] = !this.childrenVisible[index];
            };
        DropItemsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-drop-items, [ml-drop-items]',
                        template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n",
                        providers: []
                    }] }
        ];
        /** @nocollapse */
        DropItemsComponent.ctorParameters = function () {
            return [
                { type: DropService }
            ];
        };
        DropItemsComponent.propDecorators = {
            parentId: [{ type: i0.Input }],
            isOpened: [{ type: i0.Input }]
        };
        return DropItemsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlugComponent = /** @class */ (function (_super) {
        __extends(SlugComponent, _super);
        function SlugComponent() {
            return _super.call(this) || this;
        }
        /**
         * @return {?}
         */
        SlugComponent.prototype.update = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var value = this.element.nativeElement.value.split(' ').join('-').toLowerCase();
                this.value = value;
                this.element.nativeElement.value = value;
                this.onChange(this.value);
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        SlugComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                this.value = obj;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        SlugComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        SlugComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        SlugComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-slug',
                        template: "<input type=\"text\" #element (keyup)=\"update()\" [value]=\"value\" />\n",
                        providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: SlugComponent, multi: true }]
                    }] }
        ];
        /** @nocollapse */
        SlugComponent.ctorParameters = function () { return []; };
        SlugComponent.propDecorators = {
            value: [{ type: i0.Input }],
            element: [{ type: i0.ViewChild, args: ['element',] }]
        };
        return SlugComponent;
    }(forms.FormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PartsComponent = /** @class */ (function (_super) {
        __extends(PartsComponent, _super);
        function PartsComponent() {
            var _this = _super.call(this) || this;
            _this.addButtonClass = [
                BUTTON_STYLES.flat,
                BUTTON_POSITIONS.attachToRight
            ];
            _this.removeButtonClass = [
                BUTTON_STYLES.flat,
                BUTTON_POSITIONS.attachToRight
            ];
            _this.parts = [];
            return _this;
        }
        /**
         * @return {?}
         */
        PartsComponent.prototype.addPart = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = this.element.nativeElement;
                if (element.value.trim().length > 0) {
                    this.parts.push(element.value.trim());
                    element.value = '';
                    this.update();
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        PartsComponent.prototype.removePart = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.parts.splice(index, 1);
                this.update();
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        PartsComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                this.value = obj;
                if (this.value) {
                    this.parts = this.value.split(',');
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        PartsComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        PartsComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouch = fn;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        PartsComponent.prototype.onKeyUp = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                if (event.code === 'Enter') {
                    this.addPart();
                }
            };
        /**
         * @protected
         * @return {?}
         */
        PartsComponent.prototype.update = /**
         * @protected
         * @return {?}
         */
            function () {
                this.value = this.parts.join(',');
                this.onChange(this.value);
                this.onTouch(true);
            };
        PartsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-parts',
                        template: "<div ngClass=\"parts-input\">\n  <input (keyup)=\"onKeyUp($event)\" #element />\n  <ml-button (click)=\"addPart()\" type=\"button\" [types]=\"addButtonClass\">add</ml-button>\n</div>\n<div ngClass=\"parts\">\n  <ul>\n    <li *ngFor=\"let item of parts; let i = index;\">\n      <span>{{item}}</span>\n      <ml-button (click)=\"removePart(i)\" type=\"button\" [types]=\"removeButtonClass\">X</ml-button>\n    </li>\n  </ul>\n</div>\n",
                        providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: PartsComponent, multi: true }]
                    }] }
        ];
        /** @nocollapse */
        PartsComponent.ctorParameters = function () { return []; };
        PartsComponent.propDecorators = {
            value: [{ type: i0.Input }],
            element: [{ type: i0.ViewChild, args: ['element',] }]
        };
        return PartsComponent;
    }(forms.FormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormModule = /** @class */ (function () {
        function FormModule() {
        }
        FormModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            SwitchComponent,
                            DropComponent,
                            DropItemsComponent,
                            SlugComponent,
                            PartsComponent
                        ],
                        imports: [
                            ButtonsModule,
                            common.CommonModule,
                            forms.FormsModule,
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            SlugComponent,
                            SwitchComponent,
                            PartsComponent,
                            DropComponent,
                            DropItemsComponent
                        ]
                    },] }
        ];
        return FormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableHeaderComponent = /** @class */ (function () {
        function TableHeaderComponent(tableDataService) {
            this.tableDataService = tableDataService;
            this.data = {};
            this.isEditable = false;
        }
        /**
         * @return {?}
         */
        TableHeaderComponent.prototype.getData = /**
         * @return {?}
         */
            function () {
                if (this.data) {
                    return Object.keys(this.data) || [];
                }
                else {
                    return [];
                }
            };
        /**
         * @param {?} label
         * @return {?}
         */
        TableHeaderComponent.prototype.sortItems = /**
         * @param {?} label
         * @return {?}
         */
            function (label) {
                this.tableDataService.reorder(label);
            };
        TableHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table-header, [ml-table-header]',
                        template: "<tr class=\"header-row\">\n    <th\n            [hidden]=\"columnName === '_id'\"\n            *ngFor=\"let columnName of getData()\"\n            class=\"column\">\n        <button\n                (click)=\"sortItems(columnName)\"\n                class=\"table-order-button\"\n                title=\"Click to reorder\"\n        >{{data[columnName].title}}\n        </button>\n    </th>\n    <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
                    }] }
        ];
        /** @nocollapse */
        TableHeaderComponent.ctorParameters = function () {
            return [
                { type: TableDataService }
            ];
        };
        TableHeaderComponent.propDecorators = {
            data: [{ type: i0.Input }],
            isEditable: [{ type: i0.Input }]
        };
        return TableHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TableColumnComponent,
                            TableContainerComponent,
                            TableHeaderComponent,
                            TableRowComponent,
                            TableComponent
                        ],
                        imports: [
                            forms.FormsModule,
                            FormModule,
                            common.CommonModule
                        ],
                        exports: [
                            TableColumnComponent,
                            TableContainerComponent,
                            TableHeaderComponent,
                            TableRowComponent,
                            TableComponent
                        ],
                    },] }
        ];
        return TableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MessageComponent = /** @class */ (function () {
        function MessageComponent() {
            this.hasTimeOut = false;
            this.timeout = 1000;
            this.close = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        MessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.hasTimeOut) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.close.emit(true);
                    }), this.timeout);
                }
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
        /**
         * @return {?}
         */
        MessageComponent.prototype.onClose = /**
         * @return {?}
         */
            function () {
                this.close.emit(true);
            };
        MessageComponent.decorators = [
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        selector: 'ml-message',
                        template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">\n    <span ngClass=\"message-text\">{{message}}</span>\n    <button ngClass=\"message-close\" (click)=\"onClose()\">X</button>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        MessageComponent.ctorParameters = function () { return []; };
        MessageComponent.propDecorators = {
            message: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            hasTimeOut: [{ type: i0.Input }],
            timeout: [{ type: i0.Input }],
            close: [{ type: i0.Output }]
        };
        return MessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MessageModule = /** @class */ (function () {
        function MessageModule() {
        }
        MessageModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MessageComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [MessageComponent]
                    },] }
        ];
        return MessageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VirtualGridService = /** @class */ (function () {
        function VirtualGridService() {
            var _this = this;
            this.visible = false;
            this.$visible = new rxjs.Subject();
            window.onkeyup = ( /**
             * @param {?} e
             * @return {?}
             */function (e) {
                if (e.ctrlKey && e.code === 'KeyG') {
                    _this.visible = !_this.visible;
                    _this.$visible.next(_this.visible);
                }
            });
        }
        VirtualGridService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VirtualGridService.ctorParameters = function () { return []; };
        return VirtualGridService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VirtualGridComponent = /** @class */ (function () {
        function VirtualGridComponent(virtualGridService) {
            this.virtualGridService = virtualGridService;
            this.maxRows = 24;
            this.visible = false;
        }
        /**
         * @return {?}
         */
        VirtualGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.range = new Array(this.maxRows).fill(null);
                this.$visible = this.virtualGridService.$visible
                    .subscribe(( /**
             * @param {?} visible
             * @return {?}
             */function (visible) { return _this.visible = visible; }));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        VirtualGridComponent.prototype.toggle = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log(e);
            };
        /**
         * @return {?}
         */
        VirtualGridComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.$visible.unsubscribe();
            };
        VirtualGridComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-virtual-grid',
                        template: "<div [ngClass]=\"{\n'virtual-grid': true,\n'-visible': visible\n}\" (keyup)=\"toggle($event)\">\n  <div class=\"grid-container\">\n    <div class=\"grid\">\n      <span *ngFor=\"let i of range\"></span>\n    </div>\n  </div>\n</div>\n",
                        providers: [VirtualGridService],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        VirtualGridComponent.ctorParameters = function () {
            return [
                { type: VirtualGridService }
            ];
        };
        VirtualGridComponent.propDecorators = {
            maxRows: [{ type: i0.Input }]
        };
        return VirtualGridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MicroLayoutLibModule = /** @class */ (function () {
        function MicroLayoutLibModule() {
        }
        MicroLayoutLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ArrayToChunksPipe,
                            MicroLayoutLibComponent,
                            VirtualGridComponent
                        ],
                        imports: [
                            FormModule,
                            forms.FormsModule,
                            common.CommonModule,
                            ButtonsModule,
                            CardModule,
                            LinkModule,
                            ProgressModule,
                            TableModule,
                            ng2OrderPipe.Ng2OrderModule,
                            MessageModule
                        ],
                        exports: [
                            ButtonsModule,
                            CardModule,
                            LinkModule,
                            ProgressModule,
                            TableModule,
                            FormModule,
                            MessageModule,
                            VirtualGridComponent
                        ],
                        providers: [ArrayToChunksPipe, ng2OrderPipe.Ng2OrderPipe]
                    },] }
        ];
        return MicroLayoutLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MicroLayoutLibService = MicroLayoutLibService;
    exports.MicroLayoutLibComponent = MicroLayoutLibComponent;
    exports.MicroLayoutLibModule = MicroLayoutLibModule;
    exports.ɵl = ButtonComponent;
    exports.ɵk = ButtonsModule;
    exports.ɵr = CardContainerComponent;
    exports.ɵq = CardFooterComponent;
    exports.ɵp = CardHeaderComponent;
    exports.ɵm = CardModule;
    exports.ɵo = CardService;
    exports.ɵn = CardComponent;
    exports.ɵh = DropItemsComponent;
    exports.ɵf = DropComponent;
    exports.ɵg = DropService;
    exports.ɵd = FormModule;
    exports.ɵj = PartsComponent;
    exports.ɵi = SlugComponent;
    exports.ɵe = SwitchComponent;
    exports.ɵs = LinkModule;
    exports.ɵt = LinkComponent;
    exports.ɵbe = MessageModule;
    exports.ɵbf = MessageComponent;
    exports.ɵa = ArrayToChunksPipe;
    exports.ɵu = ProgressModule;
    exports.ɵv = ProgressComponent;
    exports.ɵx = TableColumnComponent;
    exports.ɵy = TableContainerComponent;
    exports.ɵba = TableDataService;
    exports.ɵz = TableHeaderComponent;
    exports.ɵbc = TableRowComponent;
    exports.ɵw = TableModule;
    exports.ɵbb = TableService;
    exports.ɵbd = TableComponent;
    exports.ɵb = VirtualGridComponent;
    exports.ɵc = VirtualGridService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=micro-layout-lib.umd.js.map