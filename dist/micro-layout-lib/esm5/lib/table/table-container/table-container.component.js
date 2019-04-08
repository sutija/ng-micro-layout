/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
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
export { TableContainerComponent };
if (false) {
    /** @type {?} */
    TableContainerComponent.prototype.data;
    /** @type {?} */
    TableContainerComponent.prototype.isEditable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtY29udGFpbmVyL3RhYmxlLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxHQUNSLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBUUk7UUFGUyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBR3JDLENBQUM7Ozs7O0lBRUQsMENBQVE7Ozs7SUFBUixVQUFTLElBQUk7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNqRCxPQUFPLFNBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBa0IsQ0FBQztTQUNsRDthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOztnQkFqQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwwQ0FBMEM7b0JBQ3BELG1MQUErQztpQkFDbEQ7Ozs7O3VCQUVJLEtBQUs7NkJBQ0wsS0FBSzs7SUFZViw4QkFBQztDQUFBLEFBbEJELElBa0JDO1NBZFksdUJBQXVCOzs7SUFDaEMsdUNBQStCOztJQUMvQiw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlUm93fSBmcm9tICcuLi90YWJsZS5pbnRlcmZhY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWwtdGFibGUtY29udGFpbmVyLCBbbWwtdGFibGUtY29udGFpbmVyXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb250YWluZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRhdGE6IEFycmF5PFRhYmxlUm93PjtcbiAgICBASW5wdXQoKSBpc0VkaXRhYmxlOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZXRDbGFzcyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLl9vcHRpb25zICYmIGRhdGEuX29wdGlvbnMuX2JhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIGByb3cgJHtkYXRhLl9vcHRpb25zLl9iYWNrZ3JvdW5kQ29sb3J9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAncm93JztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==