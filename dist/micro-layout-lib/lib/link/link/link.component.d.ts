import { Router } from '@angular/router';
import { LinkType } from './link';
export declare class LinkComponent {
    private router;
    title: string;
    target: string;
    type: LinkType;
    constructor(router: Router);
    onClick(): void;
}
