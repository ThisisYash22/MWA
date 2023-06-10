import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PlacementCompaniesComponent } from './placement-companies/placement-companies.component';
import { PlacementDetailsComponent } from './placement-details/placement-details.component';
import { TpCellComponent } from './tp-cell/tp-cell.component';
import { PlacementDashboardComponent } from './placement-dashboard/placement-dashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    PlacementCompaniesComponent,
    PlacementDetailsComponent,
    TpCellComponent,
    PlacementDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
