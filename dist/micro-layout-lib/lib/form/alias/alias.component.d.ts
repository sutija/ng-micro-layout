import { ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class AliasComponent extends FormControl implements ControlValueAccessor {
    value: string;
    element: ElementRef;
    onChange: any;
    onTouch: any;
    constructor();
    update(): void;
    writeValue(obj: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: any): void;
}
