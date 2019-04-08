import { EventEmitter } from '@angular/core';
export declare class ButtonComponent {
    disabled: boolean;
    types: Array<string>;
    type: string;
    title: boolean | string;
    clicked: EventEmitter<{}>;
    emitClick(): void;
    constructor();
    getClass(): string;
}
