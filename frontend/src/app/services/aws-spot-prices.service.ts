import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { Config } from "aws-sdk/global";

import { Subject } from 'rxjs';


@Injectable()
export class AwsSpotPricesService {

  constructor() {
    

  }

  getPrices(startTime,endTime, instanceType, productDescription){
    

    

  }

}
