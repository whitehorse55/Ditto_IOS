import { ChatproviderProvider } from './../providers/chatprovider/chatprovider';
import { LocalstorageProvider } from './../providers/localstorage/localstorage';
import { MatchedProvider } from './../providers/matched/matched';
import { AlertService } from './../providers/Utils/alert.service';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { ToastService } from './../providers/Utils/toast.service';
import { SwingModule } from 'angular2-swing';
import { ValidationProvider } from '../providers/validation/validation';
import { AuthProvider } from '../providers/auth/auth';
import {Camera} from '@ionic-native/camera';
import { SMS } from '@ionic-native/sms';
import { Firebase } from '@ionic-native/firebase';
import { GeolocatinoProvider } from '../providers/geolocatino/geolocatino';
import { Ionic2RatingModule } from 'ionic2-rating';
import { PipesModule } from '../pipes/pipes.module';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeKeyboard } from '@ionic-native/native-keyboard';
import { AdMobPro } from '@ionic-native/admob-pro';

export const MODULES = [
    SwingModule,
    Ionic2RatingModule,
    PipesModule
];

export const PROVIDERS = [
    ToastService,
    Camera,
    ValidationProvider,
    SMS,
    AuthProvider,
    MatchedProvider,
    Firebase,
    GeolocatinoProvider,
    LocalstorageProvider,
    Geolocation,
    NativeGeocoder,
    ChatproviderProvider,
    AlertService,
    EmailComposer,
    InAppBrowser,
    GooglePlus,
    NativeKeyboard,
    AdMobPro
]