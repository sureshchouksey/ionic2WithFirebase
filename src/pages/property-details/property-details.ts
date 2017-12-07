import { Component}  from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage} from '../login/login';
import { PROPERTY} from '../../model/propertyModel';
import { PropertyServiceProvider} from '../../providers/property-service/property-service';
import { FormsModule} from '@angular/forms';

/**
 * Generated class for the PropertyDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property-details',
  templateUrl: 'property-details.html',
})
export class PropertyDetailsPage  {
  property:PROPERTY;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public propertyService:PropertyServiceProvider,
    public Alert:AlertController,
    public afAuth:AngularFireAuth,
    public toast:ToastController) {
    this.property = navParams.get('property');
    console.log(this.property);
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

 favorite(event,property){
   this.propertyService.favorite(property)
   .subscribe(property=>{
     let alert = this.Alert.create({
       title:'favorite',
       subTitle:'Property added to your favorites',
       buttons:['ok']
     }).present();
   })
 }

 like(event,property){
   this.propertyService.like(property).subscribe(Likes=>{
     property.likes = Likes
   })
   console.log(property);
 }

 

}
