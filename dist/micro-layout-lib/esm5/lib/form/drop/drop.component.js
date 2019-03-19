/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DropService } from './drop.service';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BUTTON_POSITIONS, BUTTON_STYLES, BUTTON_TYPES } from '../../buttons/button/button.constants';
import { state, style, trigger } from '@angular/animations';
var DropComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropComponent, _super);
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
export { DropComponent };
if (false) {
    /** @type {?} */
    DropComponent.prototype.disabledIds;
    /** @type {?} */
    DropComponent.prototype.items;
    /** @type {?} */
    DropComponent.prototype.value;
    /** @type {?} */
    DropComponent.prototype.editable;
    /** @type {?} */
    DropComponent.prototype.update;
    /** @type {?} */
    DropComponent.prototype.delete;
    /** @type {?} */
    DropComponent.prototype.add;
    /** @type {?} */
    DropComponent.prototype.select;
    /** @type {?} */
    DropComponent.prototype.dropVisible;
    /** @type {?} */
    DropComponent.prototype.dropButtonStyles;
    /** @type {?} */
    DropComponent.prototype.foundItems;
    /** @type {?} */
    DropComponent.prototype.onChange;
    /** @type {?} */
    DropComponent.prototype.path;
    /** @type {?} */
    DropComponent.prototype.searchText;
    /** @type {?} */
    DropComponent.prototype.searchActive;
    /** @type {?} */
    DropComponent.prototype.selectedItem;
    /**
     * @type {?}
     * @private
     */
    DropComponent.prototype.dropService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vZHJvcC9kcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUFFLFlBQVksRUFDdkIsS0FBSyxFQUVHLE1BQU0sRUFFakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBdUIsV0FBVyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUUxRDtJQXVCbUMseUNBQVc7SUEyQjFDLHVCQUFvQixXQUF3QjtRQUE1QyxZQUNJLGlCQUFPLFNBQ1Y7UUFGbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUExQm5DLGlCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxXQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUU1QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU0sR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxZQUFNLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsU0FBRyxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELFlBQU0sR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCxpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixzQkFBZ0IsR0FBRztZQUNmLGdCQUFnQixDQUFDLGFBQWE7WUFDOUIsWUFBWSxDQUFDLE9BQU87WUFDcEIsYUFBYSxDQUFDLElBQUk7U0FDckIsQ0FB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bnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25Jbml0LCBPdXRwdXQsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJvcFNlcnZpY2V9IGZyb20gJy4vZHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7RHJvcEl0ZW19IGZyb20gJy4vZHJvcCc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QlVUVE9OX1BPU0lUSU9OUywgQlVUVE9OX1NUWUxFUywgQlVUVE9OX1RZUEVTfSBmcm9tICcuLi8uLi9idXR0b25zL2J1dHRvbi9idXR0b24uY29uc3RhbnRzJztcbmltcG9ydCB7c3RhdGUsIHN0eWxlLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCd0b2dnbGUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcqJ1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6ICdtbC1kcm9wJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyb3BTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBEcm9wQ29tcG9uZW50LFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcENvbXBvbmVudCBleHRlbmRzIEZvcm1Db250cm9sIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgICBASW5wdXQoKSBkaXNhYmxlZElkczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxEcm9wSXRlbT4gPSBbXTtcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGVkaXRhYmxlID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPERyb3BJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZGVsZXRlOiBFdmVudEVtaXR0ZXI8RHJvcEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhZGQ6IEV2ZW50RW1pdHRlcjxEcm9wSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPERyb3BJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGRyb3BWaXNpYmxlID0gZmFsc2U7XG4gICAgZHJvcEJ1dHRvblN0eWxlcyA9IFtcbiAgICAgICAgQlVUVE9OX1BPU0lUSU9OUy5hdHRhY2hUb1JpZ2h0LFxuICAgICAgICBCVVRUT05fVFlQRVMucHJpbWFyeSxcbiAgICAgICAgQlVUVE9OX1NUWUxFUy5mbGF0XG4gICAgXTtcbiAgICBmb3VuZEl0ZW1zOiBBcnJheTxEcm9wSXRlbT4gPSBbXTtcbiAgICBvbkNoYW5nZTtcbiAgICBwYXRoOiBBcnJheTxEcm9wSXRlbT4gPSBbXTtcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmc7XG4gICAgc2VhcmNoQWN0aXZlID0gZmFsc2U7XG4gICAgc2VsZWN0ZWRJdGVtOiBEcm9wSXRlbSA9IHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHBhcmVudElkOiBudWxsLFxuICAgICAgICBpZDogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3BTZXJ2aWNlOiBEcm9wU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRyb3BTZXJ2aWNlLnNlbGVjdGVkSXRlbSQuc3Vic2NyaWJlKHNlbGVjdGVkSXRlbSA9PiB0aGlzLnNlbGVjdEl0ZW0oc2VsZWN0ZWRJdGVtKSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZWxlY3RJdGVtKHNlbGVjdGVkSXRlbTogRHJvcEl0ZW0pIHtcbiAgICAgICAgdGhpcy5wYXRoID0gdGhpcy5kcm9wU2VydmljZS5nZXRGdWxsUGF0aChzZWxlY3RlZEl0ZW0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkSXRlbS5pZDtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VsZWN0ZWRJdGVtLnRpdGxlO1xuICAgICAgICB0aGlzLnNlYXJjaEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyb3BWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3BTZXJ2aWNlLnNldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgICAgICBpZiAoY2hhbmdlc1sndmFsdWUnXSAmJiBjaGFuZ2VzWyd2YWx1ZSddLmN1cnJlbnRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbSh0aGlzLmRyb3BTZXJ2aWNlLmdldEl0ZW1CeUlkKHRoaXMudmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZElkcyddKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3BTZXJ2aWNlLnNldERpc2FibGVkSWRzKGNoYW5nZXNbJ2Rpc2FibGVkSWRzJ10uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyb3BUb2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZScsIHRoaXMuZHJvcFZpc2libGUpO1xuICAgICAgICB0aGlzLmRyb3BWaXNpYmxlID0gIXRoaXMuZHJvcFZpc2libGU7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZShvYmo6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZHJvcFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvdW5kSXRlbXMgPSB0aGlzLmRyb3BTZXJ2aWNlLnNlYXJjaEJ5VGl0bGUodGhpcy5zZWFyY2hUZXh0KTtcbiAgICB9XG59XG4iXX0=