/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ArrayToChunksPipe = /** @class */ (function () {
    function ArrayToChunksPipe() {
    }
    /**
     * @param {?} array
     * @param {?} numberOfItems
     * @return {?}
     */
    ArrayToChunksPipe.prototype.transform = /**
     * @param {?} array
     * @param {?} numberOfItems
     * @return {?}
     */
    function (array, numberOfItems) {
        return array.map((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        function (e, i) {
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
        function (item) { return item; }));
    };
    ArrayToChunksPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'arrayToChunks'
                },] }
    ];
    return ArrayToChunksPipe;
}());
export { ArrayToChunksPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQWFBLENBQUM7Ozs7OztJQVRHLHFDQUFTOzs7OztJQUFULFVBQVUsS0FBaUIsRUFBRSxhQUFxQjtRQUM5QyxPQUFPLEtBQUssQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsYUFBYSxLQUFLLENBQUMsRUFBRTtnQkFDekIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsRUFBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFaSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGVBQWU7aUJBQ3hCOztJQVdELHdCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2FycmF5VG9DaHVua3MnXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5VG9DaHVua3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGFycmF5OiBBcnJheTxhbnk+LCBudW1iZXJPZkl0ZW1zOiBudW1iZXIpOiBhbnkge1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSAlIG51bWJlck9mSXRlbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXkuc2xpY2UoaSwgaSArIG51bWJlck9mSXRlbXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSk7XG4gICAgfVxufVxuIl19