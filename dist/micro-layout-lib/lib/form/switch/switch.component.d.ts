import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class SwitchComponent extends FormControl implements ControlValueAccessor {
    change: EventEmitter<boolean>;
    value: boolean | number;
    onChange: any;
    constructor();
    toggleOnOff(): void;
    writeValue(obj: number): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: any): void;
}
