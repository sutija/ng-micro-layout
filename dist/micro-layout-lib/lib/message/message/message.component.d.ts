import { EventEmitter, OnInit } from '@angular/core';
import { MessageType } from './message';
export declare class MessageComponent implements OnInit {
    message: string;
    type: MessageType;
    hasTimeOut: boolean;
    timeout: number;
    close: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    getClass(): string;
    onClose(): void;
}
