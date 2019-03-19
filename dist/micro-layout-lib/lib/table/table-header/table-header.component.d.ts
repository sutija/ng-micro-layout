import { TableMessagingService } from '../table-messaging.service';
export declare class TableHeaderComponent {
    protected tableMessagingService: TableMessagingService;
    data: Object;
    isEditable: boolean;
    constructor(tableMessagingService: TableMessagingService);
    getData(): Array<String>;
    sortItems(label: any): void;
}
