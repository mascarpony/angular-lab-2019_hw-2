import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeContainerComponent } from './cafe-container.component';

describe('CafeContainerComponent', () => {
  let component: CafeContainerComponent;
  let fixture: ComponentFixture<CafeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
