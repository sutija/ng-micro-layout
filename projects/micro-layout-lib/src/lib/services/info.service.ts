import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class InfoService {

    public message: EventEmitter<any> = new EventEmitter();
    public messageTypes = {
        info: 'info',
        error: 'error',
        warning: 'warning',
        success: 'success'
    };

    constructor() { }

    notify(message: Message) {
        this.message.emit(message);
    }
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

export const MessageResolver = (callbacks: Array<Callback>, message: Message) => {
    callbacks.filter(callback => callback.type === message.type &&
        callback.message === message.message).every(item => item.callback(message.data));
};
