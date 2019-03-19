import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ml-alias',
  templateUrl: './alias.component.html',
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: AliasComponent, multi: true}]
})
export class AliasComponent extends FormControl implements ControlValueAccessor {
  @Input() value: string;
  @ViewChild('element') element: ElementRef;
  onChange;
  onTouch;

  constructor() {
    super();
  }

  update() {
      const value = this.element.nativeElement.value.split(' ').join('-').toLowerCase();
      this.value = value;
      this.element.nativeElement.value = value;
      this.onChange(this.value);
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
