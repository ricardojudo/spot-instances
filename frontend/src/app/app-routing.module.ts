import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotPricesComponent } from "./spot-prices/spot-prices.component";
import { PriceFrecuencyComponent } from "./price-frecuency/price-frecuency.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { SignInComponent } from "./sign-in/sign-in.component";

import { AuthGuard } from "./guards/auth-guard";


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: '', redirectTo: 'spot-prices', pathMatch: 'full' },
  { path: 'price-frecuency', component: PriceFrecuencyComponent, canActivate: [AuthGuard]},
  { path: 'spot-prices', component: SpotPricesComponent, canActivate: [AuthGuard]},
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
