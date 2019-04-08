import { OnDestroy, OnInit } from '@angular/core';
import { VirtualGridService } from './virtual-grid.service';
export declare class VirtualGridComponent implements OnInit, OnDestroy {
    private virtualGridService;
    maxRows: number;
    range: any;
    private $visible;
    visible: boolean;
    constructor(virtualGridService: VirtualGridService);
    ngOnInit(): void;
    toggle(e: any): void;
    ngOnDestroy(): void;
}
