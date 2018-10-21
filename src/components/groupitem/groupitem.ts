import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the GroupitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'groupitem',
  templateUrl: 'groupitem.html'
})
export class GroupitemComponent {
  @Input()
  set data(data)
  {
    console.log("this si chcsceececece", data.length)
    if(data.length > 0)
    {
      this.itemArray = data
      console.log("this is group item info list=========>", this.itemArray)
      console.log("this is group item info list=========>", this.itemArray.length)

      // this.saveNameStrings(data)

    }
  }

  @Input()
  set title(title : any)
  {
    this.itemtitle = title
  }

  @Output() onClickCheckBox : EventEmitter<any> = new EventEmitter();
  @Output() onClickItems : EventEmitter<any> = new EventEmitter();

  itemArray : any = []
  itemtitle = ""

  nameString = ""
  nameStringArray = []

  constructor() {
    console.log('Hello InviteitemComponent Component');
  }

  saveNameStrings(data)
  {
    console.log("this is itemarray length", data.length)
    for(var i = 0 ; i < data.length; i++)
    {
      var str = this.generateNameString(data[i])
      console.log("this is str info", str)
      this.nameStringArray.push(str)
    }
  }

  onclickItem(item){
      this.onClickItems.emit(item)
  }
  onclickcheckbox(item)
  {
    this.onClickCheckBox.emit(item)
  }

  generatePlaceString(iteminfo)
  {
    console.log("this is stringsdf info", iteminfo)
      let string = ""
      let array_places = iteminfo['places']
      if(array_places.length <= 2)
      {
        for(let i = 0 ; i < array_places.length ; i++)
        {
          if(i == array_places.length - 1)
          {
            string = string +  array_places[i]['placename']
            console.log("this is stringdddd info", string)
            return string

          }else{
            string = string +  array_places[i]['placename'] + ","
          } 
        }
        
      }else{

            let left_member = array_places.length - 2
            string = array_places[0]['placename'] + ", " + array_places[1]['placename'] + " + " +  String(left_member)
            console.log("this is stringeeeee info", string)
            return string
      }
  }

  generateNameString(iteminfo)
  {
      let string = ""
      let array_member = iteminfo['member']
      if(array_member.length <= 3)
      {
        for(let i = 0 ; i < array_member.length ; i++)
        {

          if(i == array_member.length - 1)
          {
            string = string +  array_member[i]['displayName']
            return string

          }else{
            string = string +  array_member[i]['displayName'] + ","
          } 
        }
        
      }else{
          let left_member = array_member.length - 2
          string = array_member[0]['displayName'] + ", " + array_member[1]['displayName'] + " + " +  String(left_member)
          return string
      }
  }


}
