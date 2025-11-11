import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dishes-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dishes-list.component.html',
  styleUrl: './dishes-list.component.scss'
})
export class DishesListComponent {

}
