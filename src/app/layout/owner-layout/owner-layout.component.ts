import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-owner-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './owner-layout.component.html',
  styleUrl: './owner-layout.component.scss'
})
export class OwnerLayoutComponent {
  year = new Date().getFullYear();

  restaurantId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Restaurant ID =", this.restaurantId);
  }
}
