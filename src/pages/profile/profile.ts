import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage} from '../login/login';
import { AngularFireDatabase} from 'angularfire2/database';
import { HomePage} from '../home/home';
import { PROFILE} from '../../model/profileModel';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 profileData = {} as PROFILE;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth:AngularFireAuth,
              public afDatabase:AngularFireDatabase,
              public toast:ToastController) {
  }

  createProfile(profileData){
    
    console.log(profileData);
    this.afAuth.authState.take(1).subscribe(auth=>{
      this.afDatabase.object(`profile/${auth.uid}`).set(profileData)
        .then(()=>{ 
          this.navCtrl.push('HomePage');
        });
    })
    
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
