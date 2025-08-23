import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceDetailsComponent } from './product-price-details.component';

describe('ProductPriceDetailsComponent', () => {
  let component: ProductPriceDetailsComponent;
  let fixture: ComponentFixture<ProductPriceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPriceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
