import { ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class PartsComponent extends FormControl implements ControlValueAccessor {
    value: string;
    element: ElementRef;
    addButtonClass: string[];
    removeButtonClass: string[];
    onChange: any;
    onTouch: any;
    parts: any[];
    constructor();
    addPart(): void;
    removePart(index: any): void;
    writeValue(obj: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: any): void;
    onKeyUp(event: KeyboardEvent): void;
    protected update(): void;
}
