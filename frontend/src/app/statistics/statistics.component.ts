import { Component, OnInit } from '@angular/core';
import { PriceFrecuencyService } from "../services/price-frecuency.service";
import { SpotPriceStatistics } from "../models/spot-price-statistics";
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  parameters={
    instanceType:'m4.4xlarge',
    productDescription: 'Linux/UNIX'
  }

  statistics:SpotPriceStatistics
  dataSource
  
  constructor(private priceFrecuencyService:PriceFrecuencyService) { }

  ngOnInit() {
    this.update()
  }

  getStatsKeys(){
    return Object.keys(this.statistics.stats)
  }

  update(){
    this.priceFrecuencyService.getStatistics(this.parameters).subscribe(statistics=>{
      this.statistics=statistics


      this.dataSource={
        chart: {
            "caption": "Spot Prices",
            "xAxisName": "Price",
            "yAxisName": "Frecuency",
            "theme": "carbon",
        },
        // Chart Data
        "data": statistics.getHistogram()
    }

    })
  }

}
