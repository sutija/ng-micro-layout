import {NgModule} from '@angular/core';
import {ArrayToChunksPipe} from './array.pipe';

@NgModule({
    declarations: [
        ArrayToChunksPipe
    ],
    exports: [
        ArrayToChunksPipe
    ]
})
export class PipesModule {}
