import { Injectable } from '@angular/core';
import { Stores } from '../storeList';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getStores(){
    return Stores
  }

  constructor() { }
}
