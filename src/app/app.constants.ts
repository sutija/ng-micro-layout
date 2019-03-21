import {ButtonComponent} from '../../projects/micro-layout-lib/src/lib/buttons/button/button.component';
import {TABLE_COLUMN_TYPES} from '../../projects/micro-layout-lib/src/lib/table/table.constants';
import {TableOptions} from '../../projects/micro-layout-lib/src/lib/table/table.interface';

export const TABLE_OPTIONS: TableOptions = {
    isEditable: true,
    canAddRows: true,
    canDelete: true,
    editOption: 'INTERNAL',
    isReordable: false,
    isSortable: true,
    isInternalPagination: true,
    schema: {
        'other': {
            title: 'Other',
            type: TABLE_COLUMN_TYPES.SWITCH,
            isEditable: true,
            defaultValue: false
        },
        'id': {
            title: 'ID',
            type: TABLE_COLUMN_TYPES.NUMBER,
            isEditable: true,
            defaultValue: 0
        },
        'title': {
            title: 'Title',
            type: TABLE_COLUMN_TYPES.STRING,
            isEditable: true,
            defaultValue: ''
        },
        'component': {
            title: 'Component',
            type: TABLE_COLUMN_TYPES.COMPONENT,
            isEditable: false,
            defaultValue: null
        },
        'something': {
            title: 'Something',
            type: TABLE_COLUMN_TYPES.STRING,
            isEditable: true,
            defaultValue: ''
        },
    }
};

export const TABLE_DATA = [{
    id: 12,
    title: 'test',
    something: 'test',
    other: false,
},
    {
        id: 13,
        something: 'test 9',
        other: false,
    },
    {
        id: 14,
        title: 12345,
        something: 'test 5',
        other: false,
    },
    {
        id: 16,
        title: 'Exists',
        something: 'password',
        other: false,
        some: 'Doesn\'t exists'
    },
    {
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
    }];
