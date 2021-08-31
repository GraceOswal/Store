import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { StoreFormComponent } from './store-form/store-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    StoreDetailComponent,
    HighlightDirective,
    DateCountPipe,
    StoreFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
