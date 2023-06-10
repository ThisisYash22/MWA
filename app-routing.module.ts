import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TpCellComponent } from './tp-cell/tp-cell.component';
import { PlacementCompaniesComponent } from './placement-companies/placement-companies.component';
import { PlacementDashboardComponent } from './placement-dashboard/placement-dashboard.component';
import { PlacementDetailsComponent } from './placement-details/placement-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'tp-cell', component: TpCellComponent },
  { path: 'placement-companies', component: PlacementCompaniesComponent },
  { path: 'placement-dashboard', component: PlacementDashboardComponent },
  { path: 'placement-details', component: PlacementDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
