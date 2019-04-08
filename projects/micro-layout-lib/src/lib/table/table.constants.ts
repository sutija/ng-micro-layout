import {TableOptions} from './table.interface';

export const TABLE_COLUMN_TYPES = {
    string: 'string',
    number: 'number',
    textarea: 'textarea',
    switch: 'switch',
    drop: 'drop',
    component: 'component',
    date: 'date'
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
    previous: 'previous',
    next: 'next',
};
