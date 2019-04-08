import { ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class SlugComponent extends FormControl implements ControlValueAccessor {
    value: string;
    element: ElementRef;
    onChange: any;
    onTouched: any;
    constructor();
    update(): void;
    writeValue(obj: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
