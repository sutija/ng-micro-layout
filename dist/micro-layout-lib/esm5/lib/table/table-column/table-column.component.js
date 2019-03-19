/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TABLE_COLUMN_TYPES } from '../table.constants';
var TableColumnComponent = /** @class */ (function () {
    function TableColumnComponent(compiler) {
        this.compiler = compiler;
        this.dataValue = false;
        this.subscriptions$ = [];
        this.dataChange = new EventEmitter();
        this.clicked = new EventEmitter();
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
        if (component && this.columnType === TABLE_COLUMN_TYPES.COMPONENT) {
            this.componentRef =
                this.columnComponent.createComponent(this.compiler.resolveComponentFactory(component.component));
            // Set component params
            component.componentParams.forEach((/**
             * @param {?} param
             * @return {?}
             */
            function (param) {
                if (param.value instanceof Function) {
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
                    template: "<div\n    id=\"{{data.id}}\"\n    *ngIf=\"data !== null && !isEditing && (columnType !== tableColumnTypes.COMPONENT)\"\n    ngClass=\"column\"\n>\n    <span (click)=\"onElementClick()\">{{data}}</span>\n</div>\n<div #columnComponent class=\"COMPONENT\"></div>\n<div\n        id=\"{{ data.id }}\"\n        [ngSwitch]=\"columnType\"\n        *ngIf=\"data !== null && isEditing && isEditable\"\n        class=\"Table__Column Form__Item\"\n>\n    <textarea *ngSwitchCase=\"tableColumnTypes.TEXTAREA\" [(ngModel)]=\"data\"></textarea>\n    <ml-switch *ngSwitchCase=\"tableColumnTypes.SWITCH\" [(ngModel)]=\"data\"></ml-switch>\n    <input *ngSwitchDefault type=\"text\" [(ngModel)]=\"data\"/>\n</div>\n<div class=\"Table__Column Table__Column--empty\" *ngIf=\"data === null && !isEditing\">/</div>\n"
                }] }
    ];
    /** @nocollapse */
    TableColumnComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    TableColumnComponent.propDecorators = {
        data: [{ type: Input }],
        dataChange: [{ type: Output }],
        clicked: [{ type: Output }],
        isEditing: [{ type: Input }],
        isEditable: [{ type: Input }],
        columnType: [{ type: Input }],
        columnComponent: [{ type: ViewChild, args: ['columnComponent', { read: ViewContainerRef },] }]
    };
    return TableColumnComponent;
}());
export { TableColumnComponent };
if (false) {
    /** @type {?} */
    TableColumnComponent.prototype.dataValue;
    /**
     * @type {?}
     * @protected
     */
    TableColumnComponent.prototype.componentRef;
    /**
     * @type {?}
     * @protected
     */
    TableColumnComponent.prototype.subscriptions$;
    /** @type {?} */
    TableColumnComponent.prototype.dataChange;
    /** @type {?} */
    TableColumnComponent.prototype.clicked;
    /** @type {?} */
    TableColumnComponent.prototype.isEditing;
    /** @type {?} */
    TableColumnComponent.prototype.isEditable;
    /** @type {?} */
    TableColumnComponent.prototype.columnType;
    /** @type {?} */
    TableColumnComponent.prototype.columnComponent;
    /** @type {?} */
    TableColumnComponent.prototype.tableColumnTypes;
    /**
     * @type {?}
     * @private
     */
    TableColumnComponent.prototype.compiler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtY29sdW1uL3RhYmxlLWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQ7SUE0QkUsOEJBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBdkJ0RCxjQUFTLEdBQVEsS0FBSyxDQUFDO1FBRWIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFZcEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDekMsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUlwQyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztJQUd0QyxDQUFDO0lBcEJELHNCQUNJLHNDQUFJOzs7O1FBRFI7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEdBQUc7WUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BTEE7Ozs7O0lBbUJELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsU0FBUyxZQUFZLEtBQUssRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLFNBQVM7Z0JBQzVCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFBdEIsQ0FBc0IsRUFBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQscUNBQU07Ozs7SUFBTixVQUFPLFNBQVM7UUFBaEIsaUJBcUJDO1FBcEJDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssa0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxZQUFZO2dCQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRXBFLHVCQUF1QjtZQUN2QixTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ3JDLElBQUksS0FBSyxDQUFDLEtBQUssWUFBWSxRQUFRLEVBQUU7b0JBQ25DLHFCQUFxQjtvQkFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7eUJBQ2pDLFNBQVM7Ozs7b0JBQUMsVUFBQSxDQUFDO3dCQUNWLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0wsWUFBWTtvQkFDWixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDdEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztRQUN2QixVQUFBLFlBQVk7WUFDUixPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUU7UUFBMUIsQ0FBMEIsRUFDakMsQ0FBQztJQUNKLENBQUM7O2dCQTlFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsc3lCQUE0QztpQkFDN0M7Ozs7Z0JBZkMsd0JBQXdCOzs7dUJBcUJ2QixLQUFLOzZCQVVMLE1BQU07MEJBQ04sTUFBTTs0QkFDTixLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7O0lBdUR4RCwyQkFBQztDQUFBLEFBL0VELElBK0VDO1NBM0VZLG9CQUFvQjs7O0lBQy9CLHlDQUF1Qjs7Ozs7SUFDdkIsNENBQTBDOzs7OztJQUMxQyw4Q0FBOEI7O0lBWTlCLDBDQUFtRDs7SUFDbkQsdUNBQTBEOztJQUMxRCx5Q0FBb0M7O0lBQ3BDLDBDQUFvQzs7SUFDcEMsMENBQTRCOztJQUM1QiwrQ0FBMEY7O0lBRTFGLGdEQUFzQzs7Ozs7SUFFMUIsd0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUQUJMRV9DT0xVTU5fVFlQRVN9IGZyb20gJy4uL3RhYmxlLmNvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLXRhYmxlLWNvbHVtbiwgW21sLXRhYmxlLWNvbHVtbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGRhdGFWYWx1ZTogYW55ID0gZmFsc2U7XG4gIHByb3RlY3RlZCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9ucyQgPSBbXTtcblxuICBASW5wdXQoKVxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVmFsdWU7XG4gIH1cblxuICBzZXQgZGF0YSh2YWwpIHtcbiAgICB0aGlzLmRhdGFWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGFWYWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpc0VkaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNFZGl0YWJsZTogQm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbHVtblR5cGU6IFN0cmluZztcbiAgQFZpZXdDaGlsZCgnY29sdW1uQ29tcG9uZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb2x1bW5Db21wb25lbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgdGFibGVDb2x1bW5UeXBlcyA9IFRBQkxFX0NPTFVNTl9UWVBFUztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBpbGVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKG5ld0RhdGEpIHtcbiAgICBpZiAobmV3RGF0YS5kYXRhKSB7XG4gICAgICB0aGlzLmhhbmRsZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBvbkVsZW1lbnRDbGljaygpIHtcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZURhdGEoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMuZGF0YVZhbHVlLmZvckVhY2goY29tcG9uZW50ID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXIoY29tcG9uZW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyKHRoaXMuZGF0YVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudCAmJiB0aGlzLmNvbHVtblR5cGUgPT09IFRBQkxFX0NPTFVNTl9UWVBFUy5DT01QT05FTlQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID1cbiAgICAgICAgICB0aGlzLmNvbHVtbkNvbXBvbmVudC5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgIHRoaXMuY29tcGlsZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50LmNvbXBvbmVudCkpO1xuXG4gICAgICAvLyBTZXQgY29tcG9uZW50IHBhcmFtc1xuICAgICAgY29tcG9uZW50LmNvbXBvbmVudFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHBhcmFtLnZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gZXZlbnRcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW3BhcmFtLm5hbWVdXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS52YWx1ZShlKTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXQgcGFyYW1cbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtwYXJhbS5uYW1lXSA9IHBhcmFtLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmZvckVhY2goXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9PlxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG59XG4iXX0=