import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
   { path: 'stores', component: StoreComponent},
  { path: 'aboutus', component: AboutusComponent},
  {path: '**', component: NotFoundComponent},

  {path: '', redirectTo:"/stores", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
