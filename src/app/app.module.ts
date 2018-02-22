import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MetaSchool } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TransportPage } from '../pages/transport/transport';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus} from '@ionic-native/google-plus';
import { Firebase } from '@ionic-native/firebase';

@NgModule({
  declarations: [
    MetaSchool,
    LoginPage,
    TransportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MetaSchool),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MetaSchool,
    LoginPage,
    TransportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
