import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RemovecommandPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'removecommand',
})
export class RemovecommandPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<any>, ...args) {
    var checkstring = ''
    value.forEach(element => {
      checkstring = checkstring   + element['title'] + "," 
    
    });

  checkstring = checkstring.slice(0, checkstring.length -1)
  console.log("this is check list", checkstring)
    return checkstring
  }
}
