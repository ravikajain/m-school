import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportPage } from './transport';
import { Trip } from './trip';

@NgModule({
  declarations: [
    TransportPage,
    Trip
  ],
  entryComponents:[
    Trip
  ],
  imports: [
    IonicPageModule.forChild(TransportPage),
  ],
})
export class TransportPageModule {}
