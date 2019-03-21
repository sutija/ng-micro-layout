import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MessageType} from './message';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ml-message',
    templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
    @Input() message: string;
    @Input() type: MessageType;

    constructor() {
    }

    ngOnInit() {
    }

    getClass() {
        return `message ${this.type}`;
    }
}
