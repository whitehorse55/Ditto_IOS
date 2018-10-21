import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SMS } from '@ionic-native/sms';

/*
  Generated class for the SmsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmsProvider {

  constructor(public http: HttpClient, public sms: SMS) {
    console.log('Hello SmsProvider Provider');
  }




  sendTextMessages(phonenumber, message) {
    return new Promise((resolve, reject) => {

      console.log("this is phonenumbers array", phonenumber)

      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          intent: 'INTENT' // Opens Default sms app
          //intent: '' // Sends sms without opening default sms app
        },
        intent: 'INTENT'
      };

          console.log("this is persmision")
          this.sms
          .send(phonenumber, message, options)
          .then(
            (succ) => {
                resolve(true)
            },
            (err) => {
              console.log("this si multi smsss error", err)
              reject(false)
            }
          )
          .catch(err => {
            console.log("this si multi sms error", err)
            reject(err)
          });
        
      });
  }

}
