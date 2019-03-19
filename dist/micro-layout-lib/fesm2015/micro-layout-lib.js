import { Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { state, style, trigger } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2OrderPipe, Ng2OrderModule } from 'ng2-order-pipe';
import { FormControl, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Injectable, NgModule, Component, Input, ElementRef, ViewChild, ChangeDetectionStrategy, EventEmitter, Output, Pipe, ComponentFactoryResolver, ViewContainerRef, defineInjectable } from '@angular/core';

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
                template: "<button [ngClass]=\"getClass()\" [disabled]=\"disabled\" [type]=\"type\">\n    <ng-content></ng-content>\n</button>\n"
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    disabled: [{ type: Input }],
    types: [{ type: Input }],
    type: [{ type: Input }]
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
                    CommonModule
                ],
                exports: [ButtonComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() {
        this.isColapsed = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card, [ml-card]',
                template: "<div ngClass=\"card\">\n  <ng-content select=\"ml-card-header, [ml-card-header]\"></ng-content>\n  <ng-content select=\"ml-card-container, [ml-card-container]\"></ng-content>\n  <ng-content select=\"ml-card-footer, [ml-card-footer]\"></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card-header',
                template: "<div ngClass=\"wrapper\">\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
CardHeaderComponent.ctorParameters = () => [];

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
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-card-container',
                template: "<div ngClass=\"wrapper\">\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
CardContainerComponent.ctorParameters = () => [];

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
        this.router.navigateByUrl(this.target);
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-link',
                template: "<button ngClass=\"link\" type=\"button\" (click)=\"onClick()\">{{title}}</button>\n",
                styles: [".link{background:0 0;border:none;cursor:pointer}.link:hover{text-decoration:underline}"]
            }] }
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [
    { type: Router }
];
LinkComponent.propDecorators = {
    title: [{ type: Input }],
    target: [{ type: Input }]
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
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-progress',
                template: "<progress></progress>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];

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
const MESSAGES = {
    ITEM_ADD: 'ITEM_ADD',
    ITEM_EDIT: 'ITEM_EDIT',
    ITEM_EDIT_STARTED: 'ITEM_EDIT_STARTED',
    ITEM_DELETE: 'ITEM_DELETE',
    ITEM_DELETE_CANCELED: 'ITEM_DELETE_CANCELED',
    SORT_CLICK: 'SORT_CLICK',
    MULTIPLE_DELETE: 'MULTIPLE_DELETE',
};
/** @type {?} */
const CONTEXTS = {
    DEFAULT: 'DEFAUL',
};
/** @type {?} */
const TABLE_COLUMN_TYPES = {
    STRING: 'STRING',
    NUMBER: 'NUMBER',
    TEXTAREA: 'TEXTAREA',
    SWITCH: 'SWITCH',
    DROP: 'DROP',
    COMPONENT: 'COMPONENT',
    DATE: 'DATE'
};
/** @type {?} */
const DEFAULT_TABLE_OPTIONS = {
    canAddRows: false,
    canDelete: false,
    editOption: 'INTERNAL',
    isEditable: false,
    isReordable: false,
    isSortable: false,
    schema: {}
};
/** @type {?} */
const PAGINATION = {
    PREVIOUS: 'PREVIOUS',
    NEXT: 'NEXT'
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
        this.clicked = new EventEmitter();
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
    onElementClick() {
        this.clicked.emit(true);
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
        if (component && this.columnType === TABLE_COLUMN_TYPES.COMPONENT) {
            this.componentRef =
                this.columnComponent.createComponent(this.compiler.resolveComponentFactory(component.component));
            // Set component params
            component.componentParams.forEach((/**
             * @param {?} param
             * @return {?}
             */
            param => {
                if (param.value instanceof Function) {
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
                template: "<div\n    id=\"{{data.id}}\"\n    *ngIf=\"data !== null && !isEditing && (columnType !== tableColumnTypes.COMPONENT)\"\n    ngClass=\"column\"\n>\n    <span (click)=\"onElementClick()\">{{data}}</span>\n</div>\n<div #columnComponent class=\"COMPONENT\"></div>\n<div\n        id=\"{{ data.id }}\"\n        [ngSwitch]=\"columnType\"\n        *ngIf=\"data !== null && isEditing && isEditable\"\n        class=\"Table__Column Form__Item\"\n>\n    <textarea *ngSwitchCase=\"tableColumnTypes.TEXTAREA\" [(ngModel)]=\"data\"></textarea>\n    <ml-switch *ngSwitchCase=\"tableColumnTypes.SWITCH\" [(ngModel)]=\"data\"></ml-switch>\n    <input *ngSwitchDefault type=\"text\" [(ngModel)]=\"data\"/>\n</div>\n<div class=\"Table__Column Table__Column--empty\" *ngIf=\"data === null && !isEditing\">/</div>\n"
            }] }
];
/** @nocollapse */
TableColumnComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
TableColumnComponent.propDecorators = {
    data: [{ type: Input }],
    dataChange: [{ type: Output }],
    clicked: [{ type: Output }],
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
        console.log(this.data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getClass(data) {
        if (data._options && data._options._backgroundColor) {
            return 'row ' + data._options._backgroundColor;
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
class TableFooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TableFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-footer',
                template: "<p>\n  table-footer works!\n</p>\n"
            }] }
];
/** @nocollapse */
TableFooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfoService {
    constructor() {
        this.message = new EventEmitter();
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
    notify(message) {
        this.message.emit(message);
    }
}
InfoService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InfoService.ctorParameters = () => [];
/** @type {?} */
const MessageResolver = (/**
 * @param {?} callbacks
 * @param {?} message
 * @return {?}
 */
(callbacks, message) => {
    callbacks.filter((/**
     * @param {?} callback
     * @return {?}
     */
    callback => callback.type === message.type &&
        callback.message === message.message)).every((/**
     * @param {?} item
     * @return {?}
     */
    item => item.callback(message.data)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableMessagingService extends InfoService {
}
TableMessagingService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableHeaderComponent {
    /**
     * @param {?} tableMessagingService
     */
    constructor(tableMessagingService) {
        this.tableMessagingService = tableMessagingService;
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
        this.tableMessagingService.notify({
            data: {
                sort_by: label
            },
            message: MESSAGES.SORT_CLICK,
            type: CONTEXTS.DEFAULT
        });
    }
}
TableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-header, [ml-table-header]',
                template: "<tr ngClass=\"header-row\">\n  <th\n          [hidden]=\"columnName === '_id'\"\n          *ngFor=\"let columnName of getData(); let i = index;\" ngClass=\"column\">\n    <button\n            (click)=\"sortItems(columnName)\"\n            class=\"Table__OrderButton\"\n            title=\"Click to reorder\"\n    >{{data[columnName].title}}\n    </button>\n  </th>\n  <th *ngIf=\"isEditable\">&nbsp;</th>\n</tr>\n"
            }] }
];
/** @nocollapse */
TableHeaderComponent.ctorParameters = () => [
    { type: TableMessagingService }
];
TableHeaderComponent.propDecorators = {
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
/**
 * \@todo Create
 */
class TableDataService {
    /**
     * @param {?} tableMessagingService
     * @param {?} arrayToChunksPipe
     * @param {?} ng2OrderPipe
     */
    constructor(tableMessagingService, arrayToChunksPipe, ng2OrderPipe) {
        this.tableMessagingService = tableMessagingService;
        this.arrayToChunksPipe = arrayToChunksPipe;
        this.ng2OrderPipe = ng2OrderPipe;
        this.dataChange = new Subject();
        this.elementSelected$ = new Subject();
        this.tableData = new Subject();
        this.tableId = 'table';
        this.callbacks = [
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_EDIT_STARTED,
                callback: (/**
                 * @return {?}
                 */
                () => {
                    console.log('item edit started');
                })
            },
            // On sort
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.SORT_CLICK,
                callback: (/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    this.reorder(data.sort_by);
                })
            },
            // On edit
            {
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_EDIT,
                callback: (/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => this.itemEdit(data))
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
                callback: (/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    if (confirm(`Delete ${data.id}?`)) {
                        this.itemDelete(data.id);
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
            .subscribe((/**
         * @param {?} message
         * @return {?}
         */
        (message) => MessageResolver(this.callbacks, message)));
    }
    /**
     * @param {?} tableId
     * @return {?}
     */
    setTableId(tableId) {
        console.log('table id', tableId);
        return this.tableId;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    setLimit(limit) {
        this.limit = limit;
        this.pageNumber = 0;
        this.data = null;
        this.data = this.arrayToChunksPipe
            .transform(this.setColumns(this.schema, this._data), this._getLimit());
        this.changeData();
    }
    /**
     * @return {?}
     */
    getLimit() {
        return this.limit;
    }
    /**
     * @return {?}
     */
    getHeaders() {
        return this.schema;
    }
    /**
     * @return {?}
     */
    getRows() {
        return this.data;
    }
    /**
     * @param {?} data
     * @param {?} schema
     * @return {?}
     */
    setData(data, schema) {
        this._data = data;
        this.data = this.arrayToChunksPipe.transform(this.setColumns(schema, this._data), this._getLimit());
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
     * @return {?}
     */
    getNumberOfPages() {
        return this.data.length;
    }
    /**
     * @protected
     * @return {?}
     */
    changeData() {
        /** @type {?} */
        const data = this.data[this.pageNumber];
        this._tableData = {
            currentPage: this.pageNumber,
            data,
            header: this.schema,
            numberOfPages: this.data.length,
        };
        console.log('table id', this.tableId);
        this.tableData.next(this._tableData);
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
            return this._data.length;
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
     * @protected
     * @param {?} data
     * @return {?}
     */
    itemEdit(data) {
        this.data = this.data.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item['_id'] === data.row._id) {
                return data.row;
            }
            return item;
        }));
        this.dataChange.next({
            type: 'edit',
            data: data.row
        });
    }
    /**
     * @protected
     * @param {?} id
     * @return {?}
     */
    itemDelete(id) {
        this.dataChange.next({
            type: 'delete',
            data: id
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    resolveItemPagePosition(item) {
    }
    /**
     * @protected
     * @param {?} orderBy
     * @return {?}
     */
    reorder(orderBy) {
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
    }
}
TableDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableDataService.ctorParameters = () => [
    { type: TableMessagingService },
    { type: ArrayToChunksPipe },
    { type: Ng2OrderPipe }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableRowComponent {
    /**
     * @param {?} tableMessagingService
     * @param {?} tableDataService
     */
    constructor(tableMessagingService, tableDataService) {
        this.tableMessagingService = tableMessagingService;
        this.tableDataService = tableDataService;
        this.isEditable = false;
        this.isEditing = false;
        this.deleteActivated = false;
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /**
         * Clone global data to local data
         */
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
     * @param {?} key
     * @return {?}
     */
    getDataByKey(key) {
        return this.data[key];
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
        if (this.isEditing) {
            this.tableMessagingService.notify({
                type: CONTEXTS.DEFAULT,
                message: MESSAGES.ITEM_EDIT_STARTED
            });
        }
    }
    /**
     * @return {?}
     */
    save() {
        this.isEditing = false;
        this.tableMessagingService.notify({
            type: CONTEXTS.DEFAULT,
            message: MESSAGES.ITEM_EDIT,
            data: {
                row: this._data
            }
        });
    }
    /**
     * @return {?}
     */
    delete() {
        this.deleteActivated = !this.deleteActivated;
        this.tableMessagingService.notify({
            type: CONTEXTS.DEFAULT,
            message: MESSAGES.ITEM_DELETE,
            data: this._data
        });
    }
}
TableRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-table-row, [ml-table-row]',
                template: "<td\n        ml-table-column\n        [hidden]=\"key === '_id'\"\n        *ngFor=\"let key of getColumnsData(); trackBy: trackColumn\"\n        [(data)]=\"_data[key]\"\n        [columnType]=\"getColumnTypeByKey(key)\"\n        [isEditing]=\"isEditing && getColumnIsEditableByKey(key)\"\n        (onClick)=\"elementSelected()\"\n></td>\n<td *ngIf=\"isEditable\">\n  <button\n          class=\"Button Button--small Button--primary\"\n          (click)=\"edit()\"\n          *ngIf=\"!isEditing\"\n  >Edit</button>\n  <button class=\"Button Button--small\" (click)=\"delete()\" *ngIf=\"!isEditing\">Delete</button>\n  <button class=\"Button Button--small Button--primary\" (click)=\"save()\" *ngIf=\"isEditing\">Save</button>\n  <button class=\"Button Button--small\" (click)=\"cancel()\" *ngIf=\"isEditing\">Cancel</button>\n</td>\n"
            }] }
];
/** @nocollapse */
TableRowComponent.ctorParameters = () => [
    { type: TableMessagingService },
    { type: TableDataService }
];
TableRowComponent.propDecorators = {
    data: [{ type: Input }],
    isEditable: [{ type: Input }],
    isEditing: [{ type: Input }],
    deleteActivated: [{ type: Input }],
    select: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableService {
    constructor() {
        this._tableOptions = {};
    }
    /**
     * @param {?} tableID
     * @param {?} tableOptions
     * @return {?}
     */
    setTableOptions(tableID, tableOptions) {
        this._tableOptions[tableID] = Object.assign({}, tableOptions);
    }
    /**
     * @return {?}
     */
    getTableOptions() {
        return of(this._tableOptions);
    }
}
TableService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    /**
     * @param {?} tableDataService
     * @param {?} tableService
     * @param {?} el
     */
    constructor(tableDataService, tableService, el) {
        this.tableDataService = tableDataService;
        this.tableService = tableService;
        this.el = el;
        this.tableID = 'default';
        // Only if we have external page handler
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
        this.pageChange = new EventEmitter();
        this.numberOfItemsChange = new EventEmitter();
        this.isLoading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tableDataService.setTableId(this.tableID);
        if ((this.tableLimit > 0) && this.tableOptions.isInternalPagination) {
            this.tableDataService.setLimit(this.tableLimit);
        }
        // On data update
        this.dataChange$ = this.tableDataService.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            // Emit new data
            if (data.type === 'edit') {
                this.update.emit(data.data);
            }
            if (data.type === 'delete') {
                this.delete.emit(data.data);
            }
        }));
        // On new data
        this.getData$ = this.tableDataService
            .getData()
            .subscribe({
            next: (/**
             * @param {?} newData
             * @return {?}
             */
            (newData) => {
                this.header = newData.header;
                this.container = newData.data;
                if (this.tableOptions.isInternalPagination) {
                    this.numOfPages = newData.numberOfPages;
                    this.currentPage = newData.currentPage;
                }
            })
        });
        if (!this.tableOptions.isInternalPagination) {
            this.currentPage = 0;
        }
        this.tableDataService.setData(this.data, this.tableOptions.schema);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
        this.tableLimit = numOfItems;
        this.tableDataService.setLimit(this.tableLimit);
        this.numberOfItemsChange.emit(numOfItems);
    }
    /**
     * @return {?}
     */
    onNextPage() {
        if (this.tableOptions.isInternalPagination) {
            /** @type {?} */
            const newPage = this.currentPage + 1;
            this.tableDataService.goToPage(newPage);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.NEXT,
            });
        }
    }
    /**
     * @return {?}
     */
    onPreviousPage() {
        if (this.tableOptions.isInternalPagination) {
            /** @type {?} */
            const newPage = this.currentPage - 1;
            this.tableDataService.goToPage(newPage);
        }
        else {
            this.pageChange.emit({
                direction: PAGINATION.PREVIOUS,
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
                template: "<div ngClass=\"wrapper\">\n  <table\n          [ngClass]=\"{\n        'table-isLoading': isLoading,\n        'table': true\n    }\"\n  >\n    <thead ml-table-header [data]=\"header\" ngClass=\"header\" [isEditable]=\"tableOptions.isEditable\"></thead>\n    <tbody ml-table-container\n           *ngIf=\"tableOptions.isReordable\"\n           [isEditable]=\"tableOptions.isEditable\"\n           [data]=\"container\"\n           ngClass=\"table-container\"\n    ></tbody>\n    <tbody ml-table-container *ngIf=\"!tableOptions.isReordable\" [isEditable]=\"tableOptions.isEditable\" [data]=\"container\" class=\"Table__Container\"></tbody>\n  </table>\n</div>\n<div ngClass=\"table-navigation\">\n  <button [disabled]=\"isLoading\" ngClass=\"button\" (click)=\"onPreviousPage()\" *ngIf=\"currentPage > 0\">Previous page</button>\n  <span ngClass=\"page-information\">{{ getCurrentPage() }} / {{ numOfPages }}</span>\n  <button [disabled]=\"isLoading\" ngClass=\"button\" (click)=\"onNextPage()\" *ngIf=\"currentPage < numOfPages - 1\">Next page</button>\n</div>\n<div *ngIf=\"tableOptions.canChangeNumberOfItems\">\n  <div class=\"form-Item\">\n    <label># of items</label>\n    <select (change)=\"onChangeNumberOfItems($event.target.value)\">\n      <option value=\"50\">50</option>\n      <option value=\"100\">100</option>\n      <option value=\"200\">200</option>\n    </select>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TableDataService, TableService, TableMessagingService]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: TableDataService },
    { type: TableService },
    { type: ElementRef }
];
TableComponent.propDecorators = {
    tableID: [{ type: Input }],
    data: [{ type: Input }],
    tableOptions: [{ type: Input }],
    tableLimit: [{ type: Input }],
    numberOfPages: [{ type: Input }],
    pageNumber: [{ type: Input }],
    update: [{ type: Output }],
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
                template: "<ul *ngIf=\"isOpened\" ngClass=\"drop-items\">\n    <li *ngFor=\"let item of getItems(); let i = index;\" ngClass=\"drop-item\">\n\n        <button\n                ngClass=\"button-toggle\"\n                *ngIf=\"hasChildren(item.id)\"\n                (click)=\"toggleChildren(i)\"\n        >{{childrenVisible[i] ? '-' : '+'}}</button>\n\n        <span (click)=\"selectItem(item)\" ngClass=\"title {{!hasChildren(item.id) ? 'no-children' : null}}\">{{item.title}}</span>\n        <ml-drop-items\n                [parentId]=\"item.id\"\n                [isOpened]=\"childrenVisible[i]\"\n                ngClass=\"drop-items-children\"\n        ></ml-drop-items>\n    </li>\n</ul>\n"
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
class AliasComponent extends FormControl {
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
        this.onTouch = fn;
    }
}
AliasComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-alias',
                template: "<input type=\"text\" #element (keyup)=\"update()\" (focus)=\"onTouch(true)\" [value]=\"value\" />\n",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: AliasComponent, multi: true }]
            }] }
];
/** @nocollapse */
AliasComponent.ctorParameters = () => [];
AliasComponent.propDecorators = {
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
                    AliasComponent,
                    PartsComponent
                ],
                imports: [
                    ButtonsModule,
                    CommonModule,
                    FormsModule,
                    BrowserModule
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
                    TableFooterComponent,
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
                    TableFooterComponent,
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
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getClass() {
        return `message ${this.type}`;
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'ml-message',
                template: "<div [ngClass]=\"getClass()\" *ngIf=\"message\">{{message}}</div>\n"
            }] }
];
/** @nocollapse */
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    message: [{ type: Input }],
    type: [{ type: Input }]
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
class MicroLayoutLibModule {
}
MicroLayoutLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ArrayToChunksPipe,
                    MicroLayoutLibComponent
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
                    MessageModule
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

export { MicroLayoutLibService, MicroLayoutLibComponent, MicroLayoutLibModule, ButtonComponent as ɵj, ButtonsModule as ɵi, CardContainerComponent as ɵo, CardFooterComponent as ɵn, CardHeaderComponent as ɵm, CardModule as ɵk, CardComponent as ɵl, AliasComponent as ɵg, DropItemsComponent as ɵf, DropComponent as ɵd, DropService as ɵe, FormModule as ɵb, PartsComponent as ɵh, SwitchComponent as ɵc, LinkModule as ɵp, LinkComponent as ɵq, MessageModule as ɵbe, MessageComponent as ɵbf, ArrayToChunksPipe as ɵa, ProgressModule as ɵr, ProgressComponent as ɵs, InfoService as ɵz, TableColumnComponent as ɵu, TableContainerComponent as ɵv, TableDataService as ɵbb, TableFooterComponent as ɵw, TableHeaderComponent as ɵx, TableMessagingService as ɵy, TableRowComponent as ɵba, TableModule as ɵt, TableService as ɵbd, TableComponent as ɵbc };

//# sourceMappingURL=micro-layout-lib.js.map