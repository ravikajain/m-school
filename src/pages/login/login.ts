import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';

@IonicPage({
  name: 'login',
  segment: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  // segment: 'login'
})
export class LoginPage {

  constructor(public platform: Platform,public googlePlus: GooglePlus,public navCtrl: NavController) {

  }
  login(){
    console.log("clicked on login");
    if(this.platform._platforms.indexOf("cordova")>-1){
      this.googlePlus.login({
        "webClientId":"796887987566-hu81a9t09vr3i26hdjilgksage0blmo8.apps.googleusercontent.com",
        "offline":true
      }).then((res) =>{
        console.log("loggedin");
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      });
    } else {
    }
    this.navCtrl.setRoot('dashboard')
    //this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  }
}
