import { Component } from '@angular/core';
import {  ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'trip.html'
})
export class Trip {

 constructor(public viewCtrl: ViewController) {

 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

}
