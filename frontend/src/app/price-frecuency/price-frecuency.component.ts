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

  instanceType: string = "t2.micro"
  productDescription: string = "Linux/UNIX"
  availabilityZone:string 
  records = []

  ngOnInit() {
    this.records = this.priceFrecuencyService.getPricesFrecuency();
  }

  

}
