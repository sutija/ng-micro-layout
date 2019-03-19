import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VirtualGridService} from './virtual-grid.service';

@Component({
    selector: 'ml-virtual-grid',
    templateUrl: './virtual-grid.component.html',
    styleUrls: ['./virtual-grid.component.css'],
    providers: [VirtualGridService]
})
export class VirtualGridComponent implements OnInit, OnDestroy {
    @Input() maxRows = 24;
    range;
    private $visible;
    visible = false;

    constructor(private virtualGridService: VirtualGridService) {}

    ngOnInit() {
        this.range = new Array(this.maxRows).fill(null);
        this.$visible = this.virtualGridService.$visible
            .subscribe(visible => this.visible = visible);
    }

    toggle(e) {
        console.log(e);
    }

    ngOnDestroy() {
        this.$visible.unsubscribe();
    }

}
