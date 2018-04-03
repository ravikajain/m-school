import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MetaSchool } from './app.component';

import { LoginPageModule } from '../pages/login/login.module';
import { TransportPageModule } from '../pages/transport/transport.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { TripDetailPageModule } from '../pages/transport/trip-detail.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus} from '@ionic-native/google-plus';
import { Firebase } from '@ionic-native/firebase';

@NgModule({
  declarations: [
    MetaSchool
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MetaSchool),
    LoginPageModule,
    TransportPageModule,
    ProfilePageModule,
    DashboardPageModule,
    TripDetailPageModule
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
