import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ml-slug',
  templateUrl: './slug.component.html',
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: SlugComponent, multi: true}]
})
export class SlugComponent extends FormControl implements ControlValueAccessor {
  @Input() value: string;
  @ViewChild('element') element: ElementRef;
  onChange;
  onTouched;

  constructor() {
    super();
  }

  update() {
      const value = this.element.nativeElement.value.split(' ').join('-').toLowerCase();
      this.value = value;
      this.element.nativeElement.value = value;
      this.onChange(this.value);
  }

  writeValue(obj: string) {
    this.value = obj;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

}
