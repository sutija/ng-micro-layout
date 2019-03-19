import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ml-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  @Input() message: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

  getClass() {
    return `message ${this.type}`;
  }

}
