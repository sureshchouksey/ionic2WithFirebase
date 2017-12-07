import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage} from '../login/login';
import { PROPERTY} from '../../model/propertyModel';
import { PropertyServiceProvider} from '../../providers/property-service/property-service';
import { FormsModule} from '@angular/forms';
import { PropertyDetailsPage} from '../property-details/property-details';
/**
 * Generated class for the PropertyListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property-list',
  templateUrl: 'property-list.html',
})
export class PropertyListPage implements OnInit{
  properties:Array<PROPERTY>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public propertyService:PropertyServiceProvider,
              public afAuth:AngularFireAuth,
              public toast:ToastController) {
  }



  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.propertyService.findAll().subscribe(
      data=> this.properties = data
    )
    console.log(this.properties);
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

  itemTapped(event,property){
    this.navCtrl.push('PropertyDetailsPage',{property:property});
  }

}
