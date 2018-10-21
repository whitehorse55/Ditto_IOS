import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the EmptychatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'emptychat',
  templateUrl: 'emptychat.html'
})
export class EmptychatComponent {

  @Output() onclickMenubar : EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('Hello EmptychatComponent Component');
  }

  onclickbutton()
  {
    this.onclickMenubar.emit('click')
  }
}
