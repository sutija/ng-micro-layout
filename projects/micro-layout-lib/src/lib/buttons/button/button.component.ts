import {Component, Input} from '@angular/core';

@Component({
  selector: 'ml-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() types: Array<string> = [];
  @Input() type = 'button';

  constructor() { }

  getClass() {
    return `button ${this.types.join(' ')}`;
  }

}
