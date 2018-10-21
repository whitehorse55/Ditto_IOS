import { NgModule } from '@angular/core';
import { SortPipe } from './sort/sort';
import { RemovecommandPipe } from './removecommand/removecommand';
import { AlphabetaPipe } from './alphabeta/alphabeta';
@NgModule({
	declarations: [SortPipe,
    RemovecommandPipe,
    AlphabetaPipe,
    AlphabetaPipe],
	imports: [],
	exports: [SortPipe,
    RemovecommandPipe,
    AlphabetaPipe,
    AlphabetaPipe]
})
export class PipesModule {}
