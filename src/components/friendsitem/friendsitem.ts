import { Component ,Input, Output, EventEmitter} from '@angular/core';

/**
 * Generated class for the FriendsitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'friendsitem',
  templateUrl: 'friendsitem.html'
})
export class FriendsitemComponent {

 
  // @Input('data') data;
  @Input()
  set data(info)
  {
    this.friendInfo = info
  }

  @Input()
  set index(ind)
  {
      this.item_index = ind
  }

  @Input()
  set kind(kin)
  {
    this.cateogry_type = kin
    console.log("this is category info", this.cateogry_type)
  }

  friendInfo : any = {}
  item_index : any = 0
  cateogry_type : any = ""

  @Output() onClickButtons : EventEmitter<any> = new EventEmitter();

  constructor() {
 
  }

  clickacceptbutton()
  {
      this.onClickButtons.emit({index : this.item_index, type : this.cateogry_type})
  }
}
