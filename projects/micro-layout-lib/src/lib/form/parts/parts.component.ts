import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BUTTON_POSITIONS, BUTTON_STYLES, BUTTON_TYPES} from '../../buttons/button/button.constants';

@Component({
  selector: 'ml-parts',
  templateUrl: './parts.component.html',
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: PartsComponent, multi: true}]
})
export class PartsComponent extends FormControl implements ControlValueAccessor {
  @Input() value: string;
  @ViewChild('element') element: ElementRef;
  addButtonClass = [
      BUTTON_STYLES.flat,
      BUTTON_POSITIONS.attachToRight
  ];
  removeButtonClass = [
    BUTTON_STYLES.flat,
    BUTTON_POSITIONS.attachToRight
  ];
  onChange;
  onTouch;
  parts = [];

  constructor() {
    super();
  }

  addPart() {
    const element = this.element.nativeElement;
    if (element.value.trim().length > 0) {
      this.parts.push(element.value.trim());
      element.value = '';
      this.update();
    }
  }

  removePart(index) {
    this.parts.splice(index, 1);
    this.update();
  }

  writeValue(obj: string): void {
    this.value = obj;
    if (this.value) {
      this.parts = this.value.split(',');
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    if (event.code === 'Enter') {
      this.addPart();
    }
  }

  protected update() {
    this.value = this.parts.join(',');
    this.onChange(this.value);
    this.onTouch(true);
  }

}
