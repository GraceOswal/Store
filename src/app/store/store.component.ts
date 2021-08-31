import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores:Store[] = [
    { customer_id:'#20010', product: 'juice', quantity:'1 litre',price: 'Ksh 122'},
        { customer_id:'#20013', product: 'jSalted Crisps', quantity:'50g',price: 'Ksh 30'},
            { customer_id:'#20016', product: 'Brrokside', quantity:'500ml',price: 'Ksh 499'},
                { customer_id:'#20011', product: 'Top fry', quantity:'5 litres',price: 'Ksh 1000'},
                    { customer_id:'#20101', product: 'salt', quantity:'1kg',price: 'Ksh 56'},
                        { customer_id:'#20034', product: 'Vinegar', quantity:'700ml',price: 'Ksh 79'},
                        
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
