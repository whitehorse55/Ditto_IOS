import { Component ,Output, EventEmitter, Input} from '@angular/core';

/**
 * Generated class for the ChatitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chatitem',
  templateUrl: 'chatitem.html'
})
export class ChatitemComponent {

  @Input()
  set data(info){
    this.mydata = info
    console.log('asssss====================================');
    console.log(this.mydata);
    console.log('====================================');
  }

  @Input()
  set index(ind)
  {
      this.myindex = ind
  }

  @Output() onclickItem : EventEmitter<any> = new EventEmitter();

  text: string;
  mydata : any = {};
  myindex : any = 0

  constructor() {
    console.log('Hello ChatitemComponent Component');
    this.text = 'Hello World';
    
    this.mydata = {}
  }

  onclickitem(info)
  {
    this.onclickItem.emit({index : this.myindex, type : info})   
  }
}
