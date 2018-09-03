import { Component, OnInit } from '@angular/core';
import { FrecuencyRecord } from "../models/frecuency-record";
import { PriceFrecuencyService } from "../services/price-frecuency.service";

@Component({
  selector: 'app-price-frecuency',
  templateUrl: './price-frecuency.component.html',
  styleUrls: ['./price-frecuency.component.css']
})
export class PriceFrecuencyComponent implements OnInit {

  constructor(private priceFrecuencyService: PriceFrecuencyService) { }

  instanceType: string = "t2.medium"
  productDescription: string = "Linux/UNIX"
  availabilityZone:string = "us-east-1a"
  records = []

  chartDataSets:any[] = [];
  chartType="bar"
  chartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  ngOnInit() {
    this.update();
  }

  update(){
    this.priceFrecuencyService.getPricesFrecuency(
      this.instanceType,this.productDescription).subscribe((records)=>{
      this.records = records;
      var data=[]
      var chartLabels=[]
      this.records.forEach(function(value, index){
        chartLabels.push(value.highLimit)
        data.push(value.frecuency)
      });
      this.chartDataSets= [{data: data, label: 'Frecuency'}]
      this.chartLabels = chartLabels      
    });
  }

}
