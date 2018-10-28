import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { Card2cardComponent } from './card2card/card2card.component';
import { TarifComponent } from './tarif/tarif.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { SecurityComponent } from './security/security.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServicesComponent,
    Card2cardComponent,
    TarifComponent,
    AboutComponent,
    FaqComponent,
    SecurityComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
