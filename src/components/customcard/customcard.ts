import { Component, Output, EventEmitter, Input , ChangeDetectorRef} from '@angular/core';

/**
 * Generated class for the CustomcardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customcard',
  templateUrl: 'customcard.html'
})
export class CustomcardComponent {

  @Input('data') data;
  @Output() itemBtnClick : EventEmitter<any> = new EventEmitter();

  text: string;

  constructor() {
    console.log('Hello CustomcardComponent Component');
  }

  btnClick(key : any)
  {
      this.itemBtnClick.emit(key)
  }

}
