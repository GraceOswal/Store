import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores:Store[] = [
    new Store( '#20010', 'juice','1 litre', 'Ksh 122'),
     new Store( '#20013' , 'Salted Crisps', '50g','Ksh 30'),
     new Store('#20016', 'Brookside', '500ml', 'Ksh 499'),
     new Store ('#20011',  'Top fry', '5 litres', 'Ksh 1000'),
      new Store('#20100', 'salt', '1kg', 'Ksh 56'),
    new Store ('#20034',  'Vinegar', '700ml', 'Ksh 79')

  ];

  toggleDetails(index:any){
    this.stores[index].showDescription=!this.stores[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
