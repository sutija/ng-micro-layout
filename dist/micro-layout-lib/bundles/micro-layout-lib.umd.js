(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('rxjs'), require('@angular/animations'), require('@angular/platform-browser'), require('ng2-order-pipe'), require('@angular/forms'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('micro-layout-lib', ['exports', '@angular/router', 'rxjs', '@angular/animations', '@angular/platform-browser', 'ng2-order-pipe', '@angular/forms', '@angular/common', '@angular/core'], factory) :
    (factory((global['micro-layout-lib'] = {}),global.ng.router,global.rxjs,global.ng.animations,global.ng.platformBrowser,global.ng2OrderPipe,global.ng.forms,global.ng.common,global.ng.core));
}(this, (function (exports,router,rxjs,animations,platformBrowser,ng2OrderPipe,forms,common,i0) { 'use strict';

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
        }
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
                        template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content></ng-content>\n</button>\n"
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            disabled: [{ type: i0.Input }],
            types: [{ type: i0.Input }],
            type: [{ type: i0.Input }]
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
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            this.isColapsed = false;
        }
        /**
         * @return {?}
         */
        CardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-card, [ml-card]',
                        template: "<div ngClass=\"card\">\n  <ng-content select=\"ml-card-header, [ml-card-header]\"></ng-content>\n  <ng-content select=\"ml-card-container, [ml-card-container]\"></ng-content>\n  <ng-content select=\"ml-card-footer, [ml-card-footer]\"></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardComponent.ctorParameters = function () { return []; };
        return CardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardHeaderComponent = /** @class */ (function () {
        function CardHeaderComponent() {
        }
        /**
         * @return {?}
         */
        CardHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CardHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-card-header',
                        template: "<div ngClass=\"wrapper\">\n    <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardHeaderComponent.ctorParameters = function () { return []; };
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
        function CardContainerComponent() {
        }
        /**
         * @return {?}
         */
        CardContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CardContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-card-container',
                        template: "<div ngClass=\"wrapper\">\n    <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CardContainerComponent.ctorParameters = function () { return []; };
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
                this.router.navigateByUrl(this.target);
            };
        LinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-link',
                        template: "<button ngClass=\"link\" type=\"button\" (click)=\"onClick()\">{{title}}</button>\n",
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
            target: [{ type: i0.Input }]
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
                        template: "<progress></progress>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ProgressComponent.ctorParameters = function () { return []; };
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
    var MESSAGES = {
        ITEM_ADD: 'ITEM_ADD',
        ITEM_EDIT: 'ITEM_EDIT',
        ITEM_EDIT_STARTED: 'ITEM_EDIT_STARTED',
        ITEM_DELETE: 'ITEM_DELETE',
        ITEM_DELETE_CANCELED: 'ITEM_DELETE_CANCELED',
        SORT_CLICK: 'SORT_CLICK',
        MULTIPLE_DELETE: 'MULTIPLE_DELETE',
    };
    /** @type {?} */
    var CONTEXTS = {
        DEFAULT: 'DEFAUL',
    };
    /** @type {?} */
    var TABLE_COLUMN_TYPES = {
        STRING: 'STRING',
        NUMBER: 'NUMBER',
        TEXTAREA: 'TEXTAREA',
        SWITCH: 'SWITCH',
        DROP: 'DROP',
        COMPONENT: 'COMPONENT',
        DATE: 'DATE'
    };
    /** @type {?} */
    var DEFAULT_TABLE_OPTIONS = {
        canAddRows: false,
        canDelete: false,
        editOption: 'INTERNAL',
        isEditable: false,
        isReordable: false,
        isSortable: false,
        schema: {}
    };
    /** @type {?} */
    var PAGINATION = {
        PREVIOUS: 'PREVIOUS',
        NEXT: 'NEXT'
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
            this.clicked = new i0.EventEmitter();
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
        TableColumnComponent.prototype.onElementClick = /**
         * @return {?}
         */
            function () {
                this.clicked.emit(true);
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
                if (component && this.columnType === TABLE_COLUMN_TYPES.COMPONENT) {
                    this.componentRef =
                        this.columnComponent.createComponent(this.compiler.resolveComponentFactory(component.component));
                    // Set component params
                    component.componentParams.forEach(( /**
                     * @param {?} param
                     * @return {?}
                     */function (param) {
                        if (param.value instanceof Function) {
                            // Subscribe to event
                            _this.subscriptions$.push(_this.componentRef.instance[param.name]
                                .subscribe(( /**
                         * @param {?} e
                         * @return {?}
                         */function (e) {
                                param.value(e);
                            })));
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
                        template: "<div\n    id=\"{{data.id}}\"\n    *ngIf=\"data !== null && !isEditing && (columnType !== tableColumnTypes.COMPONENT)\"\n    ngClass=\"column\"\n>\n    <span (click)=\"onElementClick()\">{{data}}</span>\n</div>\n<div #columnComponent class=\"COMPONENT\"></div>\n<div\n        id=\"{{ data.id }}\"\n        [ngSwitch]=\"columnType\"\n        *ngIf=\"data !== null && isEditing && isEditable\"\n        class=\"Table__Column Form__Item\"\n>\n    <textarea *ngSwitchCase=\"tableColumnTypes.TEXTAREA\" [(ngModel)]=\"data\"></textarea>\n    <ml-switch *ngSwitchCase=\"tableColumnTypes.SWITCH\" [(ngModel)]=\"data\"></ml-switch>\n    <input *ngSwitchDefault type=\"text\" [(ngModel)]=\"data\"/>\n</div>\n<div class=\"Table__Column Table__Column--empty\" *ngIf=\"data === null && !isEditing\">/</div>\n"
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
            clicked: [{ type: i0.Output }],
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
            console.log(this.data);
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
                    return 'row ' + data._options._backgroundColor;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableFooterComponent = /** @class */ (function () {
        function TableFooterComponent() {
        }
        /**
         * @return {?}
         */
        TableFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TableFooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table-footer',
                        template: "<p>\n  table-footer works!\n</p>\n"
                    }] }
        ];
        /** @nocollapse */
        TableFooterComponent.ctorParameters = function () { return []; };
        return TableFooterComponent;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InfoService = /** @class */ (function () {
        function InfoService() {
            this.message = new i0.EventEmitter();
            this.messageTypes = {
                info: 'info',
                error: 'error',
                warning: 'warning',
                success: 'success'
            };
        }
        /**
         * @param {?} message
         * @return {?}
         */
        InfoService.prototype.notify = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.message.emit(message);
            };
        InfoService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        InfoService.ctorParameters = function () { return []; };
        return InfoService;
    }());
    /** @type {?} */
    var MessageResolver = ( /**
     * @param {?} callbacks
     * @param {?} message
     * @return {?}
     */function (callbacks, message) {
        callbacks.filter(( /**
         * @param {?} callback
         * @return {?}
         */function (callback) {
            return callback.type === message.type &&
                callback.message === message.message;
        })).every(( /**
     * @param {?} item
     * @return {?}
     */function (item) { return item.callback(message.data); }));
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableMessagingService = /** @class */ (function (_super) {
        __extends(TableMessagingService, _super);
        function TableMessagingService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TableMessagingService.decorators = [
            { type: i0.Injectable }
        ];
        return TableMessagingService;
    }(InfoService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableHeaderComponent = /** @class */ (function () {
        function TableHeaderComponent(tableMessagingService) {
            this.tableMessagingService = tableMessagingService;
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
                this.tableMessagingService.notify({
                    data: {
                        sort_by: label
                    },
                    message: MESSAGES.SORT_CLICK,
                    type: CONTEXTS.DEFAULT
                });
            };
        TableHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table-header, [ml-table-header]',
                        template: "<tr ngClass=\"header-row\">\n  <th\n          [hidden]=\"columnName === '_id'\"\n          *ngFor=\"let columnName of getData(); let i = index;\" ngClass=\"column\">\n    <button\n            (click)=\"sortItems(columnName)\"\n            class=\"Table__OrderButton\"\n            title=\"Click to reorder\"\n    >{{data[columnName].title}}\n    </button>\n  </th>\n  <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
                    }] }
        ];
        /** @nocollapse */
        TableHeaderComponent.ctorParameters = function () {
            return [
                { type: TableMessagingService }
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
    /**
     * \@todo Create
     */
    var TableDataService = /** @class */ (function () {
        function TableDataService(tableMessagingService, arrayToChunksPipe, ng2OrderPipe$$1) {
            var _this = this;
            this.tableMessagingService = tableMessagingService;
            this.arrayToChunksPipe = arrayToChunksPipe;
            this.ng2OrderPipe = ng2OrderPipe$$1;
            this.dataChange = new rxjs.Subject();
            this.elementSelected$ = new rxjs.Subject();
            this.tableData = new rxjs.Subject();
            this.tableId = 'table';
            this.callbacks = [
                {
                    type: CONTEXTS.DEFAULT,
                    message: MESSAGES.ITEM_EDIT_STARTED,
                    callback: ( /**
                     * @return {?}
                     */function () {
                        console.log('item edit started');
                    })
                },
                // On sort
                {
                    type: CONTEXTS.DEFAULT,
                    message: MESSAGES.SORT_CLICK,
                    callback: ( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.reorder(data.sort_by);
                    })
                },
                // On edit
                {
                    type: CONTEXTS.DEFAULT,
                    message: MESSAGES.ITEM_EDIT,
                    callback: ( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) { return _this.itemEdit(data); })
                },
                // On add
                {
                    type: CONTEXTS.DEFAULT,
                    message: MESSAGES.ITEM_ADD,
                    callback: null
                },
                // On delete
                {
                    type: CONTEXTS.DEFAULT,
                    message: MESSAGES.ITEM_DELETE,
                    callback: ( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        if (confirm("Delete " + data.id + "?")) {
                            _this.itemDelete(data.id);
                        }
                    })
                },
            ];
            this.orderDir = false;
            this.limit = null;
            this.pageNumber = 0;
            this.limit = 100;
            this.tableMessagingService
                .message
                .subscribe(( /**
         * @param {?} message
         * @return {?}
         */function (message) {
                return MessageResolver(_this.callbacks, message);
            }));
        }
        /**
         * @param {?} tableId
         * @return {?}
         */
        TableDataService.prototype.setTableId = /**
         * @param {?} tableId
         * @return {?}
         */
            function (tableId) {
                console.log('table id', tableId);
                return this.tableId;
            };
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
                this.data = null;
                this.data = this.arrayToChunksPipe
                    .transform(this.setColumns(this.schema, this._data), this._getLimit());
                this.changeData();
            };
        /**
         * @return {?}
         */
        TableDataService.prototype.getLimit = /**
         * @return {?}
         */
            function () {
                return this.limit;
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
         * @return {?}
         */
        TableDataService.prototype.getRows = /**
         * @return {?}
         */
            function () {
                return this.data;
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
                this._data = data;
                this.data = this.arrayToChunksPipe.transform(this.setColumns(schema, this._data), this._getLimit());
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
         * @return {?}
         */
        TableDataService.prototype.getNumberOfPages = /**
         * @return {?}
         */
            function () {
                return this.data.length;
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
                this._tableData = {
                    currentPage: this.pageNumber,
                    data: data,
                    header: this.schema,
                    numberOfPages: this.data.length,
                };
                console.log('table id', this.tableId);
                this.tableData.next(this._tableData);
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
                    return this._data.length;
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
         * @protected
         * @param {?} data
         * @return {?}
         */
        TableDataService.prototype.itemEdit = /**
         * @protected
         * @param {?} data
         * @return {?}
         */
            function (data) {
                this.data = this.data.map(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (item['_id'] === data.row._id) {
                        return data.row;
                    }
                    return item;
                }));
                this.dataChange.next({
                    type: 'edit',
                    data: data.row
                });
            };
        /**
         * @protected
         * @param {?} id
         * @return {?}
         */
        TableDataService.prototype.itemDelete = /**
         * @protected
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.dataChange.next({
                    type: 'delete',
                    data: id
                });
            };
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */
        TableDataService.prototype.resolveItemPagePosition = /**
         * @protected
         * @param {?} item
         * @return {?}
         */
            function (item) {
            };
        /**
         * @protected
         * @param {?} orderBy
         * @return {?}
         */
        TableDataService.prototype.reorder = /**
         * @protected
         * @param {?} orderBy
         * @return {?}
         */
            function (orderBy) {
                if (this.orderBy === orderBy) {
                    this.orderDir = !this.orderDir;
                }
                else {
                    this.orderBy = orderBy;
                }
                this.pageNumber = 0;
                this.data = null;
                this.data = this.arrayToChunksPipe
                    .transform(this.setColumns(this.schema, this.ng2OrderPipe
                    .transform(this._data, this.orderBy, this.orderDir)), this._getLimit());
                this.changeData();
            };
        TableDataService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        TableDataService.ctorParameters = function () {
            return [
                { type: TableMessagingService },
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
        function TableRowComponent(tableMessagingService, tableDataService) {
            this.tableMessagingService = tableMessagingService;
            this.tableDataService = tableDataService;
            this.isEditable = false;
            this.isEditing = false;
            this.deleteActivated = false;
            this.select = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        TableRowComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                /**
                 * Clone global data to local data
                 */
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
         * @param {?} key
         * @return {?}
         */
        TableRowComponent.prototype.getDataByKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.data[key];
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
                if (this.isEditing) {
                    this.tableMessagingService.notify({
                        type: CONTEXTS.DEFAULT,
                        message: MESSAGES.ITEM_EDIT_STARTED
                    });
                }
            };
        /**
         * @return {?}
         */
        TableRowComponent.prototype.save = /**
         * @return {?}
         */
            function () {
                this.isEditing = false;
                this.tableMessagingService.notify({
                    type: CONTEXTS.DEFAULT,
                    message: MESSAGES.ITEM_EDIT,
                    data: {
                        row: this._data
                    }
                });
            };
        /**
         * @return {?}
         */
        TableRowComponent.prototype.delete = /**
         * @return {?}
         */
            function () {
                this.deleteActivated = !this.deleteActivated;
                this.tableMessagingService.notify({
                    type: CONTEXTS.DEFAULT,
                    message: MESSAGES.ITEM_DELETE,
                    data: this._data
                });
            };
        TableRowComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-table-row, [ml-table-row]',
                        template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (onClick)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable\">\n  <button\n          class=\"Button Button--small Button--primary\"\n          (click)=\"edit()\"\n          *ngIf=\"!isEditing\"\n  >Edit</button>\n  <button class=\"Button Button--small\" (click)=\"delete()\" *ngIf=\"!isEditing\">Delete</button>\n  <button class=\"Button Button--small Button--primary\" (click)=\"save()\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"Button Button--small\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
                    }] }
        ];
        /** @nocollapse */
        TableRowComponent.ctorParameters = function () {
            return [
                { type: TableMessagingService },
                { type: TableDataService }
            ];
        };
        TableRowComponent.propDecorators = {
            data: [{ type: i0.Input }],
            isEditable: [{ type: i0.Input }],
            isEditing: [{ type: i0.Input }],
            deleteActivated: [{ type: i0.Input }],
            select: [{ type: i0.Output }]
        };
        return TableRowComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableService = /** @class */ (function () {
        function TableService() {
            this._tableOptions = {};
        }
        /**
         * @param {?} tableID
         * @param {?} tableOptions
         * @return {?}
         */
        TableService.prototype.setTableOptions = /**
         * @param {?} tableID
         * @param {?} tableOptions
         * @return {?}
         */
            function (tableID, tableOptions) {
                this._tableOptions[tableID] = Object.assign({}, tableOptions);
            };
        /**
         * @return {?}
         */
        TableService.prototype.getTableOptions = /**
         * @return {?}
         */
            function () {
                return rxjs.of(this._tableOptions);
            };
        TableService.decorators = [
            { type: i0.Injectable }
        ];
        return TableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent(tableDataService, tableService, el) {
            this.tableDataService = tableDataService;
            this.tableService = tableService;
            this.el = el;
            this.tableID = 'default';
            // Only if we have external page handler
            this.update = new i0.EventEmitter();
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
                this.tableDataService.setTableId(this.tableID);
                if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
                    this.tableDataService.setLimit(this.tableLimit);
                }
                // On data update
                this.dataChange$ = this.tableDataService.dataChange.subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    // Emit new data
                    if (data.type === 'edit') {
                        _this.update.emit(data.data);
                    }
                    if (data.type === 'delete') {
                        _this.delete.emit(data.data);
                    }
                }));
                // On new data
                this.getData$ = this.tableDataService
                    .getData()
                    .subscribe({
                    next: ( /**
                     * @param {?} newData
                     * @return {?}
                     */function (newData) {
                        _this.header = newData.header;
                        _this.container = newData.data;
                        if (_this.tableOptions.isInternalPagination) {
                            _this.numOfPages = newData.numberOfPages;
                            _this.currentPage = newData.currentPage;
                        }
                    })
                });
                if (!this.tableOptions.isInternalPagination) {
                    this.currentPage = 0;
                }
                this.tableDataService.setData(this.data, this.tableOptions.schema);
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
                    this.tableService.setTableOptions(this.tableID, this.tableOptions);
                    this.tableOptions = Object.assign({}, DEFAULT_TABLE_OPTIONS, this.tableOptions);
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
                    console.log('table limit', changes.tableLimit);
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
                this.tableLimit = numOfItems;
                this.tableDataService.setLimit(this.tableLimit);
                this.numberOfItemsChange.emit(numOfItems);
            };
        /**
         * @return {?}
         */
        TableComponent.prototype.onNextPage = /**
         * @return {?}
         */
            function () {
                if (this.tableOptions.isInternalPagination) {
                    /** @type {?} */
                    var newPage = this.currentPage + 1;
                    this.tableDataService.goToPage(newPage);
                }
                else {
                    this.pageChange.emit({
                        direction: PAGINATION.NEXT,
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
                    /** @type {?} */
                    var newPage = this.currentPage - 1;
                    this.tableDataService.goToPage(newPage);
                }
                else {
                    this.pageChange.emit({
                        direction: PAGINATION.PREVIOUS,
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
                        template: "<div ngClass=\"wrapper\">\n  <table\n          [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n  >\n    <thead ml-table-header [data]=\"header\" ngClass=\"header\" [isEditable]=\"tableOptions.isEditable\"></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isReordable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody ml-table-container *ngIf=\"!tableOptions.isReordable\" [isEditable]=\"tableOptions.isEditable\" [data]=\"container\" class=\"Table__Container\"></tbody>\n  </table>\n</div>\n<div ngClass=\"table-navigation\">\n  <button [disabled]=\"isLoading\" ngClass=\"button\" (click)=\"onPreviousPage()\" *ngIf=\"currentPage > 0\">Previous page</button>\n  <span ngClass=\"page-information\">{{ getCurrentPage() }} / {{ numOfPages }}</span>\n  <button [disabled]=\"isLoading\" ngClass=\"button\" (click)=\"onNextPage()\" *ngIf=\"currentPage < numOfPages - 1\">Next page</button>\n</div>\n<div *ngIf=\"tableOptions.canChangeNumberOfItems\">\n  <div class=\"form-Item\">\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n      <option value=\"50\">50</option>\n      <option value=\"100\">100</option>\n      <option value=\"200\">200</option>\n    </select>\n  </div>\n</div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [TableDataService, TableService, TableMessagingService]
                    }] }
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () {
            return [
                { type: TableDataService },
                { type: TableService },
                { type: i0.ElementRef }
            ];
        };
        TableComponent.propDecorators = {
            tableID: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            tableOptions: [{ type: i0.Input }],
            tableLimit: [{ type: i0.Input }],
            numberOfPages: [{ type: i0.Input }],
            pageNumber: [{ type: i0.Input }],
            update: [{ type: i0.Output }],
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
                        template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n"
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
    var AliasComponent = /** @class */ (function (_super) {
        __extends(AliasComponent, _super);
        function AliasComponent() {
            return _super.call(this) || this;
        }
        /**
         * @return {?}
         */
        AliasComponent.prototype.update = /**
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
        AliasComponent.prototype.writeValue = /**
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
        AliasComponent.prototype.registerOnChange = /**
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
        AliasComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouch = fn;
            };
        AliasComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-alias',
                        template: "<input type=\"text\" #element (keyup)=\"update()\" (focus)=\"onTouch(true)\" [value]=\"value\" />\n",
                        providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: AliasComponent, multi: true }]
                    }] }
        ];
        /** @nocollapse */
        AliasComponent.ctorParameters = function () { return []; };
        AliasComponent.propDecorators = {
            value: [{ type: i0.Input }],
            element: [{ type: i0.ViewChild, args: ['element',] }]
        };
        return AliasComponent;
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
                            AliasComponent,
                            PartsComponent
                        ],
                        imports: [
                            ButtonsModule,
                            common.CommonModule,
                            forms.FormsModule,
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            AliasComponent,
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
    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TableColumnComponent,
                            TableContainerComponent,
                            TableFooterComponent,
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
                            TableFooterComponent,
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
        }
        /**
         * @return {?}
         */
        MessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
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
        MessageComponent.decorators = [
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        selector: 'ml-message',
                        template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">{{message}}</div>\n"
                    }] }
        ];
        /** @nocollapse */
        MessageComponent.ctorParameters = function () { return []; };
        MessageComponent.propDecorators = {
            message: [{ type: i0.Input }],
            type: [{ type: i0.Input }]
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
    var MicroLayoutLibModule = /** @class */ (function () {
        function MicroLayoutLibModule() {
        }
        MicroLayoutLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ArrayToChunksPipe,
                            MicroLayoutLibComponent
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
                            MessageModule
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
    exports.ɵj = ButtonComponent;
    exports.ɵi = ButtonsModule;
    exports.ɵo = CardContainerComponent;
    exports.ɵn = CardFooterComponent;
    exports.ɵm = CardHeaderComponent;
    exports.ɵk = CardModule;
    exports.ɵl = CardComponent;
    exports.ɵg = AliasComponent;
    exports.ɵf = DropItemsComponent;
    exports.ɵd = DropComponent;
    exports.ɵe = DropService;
    exports.ɵb = FormModule;
    exports.ɵh = PartsComponent;
    exports.ɵc = SwitchComponent;
    exports.ɵp = LinkModule;
    exports.ɵq = LinkComponent;
    exports.ɵbe = MessageModule;
    exports.ɵbf = MessageComponent;
    exports.ɵa = ArrayToChunksPipe;
    exports.ɵr = ProgressModule;
    exports.ɵs = ProgressComponent;
    exports.ɵz = InfoService;
    exports.ɵu = TableColumnComponent;
    exports.ɵv = TableContainerComponent;
    exports.ɵbb = TableDataService;
    exports.ɵw = TableFooterComponent;
    exports.ɵx = TableHeaderComponent;
    exports.ɵy = TableMessagingService;
    exports.ɵba = TableRowComponent;
    exports.ɵt = TableModule;
    exports.ɵbd = TableService;
    exports.ɵbc = TableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=micro-layout-lib.umd.js.map