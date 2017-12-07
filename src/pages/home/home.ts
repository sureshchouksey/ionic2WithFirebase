import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import { LoginPage} from '../login/login';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData : FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth,public afDatabase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data=>{
      if(data && data.email && data.uid){
        this.profileData = this.afDatabase.object(`profile/${data.uid}`);
      }
    })
  }

  logout(){
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
