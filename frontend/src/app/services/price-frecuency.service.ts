import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Subject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, tap, map } from "rxjs/operators";

import { FrecuencyRecord, FrecuencyTable } from "../models/frecuency-record";
import { SpotPriceRecord } from "../models/spot-price-record";
import { AwsSpotPricesService } from "./aws-spot-prices.service";



const histURL = 'https://cloud.opencpu.org/ocpu/library/graphics/R/hist'

@Injectable()
export class PriceFrecuencyService {
  
  constructor(
    private awsSpotPricesService:AwsSpotPricesService) { }


  

  getPricesFrecuency(instanceType,productDescription):Observable<FrecuencyTable>{
    let table=new FrecuencyTable()
    let subject=new Subject<FrecuencyTable>()
    //Get prices from AWS SDK
    this.awsSpotPricesService.getPrices(instanceType, productDescription).subscribe((records)=>{
      let history = records["SpotPriceHistory"];      
      let prices=history.map((e)=> parseFloat(e["SpotPrice"]))
      console.log(prices)
      table.build(prices)
      subject.next(table)
    })
    
    return subject



    
    //TODO Move to API
    //return of(table);
  }
}
