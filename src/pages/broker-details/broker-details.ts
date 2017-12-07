import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage} from '../login/login';
import { BrokerServiceProvider} from '../../providers/broker-service/broker-service';
import { BROKER} from '../../model/brokerModel';

/**
 * Generated class for the BrokerDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-broker-details',
  templateUrl: 'broker-details.html',
})

export class BrokerDetailsPage implements OnInit{
  broker :BROKER;
  id:Number;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public brokerService:BrokerServiceProvider,
              public afAuth:AngularFireAuth,
              public toast:ToastController) {
    this.broker=this.navParams.get('broker');
    if(this.broker){
         this.id= this.broker.id;
          //console.log(broker);
    }
   
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data=>{
      if(data && data.email){
           this.toast.create({
              message:`Welcome to app,${data.email}`,
              duration:3000
            }).present();
      }
      else{
          this.toast.create({
              message:`Unable to login`,
              duration:3000
            }).present();
          this.navCtrl.setRoot('LoginPage');  
      }
     
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.brokerService.findById(this.id).subscribe(
      broker => this.broker = broker      
    )

    console.log(this.broker);
  }

}
