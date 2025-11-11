import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTeamComponent } from './restaurant-team.component';

describe('RestaurantTeamComponent', () => {
  let component: RestaurantTeamComponent;
  let fixture: ComponentFixture<RestaurantTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
