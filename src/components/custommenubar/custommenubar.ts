import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the CustommenubarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custommenubar',
  templateUrl: 'custommenubar.html'
})
export class CustommenubarComponent {

  @Input('data') data;
  @Output() onclickMenubar : EventEmitter<any> = new EventEmitter();

  height_margin : any
  constructor(public platform : Platform) {
    console.log('Hello CustommenubarComponent Component');
    this.height_margin = 0
    this.setStatusBarMargin()
  }

  onclickButtons(key : any)
  {
      this.onclickMenubar.emit(key)
  }

  setStatusBarMargin()
  {
    if(this.platform.is('android'))
    {
        this.height_margin = 10 + 'px'
    }else(this.platform.is('ios'))
    {
        this.height_margin = 30 + 'px'
    }
  }

}