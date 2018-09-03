import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFrecuencyComponent } from './price-frecuency.component';

describe('PriceFrecuencyComponent', () => {
  let component: PriceFrecuencyComponent;
  let fixture: ComponentFixture<PriceFrecuencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceFrecuencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceFrecuencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
