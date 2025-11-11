import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBrandingComponent } from './restaurant-branding.component';

describe('RestaurantBrandingComponent', () => {
  let component: RestaurantBrandingComponent;
  let fixture: ComponentFixture<RestaurantBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantBrandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
