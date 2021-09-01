import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../store';
import { Quote} from '../quote-class/quote';
import { StoreService } from '../store-service/store.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


stores:Store[];
alertService:AlertService;
  quote!: Quote;;

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

  constructor(
    storeService:StoreService,
    alertService:AlertService,
    private http: HttpClient
    ){
  this.stores = storeService.getStores()
  this.alertService = alertService;
}

  ngOnInit() {
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("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").subscribe(data=>{
      //Successful API request
      this.quote=new Quote (data.author,data.quote)
  },(_err)=>{
  this.quote = new Quote(" Grace Graca","Don't mess up!")
  console.log("An Error occured")

    })
  }
}
