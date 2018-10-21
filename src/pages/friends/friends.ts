import { ChatproviderProvider } from './../../providers/chatprovider/chatprovider';
import { NotificationProvider } from './../../providers/notification/notification';
import { FormControl } from '@angular/forms';
import { MatchedProvider } from './../../providers/matched/matched';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../Model/User';

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {
  friendList: Array<any>;
  friendTempList: Array<any>;
  kind: any;

  searching: boolean;
  searchControl: FormControl;
  searchTerm: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public matchedprovider: MatchedProvider,
    public authprovider: AuthProvider,
    public notiprovider : NotificationProvider,
    public chatprovider : ChatproviderProvider
  ) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.kind = this.navParams.get('kind');
    console.log('this is kind info', this.kind);
    this.friendList = [];
    this.friendTempList = [];

    if (this.kind == 'myfriends') {
      this.getMyFriendsList();
      this.setSearchBarInfo()
    } else if (this.kind == 'request') {
      this.getRequestfriendList();
      this.setSearchBarInfo()
    }else if(this.kind == 'block')
    {
      this.getBlockedUserList();
      this.setSearchBarInfo()
    }else {
      this.kind = "Find & Invite Friends"
    }

  }

  setSearchBarInfo() {
  
    this.searching = false;
    this.searchTerm = '';

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilterItems();
    });
  }

  //////////////////function : when enter search key in search bar /////////////////////////
  setFilterItems() {
    console.log('this is filter input', this.friendList, this.friendTempList);
    if (this.searchTerm == '') {
      this.friendList = this.friendTempList;
      console.log('this is contact list', this.friendList);
    } else {
      this.friendList = this.filterItems(this.searchTerm);
      console.log('this is contact list fileter', this.friendList);
    }
  }

  /////////////////function : get search result array fromm search key///////////////////
  filterItems(searchTerm) {
    return this.friendTempList.filter(contactmodel => {
      return (
        contactmodel.username.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
      );
    });
  }

  onSearchInput() {
    this.searching = true;
  }

  getBlockedUserList()
  {
      this.chatprovider.getBlockedUsers().then(succ=>{
          this.saveFriendsInfoFromFirestore(succ)
      }).catch(err=>{

      })
  }

  getMyFriendsList() {
    this.matchedprovider
      .getMyfriendsList()
      .then(sucess => {
        this.saveFriendsInfoFromFirestore(sucess);
      })
      .catch(err => {
        alert(err);
      });
  }

  // get requested users
  getRequestfriendList() {
    this.matchedprovider
      .getRequestList()
      .then(success => {
        this.saveFriendsInfoFromFirestore(success);
      })
      .catch(err => {
        console.log('this is error list', err);
      });
  }

  saveFriendsInfoFromFirestore(infoarray) {
    
    this.friendList = []
    this.friendTempList = []

    infoarray.forEach(element => {
      this.authprovider.getFrindsInfoFromId(element['userkey']).then(result => {
        let usermodel = new User();
        usermodel.username = result[0]['username'];
        usermodel.photoUrl = result[0]['imagearray'];
        usermodel.id = result[0]['id'];
        usermodel.email = result[0]['email'];
        usermodel.countrycode = result[0]['countrycode'];
        usermodel.phonenumber = result[0]['phonenumber'];
       
        this.friendList.push(usermodel);
        this.friendTempList.push(usermodel)
      });
    });
  }

  onclickCancel() {
    this.navCtrl.pop();
  }

  onclickbutton(info) {
    console.log('this is infolist', info);
    let user = this.friendList[info['index']];
    if (info['type'] == 'request') {
      this.sendAcceptRequest(user['id'], info['index']);

    } else if (info['type'] == 'myfriends') {
      console.log("this is remove", info)
      this.sendRemoveRequest(user['id'], info['index'])
    } else if(info['type'] == 'block')
    {
      this.sendUnblockRequest(user['id'], info['index'])
    }
  }

  sendUnblockRequest(userkey, index)
  {
      
      this.matchedprovider.sendUnblockFriendsRequest(userkey).then(succ=>{
        this.friendList.splice(index,1)
        this.friendTempList.splice(index,1)
      }).catch(er=>{
        alert(er)
      })
  }

  sendRemoveRequest(userkey, index)
  {
      this.matchedprovider.sendRemoveFriendsRequest(userkey).then(success=>{
        this.friendList.splice(index,1)
        this.friendTempList.splice(index,1)
      }).catch(error=>{
        alert(error)
      })
  }

  ////////////////// send accept request /////////////////////////
  sendAcceptRequest(userkey, index) {
    this.matchedprovider
      .sendAcceptRequest(userkey)
      .then(success => {
        ////////////////////////send notification////////////
        let content = "has added you as a friend. Start swiping to find a place to go.";
        this.notiprovider.sendFriendRequest( "Good News" ,userkey, content);
   
        this.friendList.splice(index, 1);
        this.friendTempList.splice(index,1)
      })
      .catch(err => {});
  }

  /////////////////////////////////////////////////////////////////
}
