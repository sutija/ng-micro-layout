export interface Link {
    id?: Number | String;
    title: String;
    label: String;
    link: String;
    target: String;
}

export interface Drop {
    id?: Number | String;
    label: String;
    value: String | Number | Boolean;
}

export interface TableOptionsArray {
    [index: string]: TableOptions;
}

export interface TableColumnSchema {
    defaultValue: any;
    isEditable?: Boolean;
    isSortable?: Boolean;
    link?: Link;
    title: String;
    type?: String;
}

export interface TableColumDataComponent {
    component: any;
    componentParams: Array<TableColumnDataComponentParam>;
}

export interface TableColumnDataComponentParam {
    name: string;
    value: any;
}

/**
 * id Must match table column id
 */
export interface TableHeaderColumn {
    id: String;
    title: String;
}

export interface TableRow {
    _id: number | string;
    _options?: {
        _backgroundClass?: Array<string>;
        _backgroundColor?: string;
        _iconUrl?: string;
        _message?: Array<string>;
        _validation?: Array<string>;
    };
}

export interface TableHeader {
    columns: Array<TableHeaderColumn>;
}

export interface Table {
    header: TableSchema;
    data: Array<TableRow>;
    numberOfPages: number;
    currentPage: number;
    footer?: {
        elements: Array<any>;
    };
}

export interface TableSchema {
    [key: string]: TableColumnSchema;
}

export type editOptions = 'internal' | 'external';

export interface TableOptions {
    canAddRows?: boolean;
    canDelete?: boolean;
    canChangeNumberOfItems?: boolean;
    editOption?: editOptions;
    isEditable?: boolean;
    isSortable?: boolean;
    isReordable?: boolean;
    numberOfItems?: Array<number>;
    schema: TableSchema;
    isInternalPagination?: boolean;
}

export interface PagesInfo {
    pageNo: number;
    totalPages: number;
}
