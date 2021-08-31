import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  @Input()
  store!: Store;
  @Output() isPick = new EventEmitter<boolean>();

  storePick(pick:boolean){
    this.isPick.emit(pick);
  }

  storeDelete(pick:boolean){
    this.isPick.emit(pick);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
