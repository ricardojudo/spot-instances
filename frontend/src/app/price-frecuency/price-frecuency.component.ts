import { Component, OnInit } from '@angular/core';
import { FrecuencyRecord } from "../models/frecuency-record";
import { PriceFrecuencyService } from "../services/price-frecuency.service";
import { Subject } from 'rxjs';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-price-frecuency',
  templateUrl: './price-frecuency.component.html',
  styleUrls: ['./price-frecuency.component.css']
})
export class PriceFrecuencyComponent implements OnInit {

  constructor(private priceFrecuencyService: PriceFrecuencyService) { }

  instanceType: string = "m4.4xlarge"
  productDescription: string = "Linux/UNIX"
  availabilityZone:string = "us-east-1a"
  records = []

  instanceTypes: string[] = [
    "t2.nano","t2.micro","t2.small","t2.medium","t2.large","t2.xlarge","t2.2xlarge",
    "t3.nano","t3.micro","t3.small","t3.medium","t3.large","t3.xlarge","t3.2xlarge",
    "m1.small","m1.medium","m1.large","m1.xlarge","m3.medium","m3.large","m3.xlarge","m3.2xlarge",
    "m4.large","m4.xlarge","m4.2xlarge","m4.4xlarge","m4.10xlarge","m4.16xlarge",
    "m2.xlarge","m2.2xlarge","m2.4xlarge",
    "cr1.8xlarge",
    "r3.large","r3.xlarge","r3.2xlarge","r3.4xlarge","r3.8xlarge",
    "r4.large","r4.xlarge","r4.2xlarge","r4.4xlarge","r4.8xlarge","r4.16xlarge",
    "r5.large","r5.xlarge","r5.2xlarge","r5.4xlarge","r5.8xlarge","r5.12xlarge","r5.16xlarge","r5.24xlarge","r5.metal",
    "r5d.large","r5d.xlarge","r5d.2xlarge","r5d.4xlarge","r5d.8xlarge","r5d.12xlarge","r5d.16xlarge","r5d.24xlarge","r5d.metal",
    "x1.16xlarge","x1.32xlarge","x1e.xlarge","x1e.2xlarge","x1e.4xlarge","x1e.8xlarge","x1e.16xlarge","x1e.32xlarge",
    "i2.xlarge","i2.2xlarge",
    "i2.4xlarge","i2.8xlarge",
    "i3.large","i3.xlarge","i3.2xlarge","i3.4xlarge","i3.8xlarge","i3.16xlarge","i3.metal",
    "hi1.4xlarge",
    "hs1.8xlarge",
    "c1.medium","c1.xlarge",
    "c3.large","c3.xlarge","c3.2xlarge","c3.4xlarge","c3.8xlarge",
    "c4.large","c4.xlarge","c4.2xlarge",
    "c4.4xlarge","c4.8xlarge",
    "c5.large","c5.xlarge","c5.2xlarge","c5.4xlarge","c5.9xlarge","c5.18xlarge",
    "c5d.large","c5d.xlarge","c5d.2xlarge","c5d.4xlarge","c5d.9xlarge","c5d.18xlarge",
    "cc1.4xlarge","cc2.8xlarge",
    "g2.2xlarge","g2.8xlarge",
    "g3.4xlarge","g3.8xlarge","g3.16xlarge",
    "cg1.4xlarge",
    "p2.xlarge","p2.8xlarge","p2.16xlarge",
    "p3.2xlarge","p3.8xlarge","p3.16xlarge",
    "d2.xlarge","d2.2xlarge","d2.4xlarge","d2.8xlarge",
    "f1.2xlarge","f1.16xlarge",
    "m5.large","m5.xlarge","m5.2xlarge","m5.4xlarge","m5.12xlarge", "m5.24xlarge",
    "m5d.large","m5d.xlarge","m5d.2xlarge","m5d.4xlarge","m5d.12xlarge","m5d.24xlarge",
    "h1.2xlarge","h1.4xlarge","h1.8xlarge","h1.16xlarge",
    "z1d.large","z1d.xlarge","z1d.2xlarge","z1d.3xlarge","z1d.6xlarge","z1d.12xlarge"
  ]

  //chartLabels:string[] = ["1","2","3","42","25"]
  chartLabels$:Subject<string[]> = new Subject<string[]>()
  chartDataSets$:Subject<any[]> = new Subject<any[]>()
  chartType="bar"
  
  chartLabels:string[] = []
  chartDataSets:any[] = [{data: [], label: 'Frecuency'}]
  chartData:number[] = []
  

  ngOnInit() {
    this.update();
    //this.chartLabels$.subscribe(labels => this.chartLabels=labels)
    //this.chartDataSets$.subscribe(dataSet => this.chartDataSets=dataSet)
  }

  update(){
    this.priceFrecuencyService.getPricesFrecuency(
      this.instanceType,this.productDescription).subscribe((table)=>{
      console.log(table)
      this.records = table.records;
      var data=[]
      var labels=[]
      this.records.forEach(function(value, index){
        labels.push(''+value.highLimit)
        data.push(value.frecuency)        
      });
      
      this.chartLabels=labels
      //this.chartData = data
      //this.chartLabels$.next(labels)
      
      //this.chartDataSets$.next([{data: data, label: 'Frecuency'}])
      
      this.chartDataSets=[{data: data, label: 'Frecuency'}]
    });


  }

}
