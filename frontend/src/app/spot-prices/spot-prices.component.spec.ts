import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotPricesComponent } from './spot-prices.component';

describe('SpotPricesComponent', () => {
  let component: SpotPricesComponent;
  let fixture: ComponentFixture<SpotPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
