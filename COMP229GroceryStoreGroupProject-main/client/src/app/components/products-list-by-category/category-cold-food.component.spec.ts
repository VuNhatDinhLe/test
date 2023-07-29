import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdFoodCategoryComponent } from './category-cold-food.component';

describe('ColdFoodCategoryComponent', () => {
  let component: ColdFoodCategoryComponent;
  let fixture: ComponentFixture<ColdFoodCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdFoodCategoryComponent]
    });
    fixture = TestBed.createComponent(ColdFoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
