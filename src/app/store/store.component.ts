import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores:Store[] = [
    new Store( '#20010', 'juice','1 litre', 'Ksh 122', new Date(2021,4,5)),
     new Store( '#20013' , 'Salted Crisps', '50g','Ksh 30', new Date (2022,4,4)),
     new Store('#20016', 'Brookside', '500ml', 'Ksh 499',new Date(2021,5,8)),
     new Store ('#20011',  'Top fry', '5 litres', 'Ksh 1000', new Date(2026,2,7)),
      new Store('#20100', 'salt', '1kg', 'Ksh 56', new Date(2034,5,4)),
    new Store ('#20034',  'Vinegar', '700ml', 'Ksh 79', new Date(2036,4,5)),

  ];

  toggleDetails(index:any){
    this.stores[index].showDescription=!this.stores[index].showDescription;
  }

  pickStore(isPick: any, index: number){
    if (isPick){
      this.stores.splice(index,1);
    }
  }

  deleteStore(isPick: any, index: number){
    if (isPick) {
      let toDelete = confirm (`Are you sure you want to remove ${this.stores[index].product}?`)

      if (toDelete){
        this.stores.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
