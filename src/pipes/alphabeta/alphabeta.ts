import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AlphabetaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'alphabeta',
})
export class AlphabetaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(array: Array<any>, args: string): Array<any> {
    if(array === undefined){return null;}
    array.sort((a: any, b: any) => {
      if (a.displayName.toUpperCase() < b.displayName.toUpperCase()) {
        return -1;
      } else if (a.displayName.toUpperCase() > b.displayName.toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
