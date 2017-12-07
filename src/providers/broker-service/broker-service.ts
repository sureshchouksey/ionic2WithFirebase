import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {BROKERS} from '../../model/broker';

/*
  Generated class for the BrokerServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BrokerServiceProvider {

  constructor() {
    console.log('Hello BrokerServiceProvider Provider');
  }

  findAll(){
    return Observable.create(observer=>{
      observer.next(BROKERS);
      observer.complete();
    }) 
  }

  findById(id){
    return Observable.create(observer=>{
      observer.next(BROKERS[id-1]);
      observer.complete();
    })
  }

}
