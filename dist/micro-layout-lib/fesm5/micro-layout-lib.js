import { Router } from '@angular/router';
import { state, style, trigger } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { __extends, __awaiter, __generator } from 'tslib';
import { Ng2OrderPipe, Ng2OrderModule } from 'ng2-order-pipe';
import { FormControl, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Injectable, Component, Input, NgModule, EventEmitter, HostListener, Output, ChangeDetectionStrategy, ComponentFactoryResolver, ViewChild, ViewContainerRef, Pipe, defineInjectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MicroLayoutLibService = /** @class */ (function () {
    function MicroLayoutLibService() {
    }
    MicroLayoutLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MicroLayoutLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MicroLayoutLibService.ngInjectableDef = defineInjectable({ factory: function MicroLayoutLibService_Factory() { return new MicroLayoutLibService(); }, token: MicroLayoutLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        this.clicked = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ml-button',
                    template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content *ngIf=\"!title\"></ng-content>\n    {{ title ? title : null }}\n</button>\n"
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        disabled: [{ type: Input }],
        types: [{ type: Input }],
        type: [{ type: Input }],
        title: [{ type: Input }],
        clicked: [{ type: Output }],
        emitClick: [{ type: HostListener, args: ['click',] }]
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
        { type: NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [
                        BrowserModule,
                        CommonModule
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
        this.isCollapsed$ = new Subject();
        this.canCollapse$ = new Subject();
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
        { type: Injectable }
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
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        function (isCollapsed) { return _this.isCollapsed = isCollapsed; })));
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.unsubscribe(); }));
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-card, [ml-card]',
                    template: "<div [ngClass]=\"{\n'card': true,\n'card-collapsed': isCollapsed\n}\">\n  <ng-content select=\"ml-card-header, [ml-card-header]\"></ng-content>\n  <ng-content select=\"ml-card-container, [ml-card-container]\"></ng-content>\n  <ng-content select=\"ml-card-footer, [ml-card-footer]\"></ng-content>\n</div>\n",
                    providers: [CardService]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return [
        { type: CardService }
    ]; };
    CardComponent.propDecorators = {
        isCollapsed: [{ type: Input }],
        canCollapse: [{ type: Input }]
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
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        function (isCollapsed) { return _this.isCollapsed = isCollapsed; })));
        this.subscriptions$.push(this.cardService.canCollapse$
            .subscribe((/**
         * @param {?} canCollapse
         * @return {?}
         */
        function (canCollapse) { return _this.canCollapse = canCollapse; })));
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
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.unsubscribe(); }));
    };
    CardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-card-header',
                    template: "<div ngClass=\"wrapper\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"canCollapse\" [ngClass]=\"{'toggle-collapse': true, 'collapsed': isCollapsed}\" (click)=\"toggleCollapse()\">{{ isCollapsed ? '+' : '-'}}</div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardHeaderComponent.ctorParameters = function () { return [
        { type: CardService }
    ]; };
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
        { type: Component, args: [{
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
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        function (isCollapsed) { return _this.isCollapsed = isCollapsed; })));
    };
    /**
     * @return {?}
     */
    CardContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.unsubscribe(); }));
    };
    CardContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-card-container',
                    template: "<div [ngClass]=\"{'wrapper': true, 'collapsed': isCollapsed}\">\n    <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardContainerComponent.ctorParameters = function () { return [
        { type: CardService }
    ]; };
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
        { type: NgModule, args: [{
                    declarations: [CardComponent, CardHeaderComponent, CardFooterComponent, CardContainerComponent],
                    imports: [
                        CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LinkModule = /** @class */ (function () {
    function LinkModule() {
    }
    LinkModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LinkComponent],
                    imports: [
                        CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressModule = /** @class */ (function () {
    function ProgressModule() {
    }
    ProgressModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ProgressComponent],
                    imports: [
                        CommonModule
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
        this.dataChange = new EventEmitter();
        this.isEditing = false;
        this.isEditable = true;
        this.tableColumnTypes = TABLE_COLUMN_TYPES;
    }
    Object.defineProperty(TableColumnComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataValue;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
            this.dataValue.forEach((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
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
            component.componentParams.forEach((/**
             * @param {?} param
             * @return {?}
             */
            function (param) {
                if (param.value instanceof Function) {
                    if (_this.componentRef.instance[param.name]) {
                        // Subscribe to event
                        _this.subscriptions$.push(_this.componentRef.instance[param.name]
                            .subscribe((/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) {
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
        this.subscriptions$.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) {
            return subscription.unsubscribe();
        }));
    };
    TableColumnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ml-table-column, [ml-table-column]',
                    template: "<div\n    *ngIf=\"data !== null && !isEditing && (columnType !== tableColumnTypes.component)\"\n    class=\"column\"\n>\n    <span>{{data}}</span>\n</div>\n<div #columnComponent class=\"component\"></div>\n<div\n        [ngSwitch]=\"columnType\"\n        *ngIf=\"data !== null && isEditing && isEditable\"\n        class=\"column table-form-element\"\n>\n    <textarea *ngSwitchCase=\"tableColumnTypes.textarea\" [(ngModel)]=\"data\"></textarea>\n    <ml-switch *ngSwitchCase=\"tableColumnTypes.switch\" [(ngModel)]=\"data\"></ml-switch>\n    <input *ngSwitchDefault type=\"text\" [(ngModel)]=\"data\"/>\n</div>\n<div class=\"column column-empty\" *ngIf=\"data === null && !isEditing\">/</div>\n"
                }] }
    ];
    /** @nocollapse */
    TableColumnComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    TableColumnComponent.propDecorators = {
        data: [{ type: Input }],
        dataChange: [{ type: Output }],
        isEditing: [{ type: Input }],
        isEditable: [{ type: Input }],
        columnType: [{ type: Input }],
        columnComponent: [{ type: ViewChild, args: ['columnComponent', { read: ViewContainerRef },] }]
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
        { type: Component, args: [{
                    selector: 'ml-table-container, [ml-table-container]',
                    template: "<tr\n        ml-table-row\n        [ngClass]=\"getClass(row)\"\n        *ngFor=\"let row of data\"\n        [data]=\"row\"\n        [isEditable]=\"isEditable\"></tr>\n"
                }] }
    ];
    /** @nocollapse */
    TableContainerComponent.ctorParameters = function () { return []; };
    TableContainerComponent.propDecorators = {
        data: [{ type: Input }],
        isEditable: [{ type: Input }]
    };
    return TableContainerComponent;
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
        return array.map((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        function (e, i) {
            if (i % numberOfItems === 0) {
                return array.slice(i, i + numberOfItems);
            }
            else {
                return null;
            }
        })).filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item; }));
    };
    ArrayToChunksPipe.decorators = [
        { type: Pipe, args: [{
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
        { type: Injectable }
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
    function TableDataService(tableService, arrayToChunksPipe, ng2OrderPipe) {
        this.tableService = tableService;
        this.arrayToChunksPipe = arrayToChunksPipe;
        this.ng2OrderPipe = ng2OrderPipe;
        this.dataChange$ = new Subject();
        this.elementSelected$ = new Subject();
        this.tableData = new Subject();
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
            this.internalData = data.map((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) {
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
        rows.forEach((/**
         * @param {?} oldRow
         * @return {?}
         */
        function (oldRow) {
            /** @type {?} */
            var existingColumns = Object.keys(oldRow);
            fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !existingColumns
                .includes(item); }))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return oldRow[item] = schema[item].defaultValue; }));
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
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
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
                    .findIndex((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item._id === id; }));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    TableDataService.ctorParameters = function () { return [
        { type: TableService },
        { type: ArrayToChunksPipe },
        { type: Ng2OrderPipe }
    ]; };
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
        this.select = new EventEmitter();
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
                        if (!(type === 'add')) return [3 /*break*/, 2];
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
        { type: Component, args: [{
                    selector: 'ml-table-row, [ml-table-row]',
                    template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (click)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable && !isEditing\">\n  <button\n          class=\"table-button\"\n          (click)=\"edit()\"\n  >Edit</button>\n  <button class=\"table-button\" (click)=\"delete()\">Delete</button>\n</td>\n<td *ngIf=\"isEditing\">\n  <button class=\"table-button\" (click)=\"save('edit')\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"table-button\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
                }] }
    ];
    /** @nocollapse */
    TableRowComponent.ctorParameters = function () { return [
        { type: TableDataService }
    ]; };
    TableRowComponent.propDecorators = {
        data: [{ type: Input }],
        isEditable: [{ type: Input }],
        isEditing: [{ type: Input }],
        select: [{ type: Output }]
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
        this.add = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.pageChange = new EventEmitter();
        this.numberOfItemsChange = new EventEmitter();
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
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this[data.type].emit(data.data);
        }));
        // On new data
        this.getData$ = this.tableDataService
            .getData()
            .subscribe((/**
         * @param {?} newData
         * @return {?}
         */
        function (newData) {
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
        { type: Component, args: [{
                    selector: 'ml-table, [ml-table]',
                    template: "<table\n        [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n>\n    <thead\n            ml-table-header\n            [data]=\"header\"\n            class=\"header\"\n            [isEditable]=\"tableOptions.isEditable\"\n    ></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isDraggable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody\n            ml-table-container\n            class=\"table-container\"\n            *ngIf=\"!tableOptions.isDraggable\"\n            [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n    ></tbody>\n</table>\n<div class=\"table-navigation\">\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onPreviousPage()\"\n            *ngIf=\"currentPage > 0\"\n    >\n        Previous page\n    </button>\n    <span class=\"page-information\">\n        {{ getCurrentPage() }} / {{ numOfPages }}\n    </span>\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onNextPage()\"\n            *ngIf=\"currentPage < numOfPages - 1\"\n    >\n        Next page\n    </button>\n</div>\n<div\n        class=\"number-of-items\"\n        *ngIf=\"tableOptions.canChangeNumberOfItems\"\n>\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n        <option\n                *ngFor=\"let value of tableOptions.numberOfItems\"\n                [value]=\"value\"\n        >{{value}}</option>\n    </select>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [TableDataService, TableService, ArrayToChunksPipe, Ng2OrderPipe]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: TableDataService },
        { type: TableService }
    ]; };
    TableComponent.propDecorators = {
        tableID: [{ type: Input }],
        data: [{ type: Input }],
        tableOptions: [{ type: Input }],
        tableLimit: [{ type: Input }],
        numberOfPages: [{ type: Input }],
        pageNumber: [{ type: Input }],
        add: [{ type: Output }],
        edit: [{ type: Output }],
        delete: [{ type: Output }],
        pageChange: [{ type: Output }],
        numberOfItemsChange: [{ type: Output }],
        isLoading: [{ type: Input }]
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
        _this.change = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ml-switch',
                    template: "<div [ngClass]=\"{'switch-on': value, 'switch': true}\">\n  <div ngClass=\"switch-container\" (click)=\"toggleOnOff()\">\n    <div ngClass=\"button\"></div>\n  </div>\n</div>\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SwitchComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    SwitchComponent.ctorParameters = function () { return []; };
    SwitchComponent.propDecorators = {
        change: [{ type: Output }],
        value: [{ type: Input }]
    };
    return SwitchComponent;
}(FormControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropService = /** @class */ (function () {
    function DropService() {
        this.items = [];
        this.disabledIds = [];
        this.selectedItem$ = new Subject();
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
        return this.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.parentId === id; }));
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
        return this.items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === id; }));
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
            return this.items.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.title.toLowerCase().search(title.toLowerCase()) >= 0; }));
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
        return this.items.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            if (prev && prev[prev.length - 1].parentId
                === curr.id) {
                prev.push(curr);
            }
            return prev;
        }), [item]).reverse();
    };
    DropService.decorators = [
        { type: Injectable }
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
        _this.update = new EventEmitter();
        _this.delete = new EventEmitter();
        _this.add = new EventEmitter();
        _this.select = new EventEmitter();
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
        this.dropService.selectedItem$.subscribe((/**
         * @param {?} selectedItem
         * @return {?}
         */
        function (selectedItem) { return _this.selectItem(selectedItem); }));
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
        { type: Component, args: [{
                    animations: [
                        trigger('toggle', [
                            state('visible', style({
                                height: '*'
                            })),
                            state('hidden', style({
                                height: 0
                            }))
                        ])
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'ml-drop',
                    template: "<div ngClass=\"search-and-selected\">\n  <div *ngIf=\"!searchActive\" (click)=\"activateSearch()\" ngClass=\"selected\">\n    <span *ngFor=\"let pathItem of path\">{{pathItem.title}}</span>\n  </div>\n  <input *ngIf=\"searchActive\"\n         type=\"text\"\n         [(ngModel)]=\"searchText\"\n         (keyup)=\"onKeyUp($event)\"\n         [autofocus]=\"searchActive\"\n         ngClass=\"search-field\"\n         placeholder=\"search...\"\n  />\n  <ml-button\n          (click)=\"dropToggle($event)\"\n          type=\"button\" ngClass=\"drop-button\"\n          *ngIf=\"!searchActive\"\n          [types]=\"dropButtonStyles\"\n  >\n    <svg ngClass=\"toggle-image {{dropVisible ? '-active' : null}}\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"16\" viewBox=\"0 0 32 16\">\n      <polygon id=\"toggle-icon\" points=\"16 8.95 7.06 0 0 0 16 16 32 0 24.95 0 16 8.95\" style=\"fill:#231f20\"/></svg>\n  </ml-button>\n</div>\n<div *ngIf=\"searchActive\" ngClass=\"results\">\n  <ul>\n    <li *ngFor=\"let item of foundItems\" ngClass=\"result-item\" (click)=\"selectItem(item)\">{{item.title}}</li>\n  </ul>\n</div>\n<div *ngIf=\"dropVisible\" ngClass=\"drop-list\">\n  <ml-drop-items [parentId]=\"0\" [isOpened]=\"true\"></ml-drop-items>\n</div>\n",
                    providers: [
                        DropService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: DropComponent,
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    DropComponent.ctorParameters = function () { return [
        { type: DropService }
    ]; };
    DropComponent.propDecorators = {
        disabledIds: [{ type: Input }],
        items: [{ type: Input }],
        value: [{ type: Input }],
        editable: [{ type: Input }],
        update: [{ type: Output }],
        delete: [{ type: Output }],
        add: [{ type: Output }],
        select: [{ type: Output }]
    };
    return DropComponent;
}(FormControl));

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
        this.childrenVisible = this.dropService.getItemsByParentId(this.parentId).map((/**
         * @return {?}
         */
        function () { return false; }));
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
        { type: Component, args: [{
                    selector: 'ml-drop-items, [ml-drop-items]',
                    template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n",
                    providers: []
                }] }
    ];
    /** @nocollapse */
    DropItemsComponent.ctorParameters = function () { return [
        { type: DropService }
    ]; };
    DropItemsComponent.propDecorators = {
        parentId: [{ type: Input }],
        isOpened: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'ml-slug',
                    template: "<input type=\"text\" #element (keyup)=\"update()\" [value]=\"value\" />\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SlugComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    SlugComponent.ctorParameters = function () { return []; };
    SlugComponent.propDecorators = {
        value: [{ type: Input }],
        element: [{ type: ViewChild, args: ['element',] }]
    };
    return SlugComponent;
}(FormControl));

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
        { type: Component, args: [{
                    selector: 'ml-parts',
                    template: "<div ngClass=\"parts-input\">\n  <input (keyup)=\"onKeyUp($event)\" #element />\n  <ml-button (click)=\"addPart()\" type=\"button\" [types]=\"addButtonClass\">add</ml-button>\n</div>\n<div ngClass=\"parts\">\n  <ul>\n    <li *ngFor=\"let item of parts; let i = index;\">\n      <span>{{item}}</span>\n      <ml-button (click)=\"removePart(i)\" type=\"button\" [types]=\"removeButtonClass\">X</ml-button>\n    </li>\n  </ul>\n</div>\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: PartsComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    PartsComponent.ctorParameters = function () { return []; };
    PartsComponent.propDecorators = {
        value: [{ type: Input }],
        element: [{ type: ViewChild, args: ['element',] }]
    };
    return PartsComponent;
}(FormControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SwitchComponent,
                        DropComponent,
                        DropItemsComponent,
                        SlugComponent,
                        PartsComponent
                    ],
                    imports: [
                        ButtonsModule,
                        CommonModule,
                        FormsModule,
                        BrowserModule
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
        { type: Component, args: [{
                    selector: 'ml-table-header, [ml-table-header]',
                    template: "<tr class=\"header-row\">\n    <th\n            [hidden]=\"columnName === '_id'\"\n            *ngFor=\"let columnName of getData()\"\n            class=\"column\">\n        <button\n                (click)=\"sortItems(columnName)\"\n                class=\"table-order-button\"\n                title=\"Click to reorder\"\n        >{{data[columnName].title}}\n        </button>\n    </th>\n    <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
                }] }
    ];
    /** @nocollapse */
    TableHeaderComponent.ctorParameters = function () { return [
        { type: TableDataService }
    ]; };
    TableHeaderComponent.propDecorators = {
        data: [{ type: Input }],
        isEditable: [{ type: Input }]
    };
    return TableHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ArrayToChunksPipe
                    ],
                    exports: [
                        ArrayToChunksPipe
                    ]
                },] }
    ];
    return PipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TableColumnComponent,
                        TableContainerComponent,
                        TableHeaderComponent,
                        TableRowComponent,
                        TableComponent
                    ],
                    imports: [
                        FormsModule,
                        FormModule,
                        CommonModule,
                        PipesModule
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
        this.close = new EventEmitter();
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
            setTimeout((/**
             * @return {?}
             */
            function () {
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
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'ml-message',
                    template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">\n    <span ngClass=\"message-text\">{{message}}</span>\n    <button ngClass=\"message-close\" (click)=\"onClose()\">X</button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return []; };
    MessageComponent.propDecorators = {
        message: [{ type: Input }],
        type: [{ type: Input }],
        hasTimeOut: [{ type: Input }],
        timeout: [{ type: Input }],
        close: [{ type: Output }]
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
        { type: NgModule, args: [{
                    declarations: [MessageComponent],
                    imports: [
                        CommonModule
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
        this.$visible = new Subject();
        window.onkeyup = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.ctrlKey && e.code === 'KeyG') {
                _this.visible = !_this.visible;
                _this.$visible.next(_this.visible);
            }
        });
    }
    VirtualGridService.decorators = [
        { type: Injectable }
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
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) { return _this.visible = visible; }));
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
        { type: Component, args: [{
                    selector: 'ml-virtual-grid',
                    template: "<div [ngClass]=\"{\n'virtual-grid': true,\n'-visible': visible\n}\" (keyup)=\"toggle($event)\">\n  <div class=\"grid-container\">\n    <div class=\"grid\">\n      <span *ngFor=\"let i of range\"></span>\n    </div>\n  </div>\n</div>\n",
                    providers: [VirtualGridService],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    VirtualGridComponent.ctorParameters = function () { return [
        { type: VirtualGridService }
    ]; };
    VirtualGridComponent.propDecorators = {
        maxRows: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [
                        MicroLayoutLibComponent,
                        VirtualGridComponent
                    ],
                    imports: [
                        FormModule,
                        FormsModule,
                        CommonModule,
                        ButtonsModule,
                        CardModule,
                        LinkModule,
                        ProgressModule,
                        TableModule,
                        Ng2OrderModule,
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
                    providers: [Ng2OrderPipe]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MicroLayoutLibService, MicroLayoutLibComponent, MicroLayoutLibModule, TableModule, TABLE_COLUMN_TYPES, DEFAULT_TABLE_OPTIONS, PAGINATION, TableService, TableDataService, ButtonsModule, CardModule, FormModule, MessageModule, ArrayToChunksPipe, ProgressModule, VirtualGridComponent, ButtonComponent as ɵh, CardContainerComponent as ɵm, CardFooterComponent as ɵl, CardHeaderComponent as ɵk, CardService as ɵj, CardComponent as ɵi, DropItemsComponent as ɵe, DropComponent as ɵc, DropService as ɵd, PartsComponent as ɵg, SlugComponent as ɵf, SwitchComponent as ɵb, LinkModule as ɵn, LinkComponent as ɵo, MessageComponent as ɵw, PipesModule as ɵv, ProgressComponent as ɵp, TableColumnComponent as ɵq, TableContainerComponent as ɵr, TableHeaderComponent as ɵs, TableRowComponent as ɵt, TableComponent as ɵu, VirtualGridService as ɵa };

//# sourceMappingURL=micro-layout-lib.js.map