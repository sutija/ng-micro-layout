import {ButtonComponent} from '../../projects/micro-layout-lib/src/lib/buttons/button/button.component';
import {TABLE_COLUMN_TYPES} from '../../projects/micro-layout-lib/src/lib/table/table.constants';
import {TableOptions} from '../../projects/micro-layout-lib/src/lib/table/table.interface';

export const TABLE_OPTIONS: TableOptions = {
    isEditable: true,
    canAddRows: true,
    canChangeNumberOfItems: true,
    canDelete: true,
    editOption: 'internal',
    isDraggable: false,
    isSortable: true,
    isInternalPagination: true,
    numberOfItems: [2, 10, 20, 50],
    schema: {
        'other': {
            title: 'Other',
            type: TABLE_COLUMN_TYPES.switch,
            isEditable: true,
            defaultValue: false
        },
        'id': {
            title: 'ID',
            type: TABLE_COLUMN_TYPES.number,
            isEditable: true,
            defaultValue: 0
        },
        'title': {
            title: 'Title',
            type: TABLE_COLUMN_TYPES.string,
            isEditable: true,
            defaultValue: ''
        },
        'component': {
            title: 'Component',
            type: TABLE_COLUMN_TYPES.component,
            isEditable: false,
            defaultValue: null
        },
        'something': {
            title: 'Something',
            type: TABLE_COLUMN_TYPES.string,
            isEditable: true,
            defaultValue: ''
        },
    }
};

export const TABLE_DATA = [
    {
        _id: 1,
        id: 12,
        title: 'test',
        something: 'test',
        other: false,
    },
    {
        _id: 2,
        id: 13,
        something: 'test 9',
        other: false,
    },
    {
        _id: 3,
        id: 14,
        title: 12345,
        something: 'test 5',
        other: false,
    },
    {
        _id: 4,
        id: 16,
        title: 'Exists',
        something: 'password',
        other: false,
        some: 'Doesn\'t exists'
    },
    {
        _id: 5,
        id: 15,
        title: 'test 3',
        something: 'test 1',
        component: [
            {
                component: ButtonComponent,
                componentParams: [
                    {
                        name: 'title',
                        value: 'Button 1'
                    },
                    {
                        name: 'className',
                        value: 'button button-primary'
                    },
                    {
                        name: 'clicked',
                        value: () => {
                            console.log('clicked');
                        }
                    }
                ]
            },
            {
                component: ButtonComponent,
                componentParams: [
                    {
                        name: 'title',
                        value: 'Button 2'
                    },
                    {
                        name: 'className',
                        value: 'button button-primary'
                    },
                    {
                        name: 'clicked',
                        value: () => {
                            console.log('clicked button 2');
                        }
                    }
                ]
            }
        ],
        other: true,
    }
];
