import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

/**
 * Generated class for the TransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase: Firebase) {
    console.log();
  }

  ionViewDidLoad() {
    this.firebase.getToken()
  .then(token => {
    console.log(`The token is `);
    console.log(token);
  }) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));
    console.log('ionViewDidLoad TransportPage');
    this.firebase.onNotificationOpen()
  .subscribe(token => {
    console.log(`got message is `);
    console.log(token);
  });
  }

}
