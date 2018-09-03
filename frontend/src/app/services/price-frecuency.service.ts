import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, tap, map } from "rxjs/operators";

import { FrecuencyRecord } from "../models/frecuency-record";
import { SpotPriceRecord } from "../models/spot-price-record";
import { AwsSpotPricesService } from "./aws-spot-prices.service";

const histURL = 'https://cloud.opencpu.org/ocpu/library/graphics/R/hist'

@Injectable()
export class PriceFrecuencyService {
  
  constructor(
    private http: HttpClient) { }

  getPricesFrecuency(instanceType,productDescription):Observable<FrecuencyRecord[]>{
    
    //TODO Get prices from AWS SDK

    //TODO Generate frecuency records

    var records:FrecuencyRecord[] = [
      {lowLimit:0.011, highLimit:0.021, frecuency:1, percentace:0.05},
      {lowLimit:0.021, highLimit:0.031, frecuency:4, percentace:0.10},
      {lowLimit:0.031, highLimit:0.041, frecuency:40, percentace:0.12},
      {lowLimit:0.041, highLimit:0.051, frecuency:45, percentace:0.15},
      {lowLimit:0.051, highLimit:0.061, frecuency:46, percentace:0.30},
      {lowLimit:0.061, highLimit:0.071, frecuency:35, percentace:0.15},
      {lowLimit:0.071, highLimit:0.081, frecuency:10, percentace:0.10},
      {lowLimit:0.081, highLimit:0.090, frecuency:6, percentace:0.05}
    ];

    

    return of(records);
  }
}
