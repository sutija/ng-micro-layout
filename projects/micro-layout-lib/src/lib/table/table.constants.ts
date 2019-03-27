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

export const CONTEXT = {
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

export const DEFAULT_TABLE_OPTIONS: TableOptions = {
    canAddRows: false,
    canDelete: false,
    editOption: 'internal',
    isEditable: false,
    isDraggable: false,
    isSortable: false,
    numberOfItems: [50, 100, 200],
    schema: {}
};

export const PAGINATION = {
    PREVIOUS: 'PREVIOUS',
    NEXT: 'NEXT'
};
