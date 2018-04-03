import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'dashboard',
  segment: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navParams: NavParams ){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    console.log(this.navParams.get('id'));
    console.log(this.navParams.get('data'));
  }

}
