/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class ArrayToChunksPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pY3JvLWxheW91dC1saWIvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBQzFCLFNBQVMsQ0FBQyxLQUFpQixFQUFFLGFBQXFCO1FBQzlDLE9BQU8sS0FBSyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsYUFBYSxLQUFLLENBQUMsRUFBRTtnQkFDekIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsRUFBQyxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDO0lBQzVCLENBQUM7OztZQVpKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsZUFBZTthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdhcnJheVRvQ2h1bmtzJ1xufSlcbmV4cG9ydCBjbGFzcyBBcnJheVRvQ2h1bmtzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShhcnJheTogQXJyYXk8YW55PiwgbnVtYmVyT2ZJdGVtczogbnVtYmVyKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgJSBudW1iZXJPZkl0ZW1zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5LnNsaWNlKGksIGkgKyBudW1iZXJPZkl0ZW1zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmZpbHRlcihpdGVtID0+IGl0ZW0pO1xuICAgIH1cbn1cbiJdfQ==