import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {PROPERTIES} from '../../model/property';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the PropertyServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

let favorites = [];
@Injectable()
export class PropertyServiceProvider {

  constructor() {
    console.log('Hello PropertyServiceProvider Provider');
  }

  findAll(){
    return Observable.create(Observer=>{
      Observer.next(PROPERTIES);
      Observer.complete();
    })
  }

  getFavorites() {
        return Observable.create(observer => {
            observer.next(favorites);
            observer.complete();
        });
    }

  favorite(property){
   return Observable.create(Observer=>{
     let exists = false;
     for(let i=0;i<favorites.length;i++){
       if(favorites[i].id === property.id){
         exists = true;
         break;
       }
     }
     if(!exists){
       favorites.push(property);
     }
     Observer.next();
     Observer.complete();
   })

  }

   unfavorite(property) {
      return Observable.create(observer => {
          for (let i = 0; i < favorites.length; i++) {
              if (favorites[i].id === property.id) {
                  favorites.splice(i, 1);
                  break;
              }
          }
          observer.next();
          observer.complete();
      });
    }

    like(property) {
        return Observable.create(observer => {
            PROPERTIES[property.id - 1].likes++;
            observer.next(PROPERTIES[property.id - 1].likes);
            observer.complete();
        });
    }

}
