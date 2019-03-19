/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
var InfoService = /** @class */ (function () {
    function InfoService() {
        this.message = new EventEmitter();
        this.messageTypes = {
            info: 'info',
            error: 'error',
            warning: 'warning',
            success: 'success'
        };
    }
    /**
     * @param {?} message
     * @return {?}
     */
    InfoService.prototype.notify = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.message.emit(message);
    };
    InfoService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InfoService.ctorParameters = function () { return []; };
    return InfoService;
}());
export { InfoService };
if (false) {
    /** @type {?} */
    InfoService.prototype.message;
    /** @type {?} */
    InfoService.prototype.messageTypes;
}
/**
 * @record
 */
export function Message() { }
if (false) {
    /** @type {?} */
    Message.prototype.type;
    /** @type {?} */
    Message.prototype.message;
    /** @type {?|undefined} */
    Message.prototype.data;
}
/**
 * @record
 */
export function Callback() { }
if (false) {
    /** @type {?} */
    Callback.prototype.type;
    /** @type {?} */
    Callback.prototype.message;
    /** @type {?} */
    Callback.prototype.callback;
}
/** @type {?} */
export var MessageResolver = (/**
 * @param {?} callbacks
 * @param {?} message
 * @return {?}
 */
function (callbacks, message) {
    callbacks.filter((/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) { return callback.type === message.type &&
        callback.message === message.message; })).every((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.callback(message.data); }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pbmZvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBV0k7UUFSTyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsaUJBQVksR0FBRztZQUNsQixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7U0FDckIsQ0FBQztJQUVjLENBQUM7Ozs7O0lBRWpCLDRCQUFNOzs7O0lBQU4sVUFBTyxPQUFnQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFmSixVQUFVOzs7O0lBZ0JYLGtCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxXQUFXOzs7SUFFcEIsOEJBQXVEOztJQUN2RCxtQ0FLRTs7Ozs7QUFTTiw2QkFJQzs7O0lBSEcsdUJBQWE7O0lBQ2IsMEJBQWdCOztJQUNoQix1QkFBVzs7Ozs7QUFHZiw4QkFJQzs7O0lBSEcsd0JBQWE7O0lBQ2IsMkJBQWdCOztJQUNoQiw0QkFBbUI7OztBQUd2QixNQUFNLEtBQU8sZUFBZTs7Ozs7QUFBRyxVQUFDLFNBQTBCLEVBQUUsT0FBZ0I7SUFDeEUsU0FBUyxDQUFDLE1BQU07Ozs7SUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUk7UUFDdkQsUUFBUSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsT0FBTyxFQURYLENBQ1csRUFBQyxDQUFDLEtBQUs7Ozs7SUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQUM7QUFDekYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmZvU2VydmljZSB7XG5cbiAgICBwdWJsaWMgbWVzc2FnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgcHVibGljIG1lc3NhZ2VUeXBlcyA9IHtcbiAgICAgICAgaW5mbzogJ2luZm8nLFxuICAgICAgICBlcnJvcjogJ2Vycm9yJyxcbiAgICAgICAgd2FybmluZzogJ3dhcm5pbmcnLFxuICAgICAgICBzdWNjZXNzOiAnc3VjY2VzcydcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5vdGlmeShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2sge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgTWVzc2FnZVJlc29sdmVyID0gKGNhbGxiYWNrczogQXJyYXk8Q2FsbGJhY2s+LCBtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XG4gICAgY2FsbGJhY2tzLmZpbHRlcihjYWxsYmFjayA9PiBjYWxsYmFjay50eXBlID09PSBtZXNzYWdlLnR5cGUgJiZcbiAgICAgICAgY2FsbGJhY2subWVzc2FnZSA9PT0gbWVzc2FnZS5tZXNzYWdlKS5ldmVyeShpdGVtID0+IGl0ZW0uY2FsbGJhY2sobWVzc2FnZS5kYXRhKSk7XG59O1xuIl19