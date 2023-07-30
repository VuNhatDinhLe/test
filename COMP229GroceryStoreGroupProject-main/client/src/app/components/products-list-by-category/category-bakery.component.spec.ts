import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryCategoryComponent } from './category-bakery.component';

describe('BakeryCategoryComponent', () => {
  let component: BakeryCategoryComponent;
  let fixture: ComponentFixture<BakeryCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BakeryCategoryComponent]
    });
    fixture = TestBed.createComponent(BakeryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});