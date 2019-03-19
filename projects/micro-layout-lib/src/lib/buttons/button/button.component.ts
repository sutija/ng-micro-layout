import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'ml-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() types: Array<string> = [];
  @Input() type = 'button';
  @Input() title: boolean|string = false;
  @Output() clicked = new EventEmitter();

  @HostListener('click') emitClick() {
    this.clicked.emit(true);
  }

  constructor() { }

  getClass() {
    return `button ${this.types.join(' ')}`;
  }

}
