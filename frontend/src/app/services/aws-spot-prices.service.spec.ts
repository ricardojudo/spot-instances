import { TestBed, inject } from '@angular/core/testing';

import { AwsSpotPricesService } from './aws-spot-prices.service';

describe('AwsSpotPricesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwsSpotPricesService]
    });
  });

  it('should be created', inject([AwsSpotPricesService], (service: AwsSpotPricesService) => {
    expect(service).toBeTruthy();
  }));
});
