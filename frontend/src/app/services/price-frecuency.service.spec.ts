import { TestBed, inject } from '@angular/core/testing';

import { PriceFrecuencyService } from './price-frecuency.service';

describe('PriceFrecuencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceFrecuencyService]
    });
  });

  it('should be created', inject([PriceFrecuencyService], (service: PriceFrecuencyService) => {
    expect(service).toBeTruthy();
  }));
});
