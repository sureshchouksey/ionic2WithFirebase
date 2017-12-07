import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User} from '../../model/User';
import { RegisterPage} from '../register/register';

import { AngularFireAuth} from 'angularfire2/auth'
import { HomePage} from '../home/home';
import { WelcomePage} from '../welcome/welcome';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  //email:string;
  //password:string;
  constructor(public afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

 async login(user){
    //email = 'sureshchouksey@gmail.com';
    //password= '123456789';
    try{
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
        console.log(result);
        if(result){
          this.navCtrl.setRoot('WelcomePage');
        }
    }
    catch(e){
      console.log(e);
    }
    
  }

  register(){
    console.log('RegisterPage');
    this.navCtrl.push('RegisterPage');
  }

}
