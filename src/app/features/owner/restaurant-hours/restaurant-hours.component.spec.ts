import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHoursComponent } from './restaurant-hours.component';

describe('RestaurantHoursComponent', () => {
  let component: RestaurantHoursComponent;
  let fixture: ComponentFixture<RestaurantHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantHoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
