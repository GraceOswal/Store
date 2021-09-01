import { Injectable } from '@angular/core';
import { Stores } from '../stores';




@Injectable({
  providedIn: 'root'
})
export class StoreService {


  getStores(){
    return Stores
  }

  getStore(customer_id: any){
    for (let store of Stores){
      return store;
      
    }
  }

  constructor() { }
}

