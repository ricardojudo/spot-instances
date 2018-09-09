import { Component, OnInit } from '@angular/core';

import { AwsSpotPricesService } from "../services/aws-spot-prices.service";

@Component({
  selector: 'app-spot-prices',
  templateUrl: './spot-prices.component.html',
  styleUrls: ['./spot-prices.component.css']
})
export class SpotPricesComponent implements OnInit {
  parameters={
    instanceType:"m4.4xlarge",
    productDescription:"Linux/UNIX"
  }
  
  records = []

  constructor(private awsSpotPricesService:AwsSpotPricesService) { }

  ngOnInit() {
    this.update()
  }

  search(parameters){
    this.parameters = parameters;
    this.update()
  }

  update(){
    this.awsSpotPricesService.getPrices(this.parameters).subscribe(records=>{
      console.log(records)
      this.records=records['SpotPriceHistory']
    })
  }

}
