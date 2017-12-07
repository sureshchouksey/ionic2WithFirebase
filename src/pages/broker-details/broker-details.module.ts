import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrokerDetailsPage } from './broker-details';

@NgModule({
  declarations: [
    BrokerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BrokerDetailsPage),
  ],
})
export class BrokerDetailsPageModule {}
