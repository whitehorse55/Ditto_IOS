import { ChatproviderProvider } from './../providers/chatprovider/chatprovider';
import { LocalstorageProvider } from './../providers/localstorage/localstorage';
import { Component } from '@angular/core';
import { Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
// import { HomePage } from '../pages/home/home';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  rootPage: any;
  // rootPage:any = 'WelcomePage';
  constructor(
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private authprovider: AuthProvider,
    private localstorageProvider : LocalstorageProvider,
    public chatprovider : ChatproviderProvider,
    private fcm : FcmProvider,
    private toastCtrl : ToastController,
    private events : Events,
    
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      splashScreen.hide();
      // this.rootPage = 'MainDetailPage'
      this.switchFirstpage();
      

      this.platform.pause.subscribe(() => {
        console.log('[INFO] App paused');
        // this.chatprovider.saveUserStatus(false)
      });

      this.platform.resume.subscribe(() => {
          console.log('[INFO] App resumed');
      });


      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          console.log("message arrived", msg)
          let message = msg.aps.alert['title'] + "\n" +  msg.aps.alert['body']
          this.showToastView(message)
        })
      )
      .subscribe(res=>{
          console.log("this is res", res.aps.alert['body'])
      })  
    });
  }

  showToastView(message)
  {
    let toast = this.toastCtrl.create({
      message: message,
      position:'middle',
      showCloseButton : true,
      cssClass : 'toastview'
    });
    toast.present();
  }

  /////////////////when autologin, go to homepage, when first login,
  private switchFirstpage() {
    let login_status = this.localstorageProvider.getLoginStatus();

    if (login_status == 'true') {

      let categoryList = this.localstorageProvider.getCategoryList()
      console.log("this is categorylist", categoryList)
      /////////////////publish data//////////////////////
      this.events.publish('categorylist', categoryList)

      this.rootPage = 'BottomtabbarPage';
  
    } else {
      this.rootPage = 'LoginPage';
    }
  }
}
