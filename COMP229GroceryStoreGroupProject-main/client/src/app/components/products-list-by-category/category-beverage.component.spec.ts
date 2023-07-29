import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageCategoryComponent } from './category-beverage.component';

describe('BeverageCategoryComponent', () => {
  let component: BeverageCategoryComponent;
  let fixture: ComponentFixture<BeverageCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverageCategoryComponent]
    });
    fixture = TestBed.createComponent(BeverageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
