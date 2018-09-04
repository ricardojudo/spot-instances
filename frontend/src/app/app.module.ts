import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { InMemoryDataService } from "./services/in-memory-data.service";
import { SignInComponent } from './sign-in/sign-in.component';

import { AwsSpotPricesService } from "./services/aws-spot-prices.service";
import { PriceFrecuencyService } from "./services/price-frecuency.service";
import { UserService } from "./services/user.service";
import { AuthInterceptor } from "./interceptors/auth-interceptor";

import { AuthGuard } from "./guards/auth-guard";
import { PriceFrecuencyComponent } from './price-frecuency/price-frecuency.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import { SpotPricesComponent } from './spot-prices/spot-prices.component';
// Include Below Snippet
FusionChartsModule.fcRoot(FusionCharts, Column2D);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    PriceFrecuencyComponent,
    SpotPricesComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AmplifyAngularModule,
    FusionChartsModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //,HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    AwsSpotPricesService,
    PriceFrecuencyService,
    AuthGuard,
    UserService,
    AmplifyService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
