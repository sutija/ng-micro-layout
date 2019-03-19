import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'ml-switch',
    templateUrl: './switch.component.html',
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: SwitchComponent, multi: true}]
})
export class SwitchComponent extends FormControl implements ControlValueAccessor {
    @Output() change: EventEmitter<boolean> = new EventEmitter();
    @Input() value: boolean | number = false;
    onChange;

    constructor() {
        super();
    }

    toggleOnOff() {
        this.value = !this.value;

        if (this.onChange) {
            this.onChange(this.value);
        }

        this.change.emit(this.value);
    }

    writeValue(obj: number): void {
        this.value = obj;
    }

    registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }
}
