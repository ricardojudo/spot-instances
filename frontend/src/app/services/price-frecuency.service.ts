import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Subject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, tap, map } from "rxjs/operators";

import { FrecuencyRecord, FrecuencyTable } from "../models/frecuency-record";
import { SpotPriceRecord } from "../models/spot-price-record";
import { AwsSpotPricesService } from "./aws-spot-prices.service";
import { SpotPriceStatistics } from "../models/spot-price-statistics";

@Injectable()
export class PriceFrecuencyService {
  
  constructor(
    private awsSpotPricesService:AwsSpotPricesService) { }

  getStatistics(parameters):Observable<SpotPriceStatistics>{
    let stats = {}
    let subject=new Subject<SpotPriceStatistics>()
    this.awsSpotPricesService.getPrices(parameters).subscribe((records)=>{
      let history = records["SpotPriceHistory"];      
      let prices=history.map((e)=> parseFloat(e["SpotPrice"]))
      console.log(prices)
      let data=new SpotPriceStatistics(prices)
      subject.next(data)
    })    
    return subject
  }
  

  
  getPricesFrecuency(parameters):Observable<FrecuencyTable>{
    let table=new FrecuencyTable()
    let subject=new Subject<FrecuencyTable>()
    
    this.awsSpotPricesService.getPrices(parameters).subscribe((records)=>{
      let history = records["SpotPriceHistory"];      
      let prices=history.map((e)=> parseFloat(e["SpotPrice"]))
      table.build(prices)
      subject.next(table)
    })
    return subject
  }
}
