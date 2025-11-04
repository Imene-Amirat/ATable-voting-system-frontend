import { Component, inject  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
