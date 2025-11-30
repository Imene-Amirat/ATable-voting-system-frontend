import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../../../core/services/owner/dish/dish.service';
import { DishCreate } from '../../../core/models/dishCreate';

@Component({
  selector: 'app-dish-new',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './dish-new.component.html',
  styleUrl: './dish-new.component.scss'
})
export class DishNewComponent {
restaurantId!: number;

  dishForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(1)]],
    category: ['', Validators.required],
    imageUrl: ['', Validators.required],
    ingredients: [''],
    veggie: [false],
    spicy: [false],
    vegan: [false],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dishService: DishService,
    private router: Router
  ) {}

  ngOnInit() {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submitDish() {
    if (this.dishForm.invalid) {
      this.dishForm.markAllAsTouched();
      return;
    }

    const payload: DishCreate = {
      restaurantId: this.restaurantId,
      name: this.dishForm.value.name ?? '',
      description: this.dishForm.value.description ?? '',
      price: Number(this.dishForm.value.price),
      category: this.dishForm.value.category ?? '',
      imageUrl: this.dishForm.value.imageUrl ?? '',
      ingredients: this.dishForm.value.ingredients ?? '',
      veggie: !!this.dishForm.value.veggie,
      spicy: !!this.dishForm.value.spicy,
      vegan: !!this.dishForm.value.vegan
    };

    this.dishService.createDish(payload).subscribe({
      next: () => {
        this.router.navigate([`/owner/restaurants/${this.restaurantId}/dishes`]);
      },
      error: (err) => console.error(err)
    });
  }

  cancel(): void {
    this.router.navigate([`/owner/restaurants/${this.restaurantId}/dishes`]);
  }
}
