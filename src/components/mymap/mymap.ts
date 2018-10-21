import { Component } from '@angular/core';

/**
 * Generated class for the MymapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mymap',
  templateUrl: 'mymap.html'
})
export class MymapComponent {

  text: string;

  constructor() {
    console.log('Hello MymapComponent Component');
    this.text = 'Hello World';
  }

}
