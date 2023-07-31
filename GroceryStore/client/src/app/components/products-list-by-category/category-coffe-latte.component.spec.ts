import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeLatteCategoryComponent } from './category-coffe-latte.component';

describe('CoffeLatteCategoryComponent', () => {
  let component: CoffeLatteCategoryComponent;
  let fixture: ComponentFixture<CoffeLatteCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeLatteCategoryComponent]
    });
    fixture = TestBed.createComponent(CoffeLatteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
