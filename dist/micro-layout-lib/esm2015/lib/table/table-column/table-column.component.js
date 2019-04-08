/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TABLE_COLUMN_TYPES } from '../table.constants';
export class TableColumnComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtY29sdW1uL3RhYmxlLWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFNdEQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQXVCL0IsWUFBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUF0QnRELGNBQVMsR0FBUSxLQUFLLENBQUM7UUFFYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQVlwQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMxQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFJcEMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFFbUIsQ0FBQzs7OztJQWxCMUQsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQVlELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsWUFBWSxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQVM7UUFDZCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWTtnQkFDYixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVwRSx1QkFBdUI7WUFDdkIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksS0FBSyxDQUFDLEtBQUssWUFBWSxRQUFRLEVBQUU7b0JBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMxQyxxQkFBcUI7d0JBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzZCQUNqQyxTQUFTOzs7O3dCQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUNiLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsRUFBQyxDQUFDLENBQUM7cUJBQ2I7aUJBQ0Y7cUJBQU07b0JBQ0wsWUFBWTtvQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDdEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFDdkIsWUFBWSxDQUFDLEVBQUUsQ0FDWCxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQ2pDLENBQUM7SUFDSixDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLG1zQkFBNEM7YUFDN0M7Ozs7WUFmQyx3QkFBd0I7OzttQkFxQnZCLEtBQUs7eUJBVUwsTUFBTTt3QkFDTixLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7Ozs7SUFsQnRELHlDQUF1Qjs7Ozs7SUFDdkIsNENBQTBDOzs7OztJQUMxQyw4Q0FBOEI7O0lBWTlCLDBDQUFtRDs7SUFDbkQseUNBQW9DOztJQUNwQywwQ0FBb0M7O0lBQ3BDLDBDQUE0Qjs7SUFDNUIsK0NBQTBGOztJQUUxRixnREFBc0M7Ozs7O0lBRTFCLHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VEFCTEVfQ09MVU1OX1RZUEVTfSBmcm9tICcuLi90YWJsZS5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtbC10YWJsZS1jb2x1bW4sIFttbC10YWJsZS1jb2x1bW5dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBkYXRhVmFsdWU6IGFueSA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbnMkID0gW107XG5cbiAgQElucHV0KClcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVZhbHVlO1xuICB9XG5cbiAgc2V0IGRhdGEodmFsKSB7XG4gICAgdGhpcy5kYXRhVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhVmFsdWUpO1xuICB9XG5cbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIGlzRWRpdGluZzogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0VkaXRhYmxlOiBCb29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sdW1uVHlwZTogU3RyaW5nO1xuICBAVmlld0NoaWxkKCdjb2x1bW5Db21wb25lbnQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGNvbHVtbkNvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZjtcblxuICB0YWJsZUNvbHVtblR5cGVzID0gVEFCTEVfQ09MVU1OX1RZUEVTO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGlsZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cblxuICBuZ09uQ2hhbmdlcyhuZXdEYXRhKSB7XG4gICAgaWYgKG5ld0RhdGEuZGF0YSkge1xuICAgICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGF0YSgpIHtcbiAgICBpZiAodGhpcy5kYXRhVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5kYXRhVmFsdWUuZm9yRWFjaChjb21wb25lbnQgPT5cbiAgICAgICAgICB0aGlzLnJlbmRlcihjb21wb25lbnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXIodGhpcy5kYXRhVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50ICYmIHRoaXMuY29sdW1uVHlwZSA9PT0gVEFCTEVfQ09MVU1OX1RZUEVTLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPVxuICAgICAgICAgIHRoaXMuY29sdW1uQ29tcG9uZW50LmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgdGhpcy5jb21waWxlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQuY29tcG9uZW50KSk7XG5cbiAgICAgIC8vIFNldCBjb21wb25lbnQgcGFyYW1zXG4gICAgICBjb21wb25lbnQuY29tcG9uZW50UGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICBpZiAocGFyYW0udmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtwYXJhbS5uYW1lXSkge1xuICAgICAgICAgICAgLy8gU3Vic2NyaWJlIHRvIGV2ZW50XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2VbcGFyYW0ubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbS52YWx1ZShlKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXQgcGFyYW1cbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtwYXJhbS5uYW1lXSA9IHBhcmFtLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmZvckVhY2goXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9PlxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG59XG4iXX0=