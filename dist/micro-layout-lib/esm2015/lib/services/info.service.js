/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
export class InfoService {
    constructor() {
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
    notify(message) {
        this.message.emit(message);
    }
}
InfoService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InfoService.ctorParameters = () => [];
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
export const MessageResolver = (/**
 * @param {?} callbacks
 * @param {?} message
 * @return {?}
 */
(callbacks, message) => {
    callbacks.filter((/**
     * @param {?} callback
     * @return {?}
     */
    callback => callback.type === message.type &&
        callback.message === message.message)).every((/**
     * @param {?} item
     * @return {?}
     */
    item => item.callback(message.data)));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pbmZvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE1BQU0sT0FBTyxXQUFXO0lBVXBCO1FBUk8sWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELGlCQUFZLEdBQUc7WUFDbEIsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1NBQ3JCLENBQUM7SUFFYyxDQUFDOzs7OztJQUVqQixNQUFNLENBQUMsT0FBZ0I7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBZkosVUFBVTs7Ozs7O0lBR1AsOEJBQXVEOztJQUN2RCxtQ0FLRTs7Ozs7QUFTTiw2QkFJQzs7O0lBSEcsdUJBQWE7O0lBQ2IsMEJBQWdCOztJQUNoQix1QkFBVzs7Ozs7QUFHZiw4QkFJQzs7O0lBSEcsd0JBQWE7O0lBQ2IsMkJBQWdCOztJQUNoQiw0QkFBbUI7OztBQUd2QixNQUFNLE9BQU8sZUFBZTs7Ozs7QUFBRyxDQUFDLFNBQTBCLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQzVFLFNBQVMsQ0FBQyxNQUFNOzs7O0lBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJO1FBQ3ZELFFBQVEsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLE9BQU8sRUFBQyxDQUFDLEtBQUs7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7QUFDekYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmZvU2VydmljZSB7XG5cbiAgICBwdWJsaWMgbWVzc2FnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgcHVibGljIG1lc3NhZ2VUeXBlcyA9IHtcbiAgICAgICAgaW5mbzogJ2luZm8nLFxuICAgICAgICBlcnJvcjogJ2Vycm9yJyxcbiAgICAgICAgd2FybmluZzogJ3dhcm5pbmcnLFxuICAgICAgICBzdWNjZXNzOiAnc3VjY2VzcydcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5vdGlmeShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2sge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgTWVzc2FnZVJlc29sdmVyID0gKGNhbGxiYWNrczogQXJyYXk8Q2FsbGJhY2s+LCBtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XG4gICAgY2FsbGJhY2tzLmZpbHRlcihjYWxsYmFjayA9PiBjYWxsYmFjay50eXBlID09PSBtZXNzYWdlLnR5cGUgJiZcbiAgICAgICAgY2FsbGJhY2subWVzc2FnZSA9PT0gbWVzc2FnZS5tZXNzYWdlKS5ldmVyeShpdGVtID0+IGl0ZW0uY2FsbGJhY2sobWVzc2FnZS5kYXRhKSk7XG59O1xuIl19