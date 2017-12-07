import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage} from '../login/login';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public toast:ToastController) {
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

}
