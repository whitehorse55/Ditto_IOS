
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the MatchedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'matched',
  templateUrl: 'matched.html'
})
export class MatchedComponent {

  // @Input('data') data;
  @Input()
  set data(data: any) {
    console.log("this is data information", data)
    if(data != null)
    {
      this.mydata = data;
      this.isValid = true
      // console.log("thsifsifsd",this.data)
    }
    
  }
  @Output() onClickSomethingUp : EventEmitter<any> = new EventEmitter();

  mydata : any;
  isValid  : boolean

  constructor() {
    this.isValid = false
    this.mydata = {}
  }

    onclickButton(key)
  {
    this.onClickSomethingUp.emit(key)
  }

}
