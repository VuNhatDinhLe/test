import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotFoodCategoryComponent } from './category-hot-food.component';

describe('HotFoodCategoryComponent', () => {
  let component: HotFoodCategoryComponent;
  let fixture: ComponentFixture<HotFoodCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotFoodCategoryComponent]
    });
    fixture = TestBed.createComponent(HotFoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
