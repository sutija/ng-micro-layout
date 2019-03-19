/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DropService } from './drop.service';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BUTTON_POSITIONS, BUTTON_STYLES, BUTTON_TYPES } from '../../buttons/button/button.constants';
import { state, style, trigger } from '@angular/animations';
export class DropComponent extends FormControl {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vZHJvcC9kcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQUUsWUFBWSxFQUN2QixLQUFLLEVBRUcsTUFBTSxFQUVqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUF1QixXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBeUIxRCxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7Ozs7SUEyQjFDLFlBQW9CLFdBQXdCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRFEsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUExQm5DLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxXQUFNLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsUUFBRyxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELFdBQU0sR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixxQkFBZ0IsR0FBRztZQUNmLGdCQUFnQixDQUFDLGFBQWE7WUFDOUIsWUFBWSxDQUFDLE9BQU87WUFDcEIsYUFBYSxDQUFDLElB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QUM7Z0JBQ1AsVUFBVSxFQUFFO29CQUNSLE9BQU8sQ0FBQyxRQUFRLEVBQUU7d0JBQ2QsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7NEJBQ25CLE1BQU0sRUFBRSxHQUFHO3lCQUNkLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDbEIsTUFBTSxFQUFFLENBQUM7eUJBQ1osQ0FBQyxDQUFDO3FCQUNOLENBQUM7aUJBQ0w7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixneENBQW9DO2dCQUNwQyxTQUFTLEVBQUU7b0JBQ1AsV0FBVztvQkFDWDt3QkFDSSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsYUFBYTt3QkFDMUIsS0FBSyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0o7YUFDSjs7OztZQTVCTyxXQUFXOzs7MEJBOEJkLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsTUFBTTtxQkFDTixNQUFNO2tCQUNOLE1BQU07cUJBQ04sTUFBTTs7OztJQVBQLG9DQUF5Qzs7SUFDekMsOEJBQXFDOztJQUNyQyw4QkFBdUI7O0lBQ3ZCLGlDQUEwQjs7SUFDMUIsK0JBQThEOztJQUM5RCwrQkFBOEQ7O0lBQzlELDRCQUEyRDs7SUFDM0QsK0JBQThEOztJQUU5RCxvQ0FBb0I7O0lBQ3BCLHlDQUlFOztJQUNGLG1DQUFpQzs7SUFDakMsaUNBQVM7O0lBQ1QsNkJBQTJCOztJQUMzQixtQ0FBbUI7O0lBQ25CLHFDQUFxQjs7SUFDckIscUNBSUU7Ozs7O0lBRVUsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25Jbml0LCBPdXRwdXQsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJvcFNlcnZpY2V9IGZyb20gJy4vZHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7RHJvcEl0ZW19IGZyb20gJy4vZHJvcCc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QlVUVE9OX1BPU0lUSU9OUywgQlVUVE9OX1NUWUxFUywgQlVUVE9OX1RZUEVTfSBmcm9tICcuLi8uLi9idXR0b25zL2J1dHRvbi9idXR0b24uY29uc3RhbnRzJztcbmltcG9ydCB7c3RhdGUsIHN0eWxlLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCd0b2dnbGUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcqJ1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6ICdtbC1kcm9wJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyb3BTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBEcm9wQ29tcG9uZW50LFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcENvbXBvbmVudCBleHRlbmRzIEZvcm1Db250cm9sIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgICBASW5wdXQoKSBkaXNhYmxlZElkczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxEcm9wSXRlbT4gPSBbXTtcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGVkaXRhYmxlID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPERyb3BJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZGVsZXRlOiBFdmVudEVtaXR0ZXI8RHJvcEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhZGQ6IEV2ZW50RW1pdHRlcjxEcm9wSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPERyb3BJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGRyb3BWaXNpYmxlID0gZmFsc2U7XG4gICAgZHJvcEJ1dHRvblN0eWxlcyA9IFtcbiAgICAgICAgQlVUVE9OX1BPU0lUSU9OUy5hdHRhY2hUb1JpZ2h0LFxuICAgICAgICBCVVRUT05fVFlQRVMucHJpbWFyeSxcbiAgICAgICAgQlVUVE9OX1NUWUxFUy5mbGF0XG4gICAgXTtcbiAgICBmb3VuZEl0ZW1zOiBBcnJheTxEcm9wSXRlbT4gPSBbXTtcbiAgICBvbkNoYW5nZTtcbiAgICBwYXRoOiBBcnJheTxEcm9wSXRlbT4gPSBbXTtcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmc7XG4gICAgc2VhcmNoQWN0aXZlID0gZmFsc2U7XG4gICAgc2VsZWN0ZWRJdGVtOiBEcm9wSXRlbSA9IHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHBhcmVudElkOiBudWxsLFxuICAgICAgICBpZDogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3BTZXJ2aWNlOiBEcm9wU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRyb3BTZXJ2aWNlLnNlbGVjdGVkSXRlbSQuc3Vic2NyaWJlKHNlbGVjdGVkSXRlbSA9PiB0aGlzLnNlbGVjdEl0ZW0oc2VsZWN0ZWRJdGVtKSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZWxlY3RJdGVtKHNlbGVjdGVkSXRlbTogRHJvcEl0ZW0pIHtcbiAgICAgICAgdGhpcy5wYXRoID0gdGhpcy5kcm9wU2VydmljZS5nZXRGdWxsUGF0aChzZWxlY3RlZEl0ZW0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkSXRlbS5pZDtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VsZWN0ZWRJdGVtLnRpdGxlO1xuICAgICAgICB0aGlzLnNlYXJjaEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyb3BWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3BTZXJ2aWNlLnNldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgICAgICBpZiAoY2hhbmdlc1sndmFsdWUnXSAmJiBjaGFuZ2VzWyd2YWx1ZSddLmN1cnJlbnRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbSh0aGlzLmRyb3BTZXJ2aWNlLmdldEl0ZW1CeUlkKHRoaXMudmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZElkcyddKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3BTZXJ2aWNlLnNldERpc2FibGVkSWRzKGNoYW5nZXNbJ2Rpc2FibGVkSWRzJ10uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyb3BUb2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZScsIHRoaXMuZHJvcFZpc2libGUpO1xuICAgICAgICB0aGlzLmRyb3BWaXNpYmxlID0gIXRoaXMuZHJvcFZpc2libGU7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZShvYmo6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZHJvcFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvdW5kSXRlbXMgPSB0aGlzLmRyb3BTZXJ2aWNlLnNlYXJjaEJ5VGl0bGUodGhpcy5zZWFyY2hUZXh0KTtcbiAgICB9XG59XG4iXX0=