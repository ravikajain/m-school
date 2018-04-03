import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Platform, ModalController} from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { Trip } from './trip';

/**
 * Generated class for the TransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage({
  name: 'transport',
  segment: 'transport',
  defaultHistory: ['dashboard']
})
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html'
})
export class TransportPage {
  @ViewChild('map') mapElement: ElementRef;
  // @ViewChild(Nav) navCtrl: NavController;
  map: any;
  path: any;
  bermudaTriangle: any;
  start = 'chicago, il';
  end = 'chicago, il';
  pastTrips = [{ trip_name:"Pick: Metacube Cab 1",driver_name: "BABULAL YADAV", vehicle_no:"RJ14TB0594",time:"31/03/2018 09:00 AM - 10:19 AM", start_location: "Jai Jawan-2, Choti Chopad, Jaipur, Rajasthan, India", end_location:"Chuwapimpara, Jaipur, Raj"},
      { trip_name:"Pick: Metacube Cab 1",driver_name: "BABULAL YADAV", vehicle_no:"RJ14TB0594",time:"31/03/2018 09:00 AM - 10:19 AM", start_location: "Jai Jawan-2, Choti Chopad, Jaipur, Rajasthan, India", end_location:"Chuwapimpara, Jaipur, Raj"},
    { trip_name:"Pick: Metacube Cab 1",driver_name: "BABULAL YADAV", vehicle_no:"RJ14TB0594",time:"31/03/2018 09:00 AM - 10:19 AM", start_location: "Jai Jawan-2, Choti Chopad, Jaipur, Rajasthan, India", end_location:"Chuwapimpara, Jaipur, Raj"},
  { trip_name:"Pick: Metacube Cab 1",driver_name: "BABULAL YADAV", vehicle_no:"RJ14TB0594",time:"31/03/2018 09:00 AM - 10:19 AM", start_location: "Jai Jawan-2, Choti Chopad, Jaipur, Rajasthan, India", end_location:"Chuwapimpara, Jaipur, Raj"},
{ trip_name:"Pick: Metacube Cab 1",driver_name: "BABULAL YADAV", vehicle_no:"RJ14TB0594",time:"31/03/2018 09:00 AM - 10:19 AM", start_location: "Jai Jawan-2, Choti Chopad, Jaipur, Rajasthan, India", end_location:"Chuwapimpara, Jaipur, Raj"}];
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  triangleCoords = [ {lat:26.795065, lng:75.8150783333333},{lat:26.795065, lng:75.815078344444},{lat:26.795065, lng:75.815078355555},{lat:26.795065, lng:75.815078344444}, {lat:26.807005,lng: 75.8061233333333}];
  constructor(public navCtrl: NavController, public platform: Platform, private firebase: Firebase, public modalCtrl: ModalController) {
    console.log();
  }
  ionViewDidLoad(){
    if(this.platform._platforms.indexOf("cordova")>-1){
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
    } else {

    }

    //this.initMap();
  }

  initMap() {
    console.log("test");
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat:26.795065, lng:75.8150783333333}
    });
    this.bermudaTriangle = new google.maps.Polyline({
      path: this.triangleCoords,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
          });
          this.bermudaTriangle.setMap(this.map);
    // this.directionsDisplay.setMap(this.map);
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  onClickAdd() {
    let profileModal = this.modalCtrl.create(Trip, { userId: 8675309 });
   profileModal.onDidDismiss(data => {
     console.log(data);
   });
   profileModal.present();
  }
  tripDetail() {
    this.navCtrl.push('transport-detail',{id: 1})
  }

}
