import { Router } from '@angular/router';
import { __awaiter } from 'tslib';
import { state, style, trigger } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2OrderPipe, Ng2OrderModule } from 'ng2-order-pipe';
import { FormControl, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Injectable, NgModule, Component, EventEmitter, HostListener, Input, Output, ChangeDetectionStrategy, ViewChild, Pipe, ComponentFactoryResolver, ViewContainerRef, defineInjectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MicroLayoutLibService {
    constructor() { }
}
MicroLayoutLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MicroLayoutLibService.ctorParameters = () => [];
/** @nocollapse */ MicroLayoutLibService.ngInjectableDef = defineInjectable({ factory: function MicroLayoutLibService_Factory() { return new MicroLayoutLibService(); }, token: MicroLayoutLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MicroLayoutLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MicroLayoutLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-micro-layout-lib',
                template: `
    <p>
      micro-layout-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
MicroLayoutLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.disabled = false;
        this.types = [];
        this.type = 'button';
        this.title = false;
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    emitClick() {
        this.clicked.emit(true);
    }
    /**
     * @return {?}
     */
    getClass() {
        return `button ${this.types.join(' ')}`;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-button',
                template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content *ngIf=\"!title\"></ng-content>\n    {{ title ? title : null }}\n</button>\n"
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    disabled: [{ type: Input }],
    types: [{ type: Input }],
    type: [{ type: Input }],
    title: [{ type: Input }],
    clicked: [{ type: Output }],
    emitClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonsModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardService {
    constructor() {
        this.isCollapsed = false;
        this.canCollapse = true;
        this.isCollapsed$ = new Subject();
        this.canCollapse$ = new Subject();
    }
    /**
     * @param {?} canCollapse
     * @return {?}
     */
    setCanCollapse(canCollapse) {
        this.canCollapse = canCollapse;
        this.canCollapse$.next(this.canCollapse);
    }
    /**
     * @param {?} isCollapsed
     * @return {?}
     */
    setIsCollapsed(isCollapsed) {
        this.isCollapsed = isCollapsed;
        this.isCollapsed$.next(this.isCollapsed);
    }
    /**
     * @return {?}
     */
    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.isCollapsed$.next(this.isCollapsed);
    }
}
CardService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CardService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    /**
     * @param {?} cardService
     */
    constructor(cardService) {
        this.cardService = cardService;
        this.isCollapsed = false;
        this.canCollapse = true;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cardService.setIsCollapsed(this.isCollapsed);
        this.cardService.setCanCollapse(this.canCollapse);
        this.subscriptions$.push(this.cardService.isCollapsed$
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        isCollapsed => this.isCollapsed = isCollapsed)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item.unsubscribe()));
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card, [ml-card]',
                template: "<div [ngClass]=\"{\n'card': true,\n'card-collapsed': isCollapsed\n}\">\n  <ng-content select=\"ml-card-header, [ml-card-header]\"></ng-content>\n  <ng-content select=\"ml-card-container, [ml-card-container]\"></ng-content>\n  <ng-content select=\"ml-card-footer, [ml-card-footer]\"></ng-content>\n</div>\n",
                providers: [CardService]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [
    { type: CardService }
];
CardComponent.propDecorators = {
    isCollapsed: [{ type: Input }],
    canCollapse: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardHeaderComponent {
    /**
     * @param {?} cardService
     */
    constructor(cardService) {
        this.cardService = cardService;
        this.canCollapse = true;
        this.isCollapsed = false;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscriptions$.push(this.cardService.isCollapsed$
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        isCollapsed => this.isCollapsed = isCollapsed)));
        this.subscriptions$.push(this.cardService.canCollapse$
            .subscribe((/**
         * @param {?} canCollapse
         * @return {?}
         */
        canCollapse => this.canCollapse = canCollapse)));
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.cardService.toggleCollapsed();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item.unsubscribe()));
    }
}
CardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card-header',
                template: "<div ngClass=\"wrapper\">\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"canCollapse\" [ngClass]=\"{'toggle-collapse': true, 'collapsed': isCollapsed}\" (click)=\"toggleCollapse()\">{{ isCollapsed ? '+' : '-'}}</div>\n</div>\n"
            }] }
];
/** @nocollapse */
CardHeaderComponent.ctorParameters = () => [
    { type: CardService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardFooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card-footer',
                template: "<div ngClass=\"wrapper\">\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
CardFooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardContainerComponent {
    /**
     * @param {?} cardService
     */
    constructor(cardService) {
        this.cardService = cardService;
        this.subscriptions$ = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscriptions$.push(this.cardService.isCollapsed$
            .subscribe((/**
         * @param {?} isCollapsed
         * @return {?}
         */
        isCollapsed => this.isCollapsed = isCollapsed)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions$.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item.unsubscribe()));
    }
}
CardContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card-container',
                template: "<div [ngClass]=\"{'wrapper': true, 'collapsed': isCollapsed}\">\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
CardContainerComponent.ctorParameters = () => [
    { type: CardService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TABLE_COLUMN_TYPES = {
    string: 'string',
    number: 'number',
    textarea: 'textarea',
    switch: 'switch',
    drop: 'drop',
    component: 'component',
    date: 'date'
};
/** @type {?} */
const DEFAULT_TABLE_OPTIONS = {
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
const PAGINATION = {
    previous: 'previous',
    next: 'next',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableColumnComponent {
    /**
     * @param {?} compiler
     */
    constructor(compiler) {
        this.compiler = compiler;
        this.dataValue = false;
        this.subscriptions$ = [];
        this.dataChange = new EventEmitter();
        this.isEditing = false;
        this.isEditable = true;
        this.tableColumnTypes = TABLE_COLUMN_TYPES;
    }
    /**
     * @return {?}
     */
    get data() {
        return this.dataValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this.dataValue = val;
        this.dataChange.emit(this.dataValue);
    }
    /**
     * @param {?} newData
     * @return {?}
     */
    ngOnChanges(newData) {
        if (newData.data) {
            this.handleData();
        }
    }
    /**
     * @return {?}
     */
    handleData() {
        if (this.dataValue instanceof Array) {
            this.dataValue.forEach((/**
             * @param {?} component
             * @return {?}
             */
            component => this.render(component)));
        }
        else {
            this.render(this.dataValue);
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    render(component) {
        if (component && this.columnType === TABLE_COLUMN_TYPES.component) {
            this.componentRef =
                this.columnComponent.createComponent(this.compiler.resolveComponentFactory(component.component));
            // Set component params
            component.componentParams.forEach((/**
             * @param {?} param
             * @return {?}
             */
            param => {
                if (param.value instanceof Function) {
                    if (this.componentRef.instance[param.name]) {
                        // Subscribe to event
                        this.subscriptions$.push(this.componentRef.instance[param.name]
                            .subscribe((/**
                         * @param {?} e
                         * @return {?}
                         */
                        e => {
                            param.value(e);
                        })));
                    }
                }
                else {
                    // Set param
                    this.componentRef.instance[param.name] = param.value;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions$.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        subscription => subscription.unsubscribe()));
    }
}
TableColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-column, [ml-table-column]',
                template: "<div\n    *ngIf=\"data !== null && !isEditing && (columnType !== tableColumnTypes.component)\"\n    class=\"column\"\n>\n    <span>{{data}}</span>\n</div>\n<div #columnComponent class=\"component\"></div>\n<div\n        [ngSwitch]=\"columnType\"\n        *ngIf=\"data !== null && isEditing && isEditable\"\n        class=\"column table-form-element\"\n>\n    <textarea *ngSwitchCase=\"tableColumnTypes.textarea\" [(ngModel)]=\"data\"></textarea>\n    <ml-switch *ngSwitchCase=\"tableColumnTypes.switch\" [(ngModel)]=\"data\"></ml-switch>\n    <input *ngSwitchDefault type=\"text\" [(ngModel)]=\"data\"/>\n</div>\n<div class=\"column column-empty\" *ngIf=\"data === null && !isEditing\">/</div>\n"
            }] }
];
/** @nocollapse */
TableColumnComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
TableColumnComponent.propDecorators = {
    data: [{ type: Input }],
    dataChange: [{ type: Output }],
    isEditing: [{ type: Input }],
    isEditable: [{ type: Input }],
    columnType: [{ type: Input }],
    columnComponent: [{ type: ViewChild, args: ['columnComponent', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableContainerComponent {
    constructor() {
        this.isEditable = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getClass(data) {
        if (data._options && data._options._backgroundColor) {
            return `row ${data._options._backgroundColor}`;
        }
        else {
            return 'row';
        }
    }
}
TableContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-container, [ml-table-container]',
                template: "<tr\n        ml-table-row\n        [ngClass]=\"getClass(row)\"\n        *ngFor=\"let row of data\"\n        [data]=\"row\"\n        [isEditable]=\"isEditable\"></tr>\n"
            }] }
];
/** @nocollapse */
TableContainerComponent.ctorParameters = () => [];
TableContainerComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ArrayToChunksPipe {
    /**
     * @param {?} array
     * @param {?} numberOfItems
     * @return {?}
     */
    transform(array, numberOfItems) {
        return array.map((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        (e, i) => {
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
        item => item));
    }
}
ArrayToChunksPipe.decorators = [
    { type: Pipe, args: [{
                name: 'arrayToChunks'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableService {
    constructor() { }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.tableOptions = options;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.tableOptions;
    }
}
TableService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableDataService {
    /**
     * @param {?} tableService
     * @param {?} arrayToChunksPipe
     * @param {?} ng2OrderPipe
     */
    constructor(tableService, arrayToChunksPipe, ng2OrderPipe) {
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
    setLimit(limit) {
        this.limit = limit;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.internalData), this._getLimit());
        this.changeData();
    }
    /**
     * @return {?}
     */
    getHeaders() {
        return this.schema;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    generateId(index) {
        return Math.round((new Date()).getTime() / 1000) + index;
    }
    /**
     * @param {?} data
     * @param {?} schema
     * @return {?}
     */
    setData(data, schema) {
        // Generate row _id
        if (data[0] && !data[0]._id) {
            this.internalData = data.map((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => {
                item._id = this.generateId(index);
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
    }
    /**
     * @return {?}
     */
    getData() {
        return this.tableData;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    goToPage(pageNumber) {
        this.pageNumber = pageNumber;
        this.changeData();
    }
    /**
     * @protected
     * @return {?}
     */
    changeData() {
        /** @type {?} */
        const data = this.data[this.pageNumber];
        this.internalTableData = {
            currentPage: this.pageNumber,
            data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        this.tableData.next(this.internalTableData);
    }
    /**
     * @protected
     * @return {?}
     */
    _getLimit() {
        if (this.limit) {
            return this.limit;
        }
        else {
            return this.internalData.length;
        }
    }
    /**
     * @protected
     * @param {?} schema
     * @param {?} rows
     * @return {?}
     */
    setColumns(schema, rows) {
        /** @type {?} */
        const newRows = [];
        /** @type {?} */
        const fields = Object.keys(schema);
        rows.forEach((/**
         * @param {?} oldRow
         * @return {?}
         */
        (oldRow) => {
            /** @type {?} */
            const existingColumns = Object.keys(oldRow);
            fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !existingColumns
                .includes(item)))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => oldRow[item] = schema[item].defaultValue));
            newRows.push(oldRow);
        }));
        return newRows;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    itemAdd(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.internalData.push(data);
            this.dataChange$.next({
                type: 'add',
                data: data
            });
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    itemEdit(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.internalData = this.internalData
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item._id === data._id) {
                    return data;
                }
                return item;
            }));
            this.dataChange$.next({
                type: 'edit',
                data: data
            });
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    itemDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const index = this.internalData
                .findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item._id === id));
            if (index < 0) {
                return false;
            }
            this.internalData.splice(index, 1);
            this.dataChange$.next({
                data: id,
                type: 'delete'
            });
        });
    }
    /**
     * @param {?} orderBy
     * @return {?}
     */
    reorder(orderBy) {
        this.orderBy === orderBy ? this.orderDir = !this.orderDir : this.orderBy = orderBy;
        this.pageNumber = 0;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this.ng2OrderPipe
            .transform(this.internalData, this.orderBy, this.orderDir)), this._getLimit());
        this.changeData();
    }
}
TableDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableDataService.ctorParameters = () => [
    { type: TableService },
    { type: ArrayToChunksPipe },
    { type: Ng2OrderPipe }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableRowComponent {
    /**
     * @param {?} tableDataService
     */
    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.isEditable = false;
        this.isEditing = false;
        this.select = new EventEmitter();
        this.deleteActivated = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._data = Object.assign({}, this.data);
    }
    /**
     * @return {?}
     */
    elementSelected() {
        this.tableDataService.elementSelected$.next(this._data);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackColumn(index, item) {
        if (!item) {
            return null;
        }
        return index;
    }
    /**
     * @return {?}
     */
    getColumnsData() {
        return Object.keys(this.tableDataService.getHeaders());
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getColumnTypeByKey(key) {
        return this.tableDataService.getHeaders()[key].type;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getColumnIsEditableByKey(key) {
        return this.tableDataService.getHeaders()[key].isEditable;
    }
    /**
     * @return {?}
     */
    cancel() {
        this._data = Object.assign({}, this.data);
        this.isEditing = false;
    }
    /**
     * @return {?}
     */
    edit() {
        this.isEditing = !this.isEditing;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    save(type) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isEditing = false;
            if (type === 'add') {
                yield this.tableDataService.itemAdd(this.data);
            }
            else {
                yield this.tableDataService.itemEdit(this._data);
            }
        });
    }
    /**
     * @return {?}
     */
    delete() {
        this.deleteActivated = true;
        if (confirm(`Delete "${this.data.title}"?`)) {
            this.tableDataService.itemDelete(this.data._id);
        }
    }
}
TableRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-row, [ml-table-row]',
                template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (click)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable && !isEditing\">\n  <button\n          class=\"table-button\"\n          (click)=\"edit()\"\n  >Edit</button>\n  <button class=\"table-button\" (click)=\"delete()\">Delete</button>\n</td>\n<td *ngIf=\"isEditing\">\n  <button class=\"table-button\" (click)=\"save('edit')\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"table-button\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
            }] }
];
/** @nocollapse */
TableRowComponent.ctorParameters = () => [
    { type: TableDataService }
];
TableRowComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }],
    isEditing: [{ type: Input }],
    select: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    /**
     * @param {?} tableDataService
     * @param {?} tableService
     */
    constructor(tableDataService, tableService) {
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
    ngOnInit() {
        if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
            this.tableDataService.setLimit(this.tableLimit);
        }
        // On data update
        this.dataChange$ = this.tableDataService.dataChange$
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this[data.type].emit(data.data)));
        // On new data
        this.getData$ = this.tableDataService
            .getData()
            .subscribe((/**
         * @param {?} newData
         * @return {?}
         */
        newData => {
            this.header = newData.header;
            this.container = newData.data;
            if (this.tableOptions.isInternalPagination) {
                this.numOfPages = newData.numberOfPages;
                this.currentPage = newData.currentPage;
            }
        }));
        if (!this.tableOptions.isInternalPagination) {
            this.currentPage = 0;
        }
        this.tableDataService.setData(this.data, this.tableOptions.schema);
        this.tableDataService.setLimit(this.tableOptions.numberOfItems[0]);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    getCurrentPage() {
        return this.currentPage + 1;
    }
    /**
     * @param {?} numOfItems
     * @return {?}
     */
    onChangeNumberOfItems(numOfItems) {
        this.tableLimit = parseInt(numOfItems, 10);
        this.tableDataService.setLimit(this.tableLimit);
        this.numberOfItemsChange.emit(this.tableLimit);
    }
    /**
     * @return {?}
     */
    onNextPage() {
        if (this.tableOptions.isInternalPagination) {
            this.tableDataService.goToPage(this.currentPage + 1);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.next,
            });
        }
    }
    /**
     * @return {?}
     */
    onPreviousPage() {
        if (this.tableOptions.isInternalPagination) {
            this.tableDataService.goToPage(this.currentPage - 1);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.previous,
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataChange$.unsubscribe();
        this.getData$.unsubscribe();
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table, [ml-table]',
                template: "<table\n        [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n>\n    <thead\n            ml-table-header\n            [data]=\"header\"\n            class=\"header\"\n            [isEditable]=\"tableOptions.isEditable\"\n    ></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isDraggable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody\n            ml-table-container\n            class=\"table-container\"\n            *ngIf=\"!tableOptions.isDraggable\"\n            [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n    ></tbody>\n</table>\n<div class=\"table-navigation\">\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onPreviousPage()\"\n            *ngIf=\"currentPage > 0\"\n    >\n        Previous page\n    </button>\n    <span class=\"page-information\">\n        {{ getCurrentPage() }} / {{ numOfPages }}\n    </span>\n    <button\n            [disabled]=\"isLoading\"\n            class=\"table-button\"\n            (click)=\"onNextPage()\"\n            *ngIf=\"currentPage < numOfPages - 1\"\n    >\n        Next page\n    </button>\n</div>\n<div\n        class=\"number-of-items\"\n        *ngIf=\"tableOptions.canChangeNumberOfItems\"\n>\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n        <option\n                *ngFor=\"let value of tableOptions.numberOfItems\"\n                [value]=\"value\"\n        >{{value}}</option>\n    </select>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TableDataService, TableService]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: TableDataService },
    { type: TableService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwitchComponent extends FormControl {
    constructor() {
        super();
        this.change = new EventEmitter();
        this.value = false;
    }
    /**
     * @return {?}
     */
    toggleOnOff() {
        this.value = !this.value;
        if (this.onChange) {
            this.onChange(this.value);
        }
        this.change.emit(this.value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-switch',
                template: "<div [ngClass]=\"{'switch-on': value, 'switch': true}\">\n  <div ngClass=\"switch-container\" (click)=\"toggleOnOff()\">\n    <div ngClass=\"button\"></div>\n  </div>\n</div>\n",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SwitchComponent, multi: true }]
            }] }
];
/** @nocollapse */
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    change: [{ type: Output }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropService {
    constructor() {
        this.items = [];
        this.disabledIds = [];
        this.selectedItem$ = new Subject();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItemsByParentId(id) {
        return this.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.parentId === id));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItemById(id) {
        return this.items.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.id === id));
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDisabledIds(ids) {
        this.disabledIds = ids;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this.items = items;
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    selectItem(selectedItem) {
        this.selectedItem = selectedItem;
        this.selectedItem$.next(this.selectedItem);
    }
    /**
     * @param {?} title
     * @return {?}
     */
    searchByTitle(title) {
        if (title) {
            return this.items.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.title.toLowerCase().search(title.toLowerCase()) >= 0));
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getFullPath(item) {
        return this.items.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        (prev, curr) => {
            if (prev && prev[prev.length - 1].parentId
                === curr.id) {
                prev.push(curr);
            }
            return prev;
        }), [item]).reverse();
    }
}
DropService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BUTTON_TYPES = {
    primary: 'primary',
    cancel: 'cancel',
    close: 'close'
};
/** @type {?} */
const BUTTON_POSITIONS = {
    attachToRight: 'attach-to-right',
    attachToLeft: 'attach-to-left',
    attachToBottom: 'attach-to-bottom',
    attachToTop: 'attach-to-top'
};
/** @type {?} */
const BUTTON_STYLES = {
    standard: 'standard',
    flat: 'flat'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropComponent extends FormControl {
    /**
     * @param {?} dropService
     */
    constructor(dropService) {
        super();
        this.dropService = dropService;
        this.disabledIds = [];
        this.items = [];
        this.editable = false;
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
        this.add = new EventEmitter();
        this.select = new EventEmitter();
        this.dropVisible = false;
        this.dropButtonStyles = [
            BUTTON_POSITIONS.attachToRight,
            BUTTON_TYPES.primary,
            BUTTON_STYLES.flat
        ];
        this.foundItems = [];
        this.path = [];
        this.searchActive = false;
        this.selectedItem = {
            title: null,
            parentId: null,
            id: null
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dropService.selectedItem$.subscribe((/**
         * @param {?} selectedItem
         * @return {?}
         */
        selectedItem => this.selectItem(selectedItem)));
    }
    /**
     * @return {?}
     */
    activateSearch() {
        this.searchActive = true;
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    selectItem(selectedItem) {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.dropService.setItems(this.items);
        if (changes['value'] && changes['value'].currentValue > 0) {
            this.selectItem(this.dropService.getItemById(this.value));
        }
        if (changes['disabledIds']) {
            this.dropService.setDisabledIds(changes['disabledIds'].currentValue);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropToggle(event) {
        console.log('toggle', this.dropVisible);
        this.dropVisible = !this.dropVisible;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        if (event.key === 'Escape') {
            this.searchActive = false;
            this.dropVisible = false;
            return;
        }
        this.foundItems = this.dropService.searchByTitle(this.searchText);
    }
}
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
DropComponent.ctorParameters = () => [
    { type: DropService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropItemsComponent {
    /**
     * @param {?} dropService
     */
    constructor(dropService) {
        this.dropService = dropService;
        this.isOpened = true;
        this.childrenVisible = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.childrenVisible = this.dropService.getItemsByParentId(this.parentId).map((/**
         * @return {?}
         */
        () => false));
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.dropService.getItemsByParentId(this.parentId);
    }
    /**
     * @param {?} parentId
     * @return {?}
     */
    hasChildren(parentId) {
        return this.dropService.getItemsByParentId(parentId).length > 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        this.dropService.selectItem(item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    toggleChildren(index) {
        this.childrenVisible[index] = !this.childrenVisible[index];
    }
}
DropItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-drop-items, [ml-drop-items]',
                template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n",
                providers: []
            }] }
];
/** @nocollapse */
DropItemsComponent.ctorParameters = () => [
    { type: DropService }
];
DropItemsComponent.propDecorators = {
    parentId: [{ type: Input }],
    isOpened: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlugComponent extends FormControl {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    update() {
        /** @type {?} */
        const value = this.element.nativeElement.value.split(' ').join('-').toLowerCase();
        this.value = value;
        this.element.nativeElement.value = value;
        this.onChange(this.value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
SlugComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-slug',
                template: "<input type=\"text\" #element (keyup)=\"update()\" [value]=\"value\" />\n",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SlugComponent, multi: true }]
            }] }
];
/** @nocollapse */
SlugComponent.ctorParameters = () => [];
SlugComponent.propDecorators = {
    value: [{ type: Input }],
    element: [{ type: ViewChild, args: ['element',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PartsComponent extends FormControl {
    constructor() {
        super();
        this.addButtonClass = [
            BUTTON_STYLES.flat,
            BUTTON_POSITIONS.attachToRight
        ];
        this.removeButtonClass = [
            BUTTON_STYLES.flat,
            BUTTON_POSITIONS.attachToRight
        ];
        this.parts = [];
    }
    /**
     * @return {?}
     */
    addPart() {
        /** @type {?} */
        const element = this.element.nativeElement;
        if (element.value.trim().length > 0) {
            this.parts.push(element.value.trim());
            element.value = '';
            this.update();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removePart(index) {
        this.parts.splice(index, 1);
        this.update();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.value = obj;
        if (this.value) {
            this.parts = this.value.split(',');
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        event.preventDefault();
        if (event.code === 'Enter') {
            this.addPart();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    update() {
        this.value = this.parts.join(',');
        this.onChange(this.value);
        this.onTouch(true);
    }
}
PartsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-parts',
                template: "<div ngClass=\"parts-input\">\n  <input (keyup)=\"onKeyUp($event)\" #element />\n  <ml-button (click)=\"addPart()\" type=\"button\" [types]=\"addButtonClass\">add</ml-button>\n</div>\n<div ngClass=\"parts\">\n  <ul>\n    <li *ngFor=\"let item of parts; let i = index;\">\n      <span>{{item}}</span>\n      <ml-button (click)=\"removePart(i)\" type=\"button\" [types]=\"removeButtonClass\">X</ml-button>\n    </li>\n  </ul>\n</div>\n",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: PartsComponent, multi: true }]
            }] }
];
/** @nocollapse */
PartsComponent.ctorParameters = () => [];
PartsComponent.propDecorators = {
    value: [{ type: Input }],
    element: [{ type: ViewChild, args: ['element',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableHeaderComponent {
    /**
     * @param {?} tableDataService
     */
    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.data = {};
        this.isEditable = false;
    }
    /**
     * @return {?}
     */
    getData() {
        if (this.data) {
            return Object.keys(this.data) || [];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} label
     * @return {?}
     */
    sortItems(label) {
        this.tableDataService.reorder(label);
    }
}
TableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-header, [ml-table-header]',
                template: "<tr class=\"header-row\">\n    <th\n            [hidden]=\"columnName === '_id'\"\n            *ngFor=\"let columnName of getData()\"\n            class=\"column\">\n        <button\n                (click)=\"sortItems(columnName)\"\n                class=\"table-order-button\"\n                title=\"Click to reorder\"\n        >{{data[columnName].title}}\n        </button>\n    </th>\n    <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
            }] }
];
/** @nocollapse */
TableHeaderComponent.ctorParameters = () => [
    { type: TableDataService }
];
TableHeaderComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableModule {
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
                    CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageComponent {
    constructor() {
        this.hasTimeOut = false;
        this.timeout = 1000;
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.hasTimeOut) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.close.emit(true);
            }), this.timeout);
        }
    }
    /**
     * @return {?}
     */
    getClass() {
        return `message ${this.type}`;
    }
    /**
     * @return {?}
     */
    onClose() {
        this.close.emit(true);
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'ml-message',
                template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">\n    <span ngClass=\"message-text\">{{message}}</span>\n    <button ngClass=\"message-close\" (click)=\"onClose()\">X</button>\n</div>\n"
            }] }
];
/** @nocollapse */
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    message: [{ type: Input }],
    type: [{ type: Input }],
    hasTimeOut: [{ type: Input }],
    timeout: [{ type: Input }],
    close: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VirtualGridService {
    constructor() {
        this.visible = false;
        this.$visible = new Subject();
        window.onkeyup = (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (e.ctrlKey && e.code === 'KeyG') {
                this.visible = !this.visible;
                this.$visible.next(this.visible);
            }
        });
    }
}
VirtualGridService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VirtualGridService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VirtualGridComponent {
    /**
     * @param {?} virtualGridService
     */
    constructor(virtualGridService) {
        this.virtualGridService = virtualGridService;
        this.maxRows = 24;
        this.visible = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.range = new Array(this.maxRows).fill(null);
        this.$visible = this.virtualGridService.$visible
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => this.visible = visible));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    toggle(e) {
        console.log(e);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$visible.unsubscribe();
    }
}
VirtualGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-virtual-grid',
                template: "<div [ngClass]=\"{\n'virtual-grid': true,\n'-visible': visible\n}\" (keyup)=\"toggle($event)\">\n  <div class=\"grid-container\">\n    <div class=\"grid\">\n      <span *ngFor=\"let i of range\"></span>\n    </div>\n  </div>\n</div>\n",
                providers: [VirtualGridService],
                styles: [""]
            }] }
];
/** @nocollapse */
VirtualGridComponent.ctorParameters = () => [
    { type: VirtualGridService }
];
VirtualGridComponent.propDecorators = {
    maxRows: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MicroLayoutLibModule {
}
MicroLayoutLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ArrayToChunksPipe,
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
                providers: [ArrayToChunksPipe, Ng2OrderPipe]
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

export { MicroLayoutLibService, MicroLayoutLibComponent, MicroLayoutLibModule, ButtonComponent as ɵl, ButtonsModule as ɵk, CardContainerComponent as ɵr, CardFooterComponent as ɵq, CardHeaderComponent as ɵp, CardModule as ɵm, CardService as ɵo, CardComponent as ɵn, DropItemsComponent as ɵh, DropComponent as ɵf, DropService as ɵg, FormModule as ɵd, PartsComponent as ɵj, SlugComponent as ɵi, SwitchComponent as ɵe, LinkModule as ɵs, LinkComponent as ɵt, MessageModule as ɵbe, MessageComponent as ɵbf, ArrayToChunksPipe as ɵa, ProgressModule as ɵu, ProgressComponent as ɵv, TableColumnComponent as ɵx, TableContainerComponent as ɵy, TableDataService as ɵba, TableHeaderComponent as ɵz, TableRowComponent as ɵbc, TableModule as ɵw, TableService as ɵbb, TableComponent as ɵbd, VirtualGridComponent as ɵb, VirtualGridService as ɵc };

//# sourceMappingURL=micro-layout-lib.js.map