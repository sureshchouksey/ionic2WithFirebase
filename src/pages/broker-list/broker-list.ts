import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage} from '../login/login';
import { BrokerServiceProvider} from '../../providers/broker-service/broker-service';
import { BROKERS} from '../../model/broker';
import { FormsModule} from '@angular/forms'
import { BrokerDetailsPage} from '../broker-details/broker-details';


/**
 * Generated class for the BrokerListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-broker-list',
  templateUrl: 'broker-list.html',
})
export class BrokerListPage implements OnInit{

  brokers:Array<any>;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public brokerService:BrokerServiceProvider,
  public afAuth:AngularFireAuth,
  public toast:ToastController) {
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

  ngOnInit(){
      this.brokerService.findAll().subscribe(
          data=>this.brokers = data
      );
  }

  itemTapped(event,broker){
      this.navCtrl.push(BrokerDetailsPage,{
        broker:broker
      })
  }

}
