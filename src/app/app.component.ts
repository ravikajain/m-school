import { Component, ViewChild } from '@angular/core';
import { Nav, NavController,  Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GooglePlus} from '@ionic-native/google-plus';

import { TransportPage } from '../pages/transport/transport';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MetaSchool {
  @ViewChild(Nav) navCtrl: NavController;

  rootPage: any = 'login';

  pages: Array<{title: string, component: any, route: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public googlePlus: GooglePlus) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Login', component: LoginPage },
      { title: 'Transport', component: TransportPage, route: 'transport'},
      { title: 'Profile', component: ProfilePage, route: 'profile' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log(this.platform._platforms.indexOf("cordova"));
      console.log(this.navCtrl);
      console.log(this.navCtrl.length());
      if(this.platform._platforms.indexOf("cordova")>-1){

      } else {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('service-worker.js')
          .then(() => console.log('service worker installed'))
          .catch(err => console.error('Error', err));
        }
      }
      // this.navCtrl.setRoot('dashboard',{id:1,data:{abc:1}});
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.route);
  }
}
