import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../../core/services/owner/restaurant/restaurant.service';
import { CommonModule } from '@angular/common';
import { RestaurantCard } from '../../../core/models/restaurantCard';

@Component({
  selector: 'app-restaurants-list',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './restaurants-list.component.html',
  styleUrl: './restaurants-list.component.scss'
})
export class RestaurantsListComponent implements OnInit{
  restaurants: RestaurantCard[] = [];
  loading = true;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.fetchRestaurants();
  }

  fetchRestaurants() {
    this.restaurantService.getOwnerRestaurants().subscribe({
      next: (data) => {
        this.restaurants = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
