import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishNewComponent } from './dish-new.component';

describe('DishNewComponent', () => {
  let component: DishNewComponent;
  let fixture: ComponentFixture<DishNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
