import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageType} from './message';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ml-message',
    templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
    @Input() message: string;
    @Input() type: MessageType;
    @Input() hasTimeOut = false;
    @Input() timeout = 1000;
    @Output() close: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        if (this.hasTimeOut) {
            setTimeout(() => {
                this.close.emit(true);
            }, this.timeout);
        }
    }

    getClass() {
        return `message ${this.type}`;
    }

    onClose() {
        this.close.emit(true);
    }
}
