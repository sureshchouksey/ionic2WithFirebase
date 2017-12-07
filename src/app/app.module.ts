import { BrowserModule } from '@angular/platform-browser';

import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { MyApp } from './app.component';
import {FIREBASE_CONFIG} from './app.firebase.config';
import {WelcomePageModule} from '../pages/welcome/welcome.module';
import { RegisterPageModule} from '../pages/register/register.module';
import { ProfilePageModule} from '../pages/profile/profile.module';
import { HomePageModule } from '../pages/home/home.module';
import { BrokerServiceProvider } from '../providers/broker-service/broker-service';
import { PropertyServiceProvider } from '../providers/property-service/property-service';
import { BrokerListPageModule} from '../pages/broker-list/broker-list.module';
import { BrokerDetailsPageModule} from '../pages/broker-details/broker-details.module';
import { PropertyListPageModule} from '../pages/property-list/property-list.module';
import { PropertyDetailsPageModule} from '../pages/property-details/property-details.module';
import { FavoriteListPageModule}  from '../pages/favorite-list/favorite-list.module';
import { LoginPageModule} from '../pages/login/login.module';



@NgModule({
  declarations: [
    MyApp    
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RegisterPageModule,
    WelcomePageModule,
    ProfilePageModule, 
    HomePageModule,
    BrokerListPageModule,
    BrokerDetailsPageModule,
    PropertyListPageModule,
    PropertyDetailsPageModule,
    FavoriteListPageModule,
    LoginPageModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BrokerServiceProvider,
    PropertyServiceProvider
  ]
})
export class AppModule {}
