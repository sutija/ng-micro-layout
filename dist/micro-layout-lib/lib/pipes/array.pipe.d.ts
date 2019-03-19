import { PipeTransform } from '@angular/core';
export declare class ArrayToChunksPipe implements PipeTransform {
    transform(array: Array<any>, numberOfItems: number): any;
}
