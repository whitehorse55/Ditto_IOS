import { Component, Input, Output, EventEmitter } from '@angular/core';


/**
 * Generated class for the YelpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'yelp',
  templateUrl: 'yelp.html',
})

export class YelpComponent {

  @Input()
  set places(place :  any)
  {
    this.place = place
    console.log("yelp on data", this.place)
    this.placeCategoryString = this.generateCategoryStrings()
  }

  @Input()
  set index(index : any)
  {
      this.placeindex = index
  }

  // @Input()
  // set type(type : any)
  // {
  //     this.placetype = type
  // }

  @Output() onClickComponent : EventEmitter<any> = new EventEmitter()


  place : any
  placeindex : any
  // placetype : any;
  placeCategoryString : any

  constructor() {
    this.place = {}
    this.placeindex = 0
    this.placeCategoryString = ""
    console.log('Hello YelpCom`ponent Component');

  }

  generateCategoryStrings()
  {
    var checkstring = ''
    this.place.place_category.forEach(element => {
      checkstring = checkstring   + element['title'] + "," 
    
    });

    checkstring = checkstring.slice(0, checkstring.length -1)
    return checkstring
  }

  onclickItems(type)
  {
    this.onClickComponent.emit({type : type, index : this.placeindex})
  }

}
