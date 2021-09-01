import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

const routes: Routes = [
   { path: 'stores', component: StoreComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'stores/:id', component: StoreDetailComponent},
  {path: '', redirectTo:"/stores", pathMatch:"full"},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
