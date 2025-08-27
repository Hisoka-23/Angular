import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Woment } from './woment';

describe('Woment', () => {
  let component: Woment;
  let fixture: ComponentFixture<Woment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Woment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Woment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
