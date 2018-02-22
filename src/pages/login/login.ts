import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {TransportPage} from '../transport/transport';

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,public googlePlus: GooglePlus) {

  }
  login(){
    console.log("clicked on login");
    // if(this.platform && this.platform.is('cordova')){
      this.googlePlus.login({
        "webClientId":"796887987566-hu81a9t09vr3i26hdjilgksage0blmo8.apps.googleusercontent.com",
        "offline":true
      }).then((res) =>{
        console.log("loggedin");
        console.log(res)
        // this.userServiceProvider.baseURL=this.domainServiceProvider.getBaseURLByEmail(res.email);
        // this.userServiceProvider.fetchUserData(res)
        // .then((res)=>{
        //
        // }).catch((err)=>{
        //
        // });
      }).catch((err)=>{
        console.log(err)
      });
    // }else{
    //
    // }

    this.navCtrl.setRoot(TransportPage)
    //this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  }
}
