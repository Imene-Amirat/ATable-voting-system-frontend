import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurants-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurants-list.component.html',
  styleUrl: './restaurants-list.component.scss'
})
export class RestaurantsListComponent {

}
