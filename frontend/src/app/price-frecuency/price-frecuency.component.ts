import { Component, OnInit } from '@angular/core';
import { FrecuencyRecord, FrecuencyTable } from "../models/frecuency-record";
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

  records = []
  table:FrecuencyTable
  parameters={
    instanceType:"m4.4xlarge",
    productDescription:"Linux/UNIX"
  }


  search(parameters){
    this.parameters = parameters;
    this.update()
  }

  ngOnInit() {
    this.update();
  }

  update(){
    this.priceFrecuencyService.getPricesFrecuency(this.parameters).subscribe((table)=>{
      console.log(table)
      this.table = table
      this.records = table.records;

      this.dataSource={
        chart: {
            "caption": "Spot Prices",
            "xAxisName": "Price",
            "yAxisName": "Frecuency",
            "theme": "carbon",
        },
        // Chart Data
        "data": table.data
      }

    });
  }

  dataSource: Object= {
    chart: {
        "caption": "Spot Prices",
        "xAxisName": "Price",
        "yAxisName": "Frecuency",
        "theme": "fusion",
    },
    // Chart Data
    "data": []
};

}
