import { TableRow } from '../table.interface';
export declare class TableContainerComponent {
    data: Array<TableRow>;
    isEditable: Boolean;
    constructor();
    getClass(data: any): string;
}
