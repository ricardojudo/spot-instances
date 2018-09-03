import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { ConfigService } from "aws-sdk";

import { Subject } from 'rxjs';

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, tap, map } from "rxjs/operators";

import { SpotPriceRecord } from "../models/spot-price-record";


@Injectable()
export class AwsSpotPricesService {

  constructor(configService:ConfigService) {
  }


  getPrices(startTime,endTime, instanceType, productDescription): SpotPriceRecord[]{
        

    return []
  }

}
