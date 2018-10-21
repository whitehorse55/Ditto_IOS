import { AdmobserviceProvider } from './../../providers/admobservice/admobservice';
import { GroupChatModel } from './../../Model/ChatModel';
import { AdMobPro } from '@ionic-native/admob-pro';
import { NotificationProvider } from './../../providers/notification/notification';
import { AngularFirestore } from 'angularfire2/firestore';
import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { MatchedProvider } from './../../providers/matched/matched';
import { ChatproviderProvider } from './../../providers/chatprovider/chatprovider';
import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Content,
  ModalController,
  ActionSheetController,
  Platform
} from 'ionic-angular';
import { AlertService } from '../../providers/Utils/alert.service';
import { EmailComposer } from '@ionic-native/email-composer';
import { Keyboard } from '@ionic-native/keyboard';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GroupProvider } from '../../providers/group/group';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-groupchatroom',
  templateUrl: 'groupchatroom.html'
})
export class GroupchatroomPage {
  @ViewChild('content')
  content: Content;
  @ViewChild('chat_input')
  message_input;
  // showKeyboard = false;
  keyboardHeight: any;

  message: any;
  passdata: any;
  messagesArray: Array<any>;

  myinfo: any;

  userPlaces : any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private chatprovider: ChatproviderProvider,
    private matchprovider: MatchedProvider,
    private localstorage: LocalstorageProvider,
    private firestore: AngularFirestore,
    private modalCtrl: ModalController,
    private notiprovider: NotificationProvider,
    private actionsheetCtrl: ActionSheetController,
    private alertService: AlertService,
    private emailcomposer: EmailComposer,
    private keyboard: Keyboard,
    private admob: AdMobPro,
    private platform: Platform,
    private lab: InAppBrowser,
    private groupprovider: GroupProvider,
    private admobservice : AdmobserviceProvider
  ) {
    this.passdata = this.navParams.get('data');
    console.log('====================================');
    console.log(this.passdata);
    console.log('====================================');
    this.userPlaces = this.passdata['userplaces'].reverse()
    this.myinfo = this.localstorage.getUserinfo();
    this.keyboardHeight = 55;

    this.keyboard.disableScroll(false);

    // this.platform.ready().then(() => {
    //   // this.message_input.setFocus();
    //   this.keyboard.onKeyboardShow().subscribe(e => {
    //     console.log('this is keybaordsafasf eleefeef', e);
    //     this.keyboardHeight = e['keyboardHeight'] + 55;
    //     console.log('this is keybaordsafasf eleefeef', e);
    //     this.content.resize();
    //     this.scrollToBottom();
    //   });

    //   this.keyboard.onKeyboardHide().subscribe(e => {
    //     this.keyboardHeight = 55;
    //     this.content.resize();
    //     this.scrollToBottom();
    //   });
    // });
  }

  ionViewDidLoad() {
    this.admob.removeBanner();
    console.log('passdatainfo', this.passdata);
    this.message = '';
    this.messagesArray = [];
    this.getGroupRealTimeMessage();
    this.scrollToBottom();
  }

 
  onclickContent() {
    // this.keyboard.close();
    // this.keyboardHeight = 55;
    // this.content.resize();
    this.scrollToBottom();
  }

  onFocus() {
    console.log('this is focus event');
    // this.keyboard.show();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 100);
  }

  ionViewWillEnter() {
    this.admobservice.removeAdmob()
    this.chatprovider
      .saveUserStatus(true)
      .then(succ => {})
      .catch(err => {
        alert(err);
      });
  }

  ionViewDidLeave() {
    this.chatprovider.saveUserStatus(false);
  }

  // group
  getGroupRealTimeMessage() {
    let groupchatRef = this.firestore.collection('groupchat');

    groupchatRef
      .doc(this.passdata['groupid'])
      .collection('messages')
      .valueChanges()
      .subscribe(snapshot => {
        console.log('this is messagearray info', snapshot);
        this.generateRealtimeMessageArray(snapshot.reverse());
      });
  }

  
  generateRealtimeMessageArray(info) {
    this.messagesArray = [];
    let myid = this.matchprovider.getUserinfo()['id'];
    var temparray = [];
    var i = 0;
    
    info.forEach(element => {
      i++;
      let tempmodel = new GroupChatModel();
      tempmodel.key = element['key'];
      tempmodel.dateofmsg = element['dateofmsg'];
      tempmodel.message = element['message'];
      tempmodel.receiver = element['receiver'];
      tempmodel.sender = element['sender'];
      tempmodel.timeofmsg = element['timeofmsg'];
      tempmodel.timestamp = element['timestamp'];
      tempmodel.type = element['type'];
      console.log("this is element info", element )
      if (element['type'] == 'meeting') {
        tempmodel.photo = element['photo'];
        tempmodel.placename = element['placename'];

        if (element['accptUsers'] == null) {
          tempmodel.isAccept = false;
        } else {

          console.log("this is remnopafafdsaf", myid, element['accptUsers'])
          let userinfo = element['accptUsers'].filter(elem => elem['myid'] == myid);
        
          if (userinfo.length > 0) {
            tempmodel.isAccept = true;
            tempmodel.acceptUsers = element['accptUsers'];
          } else {
            tempmodel.isAccept = false;
          }
        }
      } else {
        
        tempmodel.photo = element['placename'];
        tempmodel.isAccept = element['accept'];
      }

      temparray.push(tempmodel);

      if (i == info.length) {
        // this.loadingprovider.removeLoadingView();
        this.messagesArray.push(...temparray);
        this.scrollToBottom();
      }
    });
  }

  onclickSendButtonWhenGroupChat() {
    console.log('this is for the test');
    if (this.message != '') {
      this.groupprovider
        .saveGroupChatMessages(this.message, this.passdata['groupid'], 'group')
        .then(re => {
          this.message = '';
        })
        .catch(er => {});
    }
    this.onclickContent();
  }

  changetextarea() {
    // get elements
    var element = document.getElementById('messageInputBox');
    var textarea = element.getElementsByTagName('input')[0];

    // set default style for textarea
    textarea.style.minHeight = '50px';
    textarea.style.height = '0';

    // limit size to 96 pixels (6 lines of text)
    var scroll_height = textarea.scrollHeight;
    if (scroll_height > 160) scroll_height = 160;

    // apply new style
    element.style.height = scroll_height + 'px';
    textarea.style.minHeight = scroll_height + 'px';
    textarea.style.height = scroll_height + 'px';
  }

  onclickbackbutton() {
    this.navCtrl.pop();
  }

  onclicksettimebutton(info) {
    console.log('this is settime info', info);

   
      let parameter = {
        myid: this.myinfo['id'],
        friendid: this.passdata['userid'],
        data: info,
        groupid: this.passdata['groupid'],
        type: 'group'
      };

      this.modalCtrl
        .create('SettimePage', { data: parameter }, { cssClass: 'inset-modal' })
        .present();
    
  }

  getGroupUsers(groupid) {
    return new Promise((resolve, reject) => {
      this.groupprovider
        .getGroupMemebersInfos(groupid)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  gotodetailpage(info)
  {
    console.log("this is info", info)
    this.navCtrl.push('ChatdetailPage',{data : info, type : 'group'})
  }

  onclickgroupbutton(url) {
    var inappbrowser = this.lab.create(url, '_blank');
    inappbrowser.show();
  }

  // report message
  onclickmessage(item) {
    console.log('this is item info', this.matchprovider.getUserinfo(), item);

    let myid = this.matchprovider.getUserinfo()['id'];
    if (item['sender'] != myid) {
      let actionSheet = this.actionsheetCtrl.create({
        title: '',
        buttons: [
          {
            text: 'Report',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
              this.sendReportMessage(item);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });

      actionSheet.present();
    } else {
      this.alertService.presentAlert('', "Can't report about own message!");
    }
  }

  onclickuserimage() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '',
      buttons: [
        {
          text: 'Block User',
          role: 'destructive',
          handler: () => {
            this.sendBlockUserRequest();
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Report Profile',
          role: 'destructive',
          handler: () => {
            this.sendReportUserRequest();
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  sendBlockUserRequest() {
    this.chatprovider
      .setBlockUser(this.passdata['userid'])
      .then(succss => {
        this.navCtrl.pop();
      })
      .catch(er => {});
  }

  sendReportUserRequest() {
    let myname = this.matchprovider.getUserinfo()['username'];
    let myemail = this.matchprovider.getUserinfo()['email'];

    let email = {
      to: 'admin@dittochat.com',
      cc: [myemail],
      bcc: [],
      attachment: [],
      subject: 'Report Content',
      body:
        'Hi, My username is' +
        myname +
        '. I would like to report' +
        this.passdata['username'] +
        'More Info :'
    };

    this.emailcomposer.addAlias('gmail', 'com.google.android.gm');
    this.emailcomposer.addAlias('outlook', 'com.microsoft.android.outlook');
    this.emailcomposer.open(email);

    this.emailcomposer
      .isAvailable()
      .then((available: boolean) => {
        console.log('this is available', available);
        if (available) {
          //Now we know we can send
          // Send a text message using default options
          this.emailcomposer.open(email);
        }
      })
      .catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      });
  }
  // send report message to admin

  sendReportMessage(item) {
    let myname = this.matchprovider.getUserinfo()['username'];
    let myemail = this.matchprovider.getUserinfo()['email'];

    let email = {
      to: 'admin@dittochat.com',
      cc: [myemail],
      bcc: [],
      attachment: [],
      subject: 'Report Content',
      body:
        'Hi, My username is' +
        myname +
        '. I would like to report' +
        this.passdata['username'] +
        'chatID : ' +
        item['key']
    };
    this.emailcomposer.addAlias('gmail', 'com.google.android.gm');
    this.emailcomposer.addAlias('outlook', 'com.microsoft.android.outlook');
    this.emailcomposer.open(email);

    this.emailcomposer
      .isAvailable()
      .then((available: boolean) => {
        console.log('this is available', available);
        if (available) {
          //Now we know we can send
          // Send a text message using default options
          this.emailcomposer.open(email);
        }
      })
      .catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      });
  }

  // when group accept
  onclickAcceptGroupButton(info) {
    console.log("this is accept", info)
    this.chatprovider.acceptMeetingWhenGroup(this.passdata['groupid'], info)
  }

  onclickCancelGroupButton(info) {

  }


}
