import { Subject } from 'rxjs';
export declare class CardService {
    private isCollapsed;
    private canCollapse;
    readonly isCollapsed$: Subject<boolean>;
    readonly canCollapse$: Subject<boolean>;
    constructor();
    setCanCollapse(canCollapse: boolean): void;
    setIsCollapsed(isCollapsed: boolean): void;
    toggleCollapsed(): void;
}
