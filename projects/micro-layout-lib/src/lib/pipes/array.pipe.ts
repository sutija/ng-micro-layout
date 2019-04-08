import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayToChunks'
})
export class ArrayToChunksPipe implements PipeTransform {
    transform(array: Array<any>, numberOfItems: number): any {
        return array.map((e, i) => {
            if (i % numberOfItems === 0) {
                return array.slice(i, i + numberOfItems);
            } else {
                return null;
            }
        }).filter(item => item);
    }
}
