import { Injectable } from '@angular/core';
import { Store } from '../store';
import { Stores } from '../storeList';




@Injectable({
  providedIn: 'root'
})
export class StoreService {
  


  getStores(){
    return Stores
  }

 getStore(customer_id: string){
    for (let store of Stores){
      if (store.customer_id == customer_id){}
    }
  }

  constructor() { }
}

