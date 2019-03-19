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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtY29sdW1uL3RhYmxlLWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFNdEQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQXdCL0IsWUFBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUF2QnRELGNBQVMsR0FBUSxLQUFLLENBQUM7UUFFYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQVlwQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6QyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBSXBDLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO0lBR3RDLENBQUM7Ozs7SUFwQkQsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQWNELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxZQUFZLEtBQUssRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxTQUFTLENBQUMsRUFBRSxDQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBUztRQUNkLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssa0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxZQUFZO2dCQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRXBFLHVCQUF1QjtZQUN2QixTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxLQUFLLENBQUMsS0FBSyxZQUFZLFFBQVEsRUFBRTtvQkFDbkMscUJBQXFCO29CQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt5QkFDakMsU0FBUzs7OztvQkFBQyxDQUFDLENBQUMsRUFBRTt3QkFDYixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLFlBQVk7b0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3REO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQ1gsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUNqQyxDQUFDO0lBQ0osQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxzeUJBQTRDO2FBQzdDOzs7O1lBZkMsd0JBQXdCOzs7bUJBcUJ2QixLQUFLO3lCQVVMLE1BQU07c0JBQ04sTUFBTTt3QkFDTixLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7Ozs7SUFuQnRELHlDQUF1Qjs7Ozs7SUFDdkIsNENBQTBDOzs7OztJQUMxQyw4Q0FBOEI7O0lBWTlCLDBDQUFtRDs7SUFDbkQsdUNBQTBEOztJQUMxRCx5Q0FBb0M7O0lBQ3BDLDBDQUFvQzs7SUFDcEMsMENBQTRCOztJQUM1QiwrQ0FBMEY7O0lBRTFGLGdEQUFzQzs7Ozs7SUFFMUIsd0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUQUJMRV9DT0xVTU5fVFlQRVN9IGZyb20gJy4uL3RhYmxlLmNvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21sLXRhYmxlLWNvbHVtbiwgW21sLXRhYmxlLWNvbHVtbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGRhdGFWYWx1ZTogYW55ID0gZmFsc2U7XG4gIHByb3RlY3RlZCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9ucyQgPSBbXTtcblxuICBASW5wdXQoKVxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhVmFsdWU7XG4gIH1cblxuICBzZXQgZGF0YSh2YWwpIHtcbiAgICB0aGlzLmRhdGFWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGFWYWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpc0VkaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNFZGl0YWJsZTogQm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbHVtblR5cGU6IFN0cmluZztcbiAgQFZpZXdDaGlsZCgnY29sdW1uQ29tcG9uZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb2x1bW5Db21wb25lbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgdGFibGVDb2x1bW5UeXBlcyA9IFRBQkxFX0NPTFVNTl9UWVBFUztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBpbGVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKG5ld0RhdGEpIHtcbiAgICBpZiAobmV3RGF0YS5kYXRhKSB7XG4gICAgICB0aGlzLmhhbmRsZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBvbkVsZW1lbnRDbGljaygpIHtcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZURhdGEoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMuZGF0YVZhbHVlLmZvckVhY2goY29tcG9uZW50ID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXIoY29tcG9uZW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyKHRoaXMuZGF0YVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudCAmJiB0aGlzLmNvbHVtblR5cGUgPT09IFRBQkxFX0NPTFVNTl9UWVBFUy5DT01QT05FTlQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID1cbiAgICAgICAgICB0aGlzLmNvbHVtbkNvbXBvbmVudC5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgIHRoaXMuY29tcGlsZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50LmNvbXBvbmVudCkpO1xuXG4gICAgICAvLyBTZXQgY29tcG9uZW50IHBhcmFtc1xuICAgICAgY29tcG9uZW50LmNvbXBvbmVudFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHBhcmFtLnZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gZXZlbnRcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW3BhcmFtLm5hbWVdXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS52YWx1ZShlKTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXQgcGFyYW1cbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtwYXJhbS5uYW1lXSA9IHBhcmFtLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmZvckVhY2goXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9PlxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG59XG4iXX0=