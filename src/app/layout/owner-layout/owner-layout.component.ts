import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-owner-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './owner-layout.component.html',
  styleUrl: './owner-layout.component.scss'
})
export class OwnerLayoutComponent {
  year = new Date().getFullYear();
}
