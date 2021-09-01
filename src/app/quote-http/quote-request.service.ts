import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  quote!: Quote;

  constructor(private http:HttpClient) {
    this.quote = new Quote("","");
   }

   quoteRequest(){
     interface ApiResponse{
       quote:string;
       author:string;
     }
     let promise = new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiKey).toPromise().then(response=>{
         this.quote.quote = response.quote
         this.quote.author = response.author

         resolve()
       },
       error=>{
         this.quote.quote = "Don't mess up!"
         this.quote.author = "Grace Graca"

         reject(error)
       })
     })
     return promise
   }
}
  
