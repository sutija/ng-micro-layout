import { EventEmitter } from '@angular/core';
export declare class InfoService {
    message: EventEmitter<any>;
    messageTypes: {
        info: string;
        error: string;
        warning: string;
        success: string;
    };
    constructor();
    notify(message: Message): void;
}
export interface Message {
    type: string;
    message: string;
    data?: any;
}
export interface Callback {
    type: string;
    message: string;
    callback: Function;
}
export declare const MessageResolver: (callbacks: Callback[], message: Message) => void;
