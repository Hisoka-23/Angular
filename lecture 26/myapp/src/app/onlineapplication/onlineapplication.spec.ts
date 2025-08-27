import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onlineapplication } from './onlineapplication';

describe('Onlineapplication', () => {
  let component: Onlineapplication;
  let fixture: ComponentFixture<Onlineapplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onlineapplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onlineapplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
