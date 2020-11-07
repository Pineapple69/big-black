import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {SellInfoComponent} from './components/sell-info/sell-info.component';
import {AboutComponent} from './components/about/about.component'; // CLI imports router

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'informacje-kontaktowe', component: ContactComponent},
  {path: 'skup-winyli', component: SellInfoComponent},
  {path: 'o-nas', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
