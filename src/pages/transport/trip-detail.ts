import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage({
  name: 'transport-detail',
  segment: 'transport-detail/:id',
  defaultHistory: ['dashboard','transport']
})
@Component({
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {

 constructor(public viewCtrl: ViewController) {

 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

}
