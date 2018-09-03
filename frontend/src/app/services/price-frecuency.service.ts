import { Injectable } from '@angular/core';

import { FrecuencyRecord } from "../models/frecuency-record";
import { SpotPriceRecord } from "../models/spot-price-record";
import { AwsSpotPricesService } from "./aws-spot-prices.service";

@Injectable()
export class PriceFrecuencyService {

  constructor(private awsSpotPricesService: AwsSpotPricesService) { }

  getPricesFrecuency():FrecuencyRecord[]{
    var records:FrecuencyRecord[] = [
      {lowLimit:0.031, highLimit:0.032, frecuency:40, percentace:0.10}
    ];

    return records;
  }
}
