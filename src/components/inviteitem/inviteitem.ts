import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the InviteitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inviteitem',
  templateUrl: 'inviteitem.html'
})
export class InviteitemComponent {

  @Input()
  set data(data : any[])
  {
    if(data.length > 0)
    {
      this.itemArray = data
      console.log("this is item info list=========>", this.itemArray)
    }
  }

  @Input()
  set title(title : any)
  {
    this.itemtitle = title
  }

  @Output() onClickCheckBox : EventEmitter<any> = new EventEmitter();

  itemArray : any = []
  itemtitle = ""

  constructor() {
    console.log('Hello InviteitemComponent Component');
  }

  onclickcheckbox(item)
  {
    this.onClickCheckBox.emit(item)
  }

}
