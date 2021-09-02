import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '../store';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StoreService } from '../store-service/store.service';
import { Stores } from '../storeList';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  

  store!: Store;
  Store: any;
  isPick: any;

  storeDelete(pick: boolean){
    this.isPick.emit (pick)
  }
  constructor(public route:ActivatedRoute,
    public service:StoreService) { }

  ngOnInit() {
      let customer_id = this.route.snapshot.paramMap.get('customer_id');
      this.Store=this.service.getStores()
  }

}
