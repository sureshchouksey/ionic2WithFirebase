import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { User} from '../../model/User';
import { AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user ={} as User;
  constructor(public afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public toast:ToastController) {
  }

 async register(user){
   console.log(user);   
   try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
      if(result){
        this.toast.create({
            message:`Welcome to app,${result.email}`,
            duration:3000
          }).present();
        this.navCtrl.setRoot('LoginPage');        
      }
   }
   catch(e){
      console.error(e);
       this.toast.create({
          message:`Unable to register`,
          duration:3000
        }).present();
   }
   
 }

  

}
