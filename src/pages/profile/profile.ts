import { Component, ViewChild,  ElementRef} from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage({
  name: 'profile',
  segment: 'profile',
  defaultHistory: ['dashboard']
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild('map') mapElement: ElementRef;
  // @ViewChild(Nav) navCtrl: NavController;
  map: any;
  path: any;
  bermudaTriangle: any;
  triangleCoords = [ {lat:26.795065, lng:75.8150783333333},{lat:26.795065, lng:75.815078344444},{lat:26.795065, lng:75.815078355555},{lat:26.795065, lng:75.815078344444}, {lat:26.807005,lng: 75.8061233333333}];
  pastTrip = { trip_name:"Pick: Metacube Cab 1",driver_name: "BABULAL YADAV", vehicle_no:"RJ14TB0594",time:"31/03/2018 09:00 AM - 10:19 AM", start_location: "Jai Jawan-2, Choti Chopad, Jaipur, Rajasthan, India", end_location:"Chuwapimpara, Jaipur, Raj"};
  iconSource = {
    url: 'assets/imgs/green-dot.png',
    scaledSize: new google.maps.Size(30,30)
  };
  iconDestination = {
    url: 'assets/imgs/red-dot.png',
    scaledSize: new google.maps.Size(30,30)
  };
  constructor( ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.initMap()
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
          let sourceMarker = new google.maps.Marker({ map: this.map,icon: this.iconSource });
          sourceMarker.setPosition(new google.maps.LatLng(this.triangleCoords[0].lat, this.triangleCoords[0].lng));
          let destinationMarker = new google.maps.Marker({ map: this.map,icon: this.iconDestination });
          destinationMarker.setPosition(new google.maps.LatLng(this.triangleCoords[4].lat, this.triangleCoords[4].lng));

    // this.directionsDisplay.setMap(this.map);
  }
}
