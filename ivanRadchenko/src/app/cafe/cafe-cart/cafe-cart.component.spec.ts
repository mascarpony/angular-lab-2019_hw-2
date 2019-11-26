import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCartComponent } from './cafe-cart.component';

describe('CafeCartComponent', () => {
  let component: CafeCartComponent;
  let fixture: ComponentFixture<CafeCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
