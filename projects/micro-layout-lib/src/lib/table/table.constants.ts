import {TableOptions} from './table.interface';

export const MESSAGES = {
    ITEM_ADD: 'ITEM_ADD',
    ITEM_EDIT: 'ITEM_EDIT',
    ITEM_EDIT_STARTED: 'ITEM_EDIT_STARTED',
    ITEM_DELETE: 'ITEM_DELETE',
    ITEM_DELETE_CANCELED: 'ITEM_DELETE_CANCELED',
    SORT_CLICK: 'SORT_CLICK',
    MULTIPLE_DELETE: 'MULTIPLE_DELETE',
};

export const CONTEXTS = {
    DEFAULT: 'DEFAUL',
};

export const TABLE_COLUMN_TYPES = {
    STRING: 'STRING',
    NUMBER: 'NUMBER',
    TEXTAREA: 'TEXTAREA',
    SWITCH: 'SWITCH',
    DROP: 'DROP',
    COMPONENT: 'COMPONENT',
    DATE: 'DATE'
};

export type Internal<String> = 'INTERNAL';
export type External<String> = 'EXTERNAL';

export const TABLE_EDIT_TYPE = {
    INTERNAL: 'INTERNAL',
    EXTERNAL: 'EXTERNAL'
};

export const DEFAULT_TABLE_OPTIONS: TableOptions = {
    canAddRows: false,
    canDelete: false,
    editOption: 'INTERNAL',
    isEditable: false,
    isReordable: false,
    isSortable: false,
    schema: {}
};

export const PAGINATION = {
    PREVIOUS: 'PREVIOUS',
    NEXT: 'NEXT'
};
