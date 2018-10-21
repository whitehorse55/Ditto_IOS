
import { SortPipe } from './../pipes/sort/sort';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule  } from '@angular/http';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MODULES, PROVIDERS } from './app.import';
import { MatchedProvider } from '../providers/matched/matched';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { ChatproviderProvider } from '../providers/chatprovider/chatprovider';
import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase';
import { NotificationProvider } from '../providers/notification/notification';
import { HTTP } from '@ionic-native/http';
import { YelpProvider } from '../providers/yelp/yelp';
import { SocialProvider } from '../providers/social/social';
import {Facebook} from '@ionic-native/facebook'
import { FacebookProvider } from '../providers/facebook/facebook';
import { GoogleProvider } from '../providers/google/google';
import { Keyboard } from '@ionic-native/keyboard';
import { GrouponProvider } from '../providers/groupon/groupon';
import { GroupProvider } from '../providers/group/group';
import { SmsProvider } from '../providers/sms/sms';
import { LoadingProvider } from '../providers/loading/loading';
import { AdmobserviceProvider } from '../providers/admobservice/admobservice';


@NgModule({
  declarations: [
    MyApp,
    // HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ///////////////////firebase related imports////////////
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true,
      scrollAssist: false,
      autoFocusAssist: false,
      tabsHideOnSubPages: true,
    }),
    MODULES
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS,
    Firebase,
    FcmProvider,
    NotificationProvider,
    HTTP,
    YelpProvider,
    SocialProvider,
    Facebook,
    FacebookProvider,
    GoogleProvider,
    GoogleProvider,
    Keyboard,
    GrouponProvider,
    GroupProvider,
    SmsProvider,
    LoadingProvider,
    AdmobserviceProvider,
    
    
  ]
})
export class AppModule {}
