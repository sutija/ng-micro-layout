import { ComponentFactoryResolver, ComponentRef, EventEmitter, OnChanges, OnDestroy, ViewContainerRef } from '@angular/core';
export declare class TableColumnComponent implements OnChanges, OnDestroy {
    private compiler;
    dataValue: any;
    protected componentRef: ComponentRef<any>;
    protected subscriptions$: any[];
    data: any;
    dataChange: EventEmitter<Boolean>;
    clicked: EventEmitter<any>;
    isEditing: Boolean;
    isEditable: Boolean;
    columnType: String;
    columnComponent: ViewContainerRef;
    tableColumnTypes: {
        STRING: string;
        NUMBER: string;
        TEXTAREA: string;
        SWITCH: string;
        DROP: string;
        COMPONENT: string;
        DATE: string;
    };
    constructor(compiler: ComponentFactoryResolver);
    ngOnChanges(newData: any): void;
    onElementClick(): void;
    handleData(): void;
    render(component: any): void;
    ngOnDestroy(): void;
}
