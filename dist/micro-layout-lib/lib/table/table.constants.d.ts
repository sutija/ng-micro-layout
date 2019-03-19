import { TableOptions } from './table.interface';
export declare const MESSAGES: {
    ITEM_ADD: string;
    ITEM_EDIT: string;
    ITEM_EDIT_STARTED: string;
    ITEM_DELETE: string;
    ITEM_DELETE_CANCELED: string;
    SORT_CLICK: string;
    MULTIPLE_DELETE: string;
};
export declare const CONTEXTS: {
    DEFAULT: string;
};
export declare const TABLE_COLUMN_TYPES: {
    STRING: string;
    NUMBER: string;
    TEXTAREA: string;
    SWITCH: string;
    DROP: string;
    COMPONENT: string;
    DATE: string;
};
export declare type Internal<String> = 'INTERNAL';
export declare type External<String> = 'EXTERNAL';
export declare const TABLE_EDIT_TYPE: {
    INTERNAL: string;
    EXTERNAL: string;
};
export declare const DEFAULT_TABLE_OPTIONS: TableOptions;
export declare const PAGINATION: {
    PREVIOUS: string;
    NEXT: string;
};
