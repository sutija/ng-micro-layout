/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class VirtualGridService {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    VirtualGridService.prototype.visible;
    /** @type {?} */
    VirtualGridService.prototype.$visible;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1ncmlkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL3ZpcnR1YWwtZ3JpZC92aXJ0dWFsLWdyaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE1BQU0sT0FBTyxrQkFBa0I7SUFJN0I7UUFIUSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGFBQVEsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUd6QyxNQUFNLENBQUMsT0FBTzs7OztRQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsQztRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7O1lBWkYsVUFBVTs7Ozs7Ozs7O0lBRVQscUNBQXdCOztJQUN4QixzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlydHVhbEdyaWRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB2aXNpYmxlID0gZmFsc2U7XG4gICR2aXNpYmxlOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3aW5kb3cub25rZXl1cCA9IGUgPT4ge1xuICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmNvZGUgPT09ICdLZXlHJykge1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgICAgICB0aGlzLiR2aXNpYmxlLm5leHQodGhpcy52aXNpYmxlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=