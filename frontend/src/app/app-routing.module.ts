import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceFrecuencyComponent } from "./price-frecuency/price-frecuency.component";
import { SignInComponent } from "./sign-in/sign-in.component";

import { AuthGuard } from "./guards/auth-guard";


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: '', redirectTo: 'price-frecuency', pathMatch: 'full' },
  { path: 'price-frecuency', component: PriceFrecuencyComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
