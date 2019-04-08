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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtY29sdW1uL3RhYmxlLWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQ7SUEyQkUsOEJBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBdEJ0RCxjQUFTLEdBQVEsS0FBSyxDQUFDO1FBRWIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFZcEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDMUMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBSXBDLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO0lBRW1CLENBQUM7SUFsQjFELHNCQUNJLHNDQUFJOzs7O1FBRFI7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEdBQUc7WUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BTEE7Ozs7O0lBaUJELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsU0FBUztnQkFDNUIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUF0QixDQUFzQixFQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sU0FBUztRQUFoQixpQkF1QkM7UUF0QkMsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7WUFDakUsSUFBSSxDQUFDLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFcEUsdUJBQXVCO1lBQ3ZCLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSztnQkFDckMsSUFBSSxLQUFLLENBQUMsS0FBSyxZQUFZLFFBQVEsRUFBRTtvQkFDbkMsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzFDLHFCQUFxQjt3QkFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NkJBQ2pDLFNBQVM7Ozs7d0JBQUMsVUFBQSxDQUFDOzRCQUNWLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsRUFBQyxDQUFDLENBQUM7cUJBQ2I7aUJBQ0Y7cUJBQU07b0JBQ0wsWUFBWTtvQkFDWixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDdEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztRQUN2QixVQUFBLFlBQVk7WUFDUixPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUU7UUFBMUIsQ0FBMEIsRUFDakMsQ0FBQztJQUNKLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsbXNCQUE0QztpQkFDN0M7Ozs7Z0JBZkMsd0JBQXdCOzs7dUJBcUJ2QixLQUFLOzZCQVVMLE1BQU07NEJBQ04sS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDOztJQW9EeEQsMkJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXZFWSxvQkFBb0I7OztJQUMvQix5Q0FBdUI7Ozs7O0lBQ3ZCLDRDQUEwQzs7Ozs7SUFDMUMsOENBQThCOztJQVk5QiwwQ0FBbUQ7O0lBQ25ELHlDQUFvQzs7SUFDcEMsMENBQW9DOztJQUNwQywwQ0FBNEI7O0lBQzVCLCtDQUEwRjs7SUFFMUYsZ0RBQXNDOzs7OztJQUUxQix3Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RBQkxFX0NPTFVNTl9UWVBFU30gZnJvbSAnLi4vdGFibGUuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWwtdGFibGUtY29sdW1uLCBbbWwtdGFibGUtY29sdW1uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgZGF0YVZhbHVlOiBhbnkgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb25zJCA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFWYWx1ZTtcbiAgfVxuXG4gIHNldCBkYXRhKHZhbCkge1xuICAgIHRoaXMuZGF0YVZhbHVlID0gdmFsO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YVZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPigpO1xuICBASW5wdXQoKSBpc0VkaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNFZGl0YWJsZTogQm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbHVtblR5cGU6IFN0cmluZztcbiAgQFZpZXdDaGlsZCgnY29sdW1uQ29tcG9uZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb2x1bW5Db21wb25lbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgdGFibGVDb2x1bW5UeXBlcyA9IFRBQkxFX0NPTFVNTl9UWVBFUztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBpbGVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XG5cbiAgbmdPbkNoYW5nZXMobmV3RGF0YSkge1xuICAgIGlmIChuZXdEYXRhLmRhdGEpIHtcbiAgICAgIHRoaXMuaGFuZGxlRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURhdGEoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMuZGF0YVZhbHVlLmZvckVhY2goY29tcG9uZW50ID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXIoY29tcG9uZW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyKHRoaXMuZGF0YVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudCAmJiB0aGlzLmNvbHVtblR5cGUgPT09IFRBQkxFX0NPTFVNTl9UWVBFUy5jb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID1cbiAgICAgICAgICB0aGlzLmNvbHVtbkNvbXBvbmVudC5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgIHRoaXMuY29tcGlsZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50LmNvbXBvbmVudCkpO1xuXG4gICAgICAvLyBTZXQgY29tcG9uZW50IHBhcmFtc1xuICAgICAgY29tcG9uZW50LmNvbXBvbmVudFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHBhcmFtLnZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2VbcGFyYW0ubmFtZV0pIHtcbiAgICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBldmVudFxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zJC5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW3BhcmFtLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW0udmFsdWUoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2V0IHBhcmFtXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2VbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJC5mb3JFYWNoKFxuICAgICAgICBzdWJzY3JpcHRpb24gPT5cbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxufVxuIl19