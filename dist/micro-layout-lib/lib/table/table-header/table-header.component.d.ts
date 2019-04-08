import { TableDataService } from '../table-data.service';
export declare class TableHeaderComponent {
    protected tableDataService: TableDataService;
    data: Object;
    isEditable: boolean;
    constructor(tableDataService: TableDataService);
    getData(): Array<String>;
    sortItems(label: any): void;
}
