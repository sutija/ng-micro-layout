import { ComponentFactoryResolver, ComponentRef, EventEmitter, OnChanges, OnDestroy, ViewContainerRef } from '@angular/core';
export declare class TableColumnComponent implements OnChanges, OnDestroy {
    private compiler;
    dataValue: any;
    protected componentRef: ComponentRef<any>;
    protected subscriptions$: any[];
    data: any;
    dataChange: EventEmitter<Boolean>;
    isEditing: Boolean;
    isEditable: Boolean;
    columnType: String;
    columnComponent: ViewContainerRef;
    tableColumnTypes: {
        string: string;
        number: string;
        textarea: string;
        switch: string;
        drop: string;
        component: string;
        date: string;
    };
    constructor(compiler: ComponentFactoryResolver);
    ngOnChanges(newData: any): void;
    handleData(): void;
    render(component: any): void;
    ngOnDestroy(): void;
}
