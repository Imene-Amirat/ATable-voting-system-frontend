import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DishCard } from '../../../core/models/dishCard';
import { DishService } from '../../../core/services/owner/dish/dish.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dishes-list',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './dishes-list.component.html',
  styleUrl: './dishes-list.component.scss'
})
export class DishesListComponent implements OnInit {
  dishes: DishCard[] = [];
  restaurantId!: number;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('DishesListComponent initialized');
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Restaurant ID:', this.restaurantId);
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishesByRestaurant(this.restaurantId).subscribe({
      next: (data) => {
        console.log('Dishes loaded:', data);
        this.dishes = data;
      },
      error: (err) => {
        console.error('Error loading dishes', err);
      }
    });
  }
}
