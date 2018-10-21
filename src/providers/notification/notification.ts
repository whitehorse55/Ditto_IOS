import { MatchedProvider } from './../matched/matched';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationProvider {

  constructor(public http: HttpClient, public afs: AngularFirestore, public matchprovider : MatchedProvider) {
    console.log('Hello NotificationProvider Provider');
  }

    sendFriendRequest( title ,userid, content)
  {
    let myname = this.matchprovider.getUserinfo()['username']
    return new Promise((resolve, reject)=>{
            
      const notiData = {  
        myid : myname,
        userid : userid,
        content : content,
        title : title
      }
      this.afs.collection('Notification').add(notiData)
    })
  }

  sendMatchRequest(element, namearray, placename)
  {
      let myname = this.matchprovider.getUserinfo()['username']
      return new Promise((resolve, reject)=>{

        element.forEach(userkey => {
          const notiData = {
            myid : myname,
            userid : userkey,
            placename : placename,
            usernames : namearray + myname
          }
          this.afs.collection('NotificationMatch').add(notiData)
        });
      
      })
  }




}
