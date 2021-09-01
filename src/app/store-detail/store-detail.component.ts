import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '../store';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StoreService } from '../store-service/store.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  store!: Store;
 
  constructor(private route:ActivatedRoute,
    private service:StoreService) { }

  ngOnInit() {
      let customer_id = this.route.snapshot.paramMap.get('customer_id');
      this.store = this.service.getStore(customer_id)
  }

}
