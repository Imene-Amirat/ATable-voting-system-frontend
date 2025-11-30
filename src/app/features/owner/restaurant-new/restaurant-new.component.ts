import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../../../core/services/owner/restaurant/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-new',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './restaurant-new.component.html',
})
export class RestaurantNewComponent {
  restaurantForm: FormGroup;
  successMessage: string | null = null;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: [''],
      website: [''],
      photoUrl: ['']
    });
  }

  submitRestaurant() {
    if (this.restaurantForm.invalid) {
      this.restaurantForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    this.restaurantService.createRestaurant(this.restaurantForm.value).subscribe({
      next: () => {
        this.successMessage = "Restaurant créé avec succès ✔";
        setTimeout(() => this.router.navigate(['/owner/restaurants']), 1200);
      },
      error: (err) => {
        console.error(err);
        this.isSubmitting = false;
        alert("Erreur lors de la création du restaurant.");
      }
    });
  }
}