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
        'password': {
            title: 'Password',
            type: TABLE_COLUMN_TYPES.STRING,
            isEditable: true,
            defaultValue: ''
        },
    }
}

export const TABLE_DATA = [{
    id: 12,
    title: 'test',
    password: 'test',
    other: false,
},
    {
        id: 13,
        password: 'test 9',
        other: false,
    },
    {
        id: 14,
        title: 12345,
        password: 'test 5',
        other: false,
    },
    {
        id: 16,
        title: 'Ovo postoji',
        password: 'password',
        other: false,
        some: 'Ovo ne postoji!'
    },
    {
        id: 15,
        title: 'test 3',
        password: 'test 1',
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
                        value: 'Button--lightPrimary Button--small'
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
                        value: 'Button--light Button--small'
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
        other: 'something',
    }];
