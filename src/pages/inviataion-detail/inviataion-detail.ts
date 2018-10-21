import { AlertService } from './../../providers/Utils/alert.service';
import { SmsProvider } from './../../providers/sms/sms';
import { MatchedProvider } from './../../providers/matched/matched';
import { NotificationProvider } from './../../providers/notification/notification';
import { SMS } from '@ionic-native/sms';
import { GroupProvider } from './../../providers/group/group';
import { YelpModel } from './../../Model/PlaceModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, ToastController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ChatproviderProvider } from '../../providers/chatprovider/chatprovider';


/**
 * Generated class for the InviataionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inviataion-detail',
  templateUrl: 'inviataion-detail.html',
})
export class InviataionDetailPage {

  // public mydate = ""
  // public myaddress = ""
  // public mydetails = ""
  // public myphoto = []

  public checkedArrayInfo = []
  public passCredential = {myphoto : [], myaddress : "", mydetails : "" , mydate : ""}
  public passdata: any
  public loading: Loading
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public groupprovider: GroupProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private sms: SmsProvider,
    public matchprovider: MatchedProvider,
    private authprovider: AuthProvider,
    private notifprovider: NotificationProvider,
    private chatprovider: ChatproviderProvider,
    private alertService : AlertService) {

    this.checkedArrayInfo = this.navParams.get('userlist')
    this.passdata = {}
    // this.myphoto = []
    // this.myaddress = ""
    // this.mydetails = ""
    // this.mydate = ""

    this.passCredential = {myphoto : [], myaddress : "", mydetails : "" , mydate : ""}
    console.log("this is check list", this.checkedArrayInfo)

  }

  getImageData(imagedata) {
    console.log("this is image data", imagedata)
    this.passCredential.myphoto.push(imagedata)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviataionDetailPage');
  }

  onclickinvitebutton() {
    this.showLoading()
    // if(this.passCredential.myphoto.length == 0)
    // {
    //   this.loading.dismiss()
    //   this.alertService.presentAlert("Alert", "Please add Photos")
    // }else{
      this.generatePassData().then(res => {
        console.log("clicked===<>", res)
        if (this.checkedArrayInfo.length == 1) {
          if (this.checkedArrayInfo[0]['groupid']) {
            this.sendGroupInvite()
          } else {
            this.sendRequestToUser()
          }
        } else {
          if (this.checkedArrayInfo[0]['groupid']) {
            this.sendGroupInvite()
          } else {
            this.generateGroup()
          }
        }
      }).catch(err => {
        this.loading.dismiss()
      })
    


  }

  validateForm()
  {

  }


  //////////////////////////////////////////// generate group /////////////////////////////////////
  generateGroup() {
    console.log("this is message ==>", this.passdata, this.checkedArrayInfo)

    let message =
      'I’d like to invite you to ' + this.passdata['place_name'] + "-" + this.passdata['place_address'] + '. Accept the invite on Ditto http://dittochat.com/download';

    this.groupprovider.generateGroup(this.passdata, this.checkedArrayInfo).then((res: Array<any>) => {
      this.loading.dismiss()

      this.chatprovider.addMeetingWhenGroup(this.passdata['place_name'] + "-" + this.passdata['place_address'],

        this.passdata['place_photo'], "meeting", this.passdata['place_time'], this.passdata['place_time'], res['groupid']).then(result => {
          if (res.length > 0) {
            this.sms.sendTextMessages(res['message'], message).then(res => {
              this.loading.dismiss()
              this.notify('Sent')
              this.openChatTab()
            }).catch(er => {
              this.loading.dismiss()
              this.openChatTab()
            })
          } else {
            this.loading.dismiss()
            this.notify('Sent')
            this.openChatTab()
          }
        }).then(ee => {
          this.loading.dismiss()
        })

      // this.getMyGroupInfo()
    }).catch(er => {
      this.loading.dismiss()
    })

  }

  // 1 : 1 user invite 
  sendRequestToUser() {
    let contactmodel = this.checkedArrayInfo[0]
    console.log("this is contactmodelinfo", contactmodel)
    if (contactmodel.isHasApp) {
      ////////////////////////friend //////////////
      if (contactmodel.isInvited) {
        // this.changeOneitemStatus(phonumber,index, "sent")
        this.sendAutoMatchRquest(contactmodel)
      }
      else if (!contactmodel.isInvited) {
        //////////////not friend/////////////////////
        this.sendFriendRequestWithMatch(contactmodel)
        // this.changeOneitemStatus(phonumber,index, "Requested")
      }

    } else {
      this.sendTextMessage(contactmodel['phoneNumbers'])
    }

  }



  sendAutoMatchRquest(contactmodel) {

    this.authprovider.getUserStatus(contactmodel['id']).then(res => {
      console.log("this is status info", res)

      if (res[0]['status'] == null) {
        this.automatch(contactmodel)
      } else {
        if (res[0]['status'] == true) {
          this.automatch(contactmodel)
        }
      }
    }).catch(err => {

    })
    // send notification for invite

  }


  automatch(contactmodel) {
    let myid = this.matchprovider.getUserinfo()['id'];
    this.notifprovider.sendFriendRequest("Received Match Request!", contactmodel['id'], "invited you to" + this.passdata['place_name'] + "-" + this.passdata['place_address'])

    this.matchprovider.autoSavePlaceInfo(this.passdata, myid).then(res => {
      this.matchprovider.autoSavePlaceInfo(this.passdata, contactmodel['id']).then(ress => {
        this.matchprovider.atuosaveMyplaceInfo(this.passdata, myid).then(succ => {
          this.matchprovider.atuosaveMyplaceInfo(this.passdata, contactmodel['id']).then(su => {
            this.matchprovider.autosaveMatchedUsers(contactmodel['id'], this.passdata).then(su => {
              this.matchprovider.saveMatchedUsersList(contactmodel['id']).then(ss => {
                this.matchprovider.saveMatchedOtherUsersList(contactmodel['id']).then(succ => {

                  this.authprovider.getMyFriendsList(contactmodel['id']).then(resu => {

                    this.chatprovider.addMeeting(this.passdata['place_name'] + "-" + this.passdata['place_address'] ,
                      this.passdata['place_photo'],
                      contactmodel['id'],
                      "meeting",
                      this.passdata['place_time'],
                      this.passdata['place_time']).then(suc => {
                        this.openChatTab()
                        this.loading.dismiss()
                        this.notify('Sent')
                      }).catch(er => {
                        this.loading.dismiss()
                      })

                  }).catch(e => {

                    this.authprovider.saveFriends("", contactmodel).then(suc => {
                      this.loading.dismiss()
                      this.notify('Sent')
                    }).catch(err => {
                      console.log("erro1", err)
                      this.loading.dismiss()
                    })

                  })
                }).catch(r => {
                  console.log("erro1", r)
                  this.loading.dismiss()
                })
              }).catch(er => {
                console.log("erro2", er)
                this.loading.dismiss()
              })
            }).catch(ee => {
              console.log("erro3", ee)
              this.loading.dismiss()
            })
          }).catch(e => {
            console.log("erro4", e)
            this.loading.dismiss()
          })
        }).catch(e => {
          console.log("erro5", e)
          this.loading.dismiss()
        })
      }).catch(er => {
        console.log("erro6", er)
        this.loading.dismiss()
      })
    }).catch(err => {
      console.log("erro7", err)
      this.loading.dismiss()
    })
  }

  sendFriendRequestWithMatch(model) {
    this.authprovider.saveFriends(model.phoneNumbers, model).then(res => {
      this.notify('Sent')
      this.notifprovider.sendFriendRequest("Received Request! ", model['id'], " requested  to invite you out")
      this.sendAutoMatchRquest(model)
    }).catch(err => {
      this.loading.dismiss()
      console.log("this is errror", err)
    })
  }

  // send sms message when 1 : 1 invite
  sendTextMessage(phoneNumber) {
    let message =
      'I’d like to invite you to ' + this.passdata['place_name'] + "-" + this.passdata['place_address'] + '. Accept the invite on Ditto http://dittochat.com/download';

    this.sms.sendTextMessages(phoneNumber, message).then(res => {
      this.notify('Sent')
      this.loading.dismiss()
    }).catch(er => {
      this.loading.dismiss()
    })

  }

  generatePassData() {

    return new Promise((resolve, reject) => {
      console.log("this is photos info", this.passCredential.myphoto)
      if(this.passCredential.myphoto.length == 0)
      {
        let yelpmodel = new YelpModel()
        yelpmodel.place_id = this.passCredential.mydetails
        yelpmodel.place_photo = ""
        yelpmodel.place_time = this.passCredential.mydate
        yelpmodel.place_name = this.passCredential.mydetails
        yelpmodel.place_address = this.passCredential.myaddress
        this.passdata = yelpmodel
        resolve(yelpmodel)
      }else{
        this.authprovider.saveImageDataToStorage(this.passCredential.myphoto).then(result => {
          console.log("clicked invite button", result)
          let yelpmodel = new YelpModel()
          yelpmodel.place_id = this.passCredential.mydetails
          yelpmodel.place_photo = result
          yelpmodel.place_time = this.passCredential.mydate
          yelpmodel.place_name = this.passCredential.mydetails
          yelpmodel.place_address = this.passCredential.myaddress
          this.passdata = yelpmodel
  
          resolve(yelpmodel)
        }).catch(err => {
          console.log("clicked invite error", err)
          reject(false)
        })
      }
    
    })


  }

  // when click group item 
  sendGroupInvite() {
    console.log("this is message ==>", this.passdata, this.checkedArrayInfo)
    this.groupprovider.saveGroupInfodata(this.passdata, this.checkedArrayInfo, "newInvite").then(suc => {
      console.log("result info ==>", suc)
      this.openChatTab()
      this.loading.dismiss()
    }).catch(e => {
      this.loading.dismiss()
    })
  }


  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  notify(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

  openChatTab() {
    // this.navCtrl.setRoot('BottomtabbarPage', { opentab: 3 })
    this.navCtrl.pop()
    this.navCtrl.parent.select(3);
  }

}

