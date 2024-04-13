import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairDashboardComponent } from './shared/components/product/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './shared/components/product/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/product/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
