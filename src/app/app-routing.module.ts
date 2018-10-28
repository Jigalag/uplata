import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Card2cardComponent} from './card2card/card2card.component';
import {ServicesComponent} from './services/services.component';
import {TarifComponent} from './tarif/tarif.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {SecurityComponent} from './security/security.component';
import {LegalComponent} from './legal/legal.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'card2card', component: Card2cardComponent },
    { path: 'oplata-uslug', component: ServicesComponent },
    { path: 'tarif', component: TarifComponent },
    { path: 'onas', component: AboutComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'bezopasnost', component: SecurityComponent },
    { path: 'legal', component: LegalComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
