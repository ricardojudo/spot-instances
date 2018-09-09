import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { AmplifyService }  from 'aws-amplify-angular';
import * as AWS from 'aws-sdk'

import { Subject } from 'rxjs';

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, tap, map } from "rxjs/operators";

import { SpotPriceRecord } from "../models/spot-price-record";


@Injectable()
export class AwsSpotPricesService {

  constructor(private amplifyService:AmplifyService) {
  }

  configureEc2Client(callback){
    AWS.config.region="us-east-1"
    this.amplifyService.auth().currentUserCredentials().then(credentials => {
      AWS.config.credentials=credentials
      let ec2 = new AWS.EC2()      
      callback(ec2)
    })
  }

  getPrices(parameters): Observable<any[]>{
    let subject= new Subject<any[]>();
    this.configureEc2Client((ec2)=>{
      var params = {
        StartTime: new Date("2018-08-01T07:08:09"),
        EndTime: new Date(), 
        InstanceTypes: [parameters.instanceType],
        ProductDescriptions: [parameters.productDescription]
      }
      ec2.describeSpotPriceHistory(params, (err,data)=>{
        if(err){
          console.error(err)
        }else{
          subject.next(data)
        }        
      })
    })
    return subject
  }

}
