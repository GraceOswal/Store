import { Component } from '@angular/core';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';

  stores:Store[] = [
    { customer_id:'#20010', product: 'juice', quantity:'1 litre',price: 'Ksh 122'}
  ];
}
