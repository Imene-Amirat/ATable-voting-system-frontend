import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DishCreate } from '../../../models/dishCreate';
import { DishCard } from  '../../../models/dishCard';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private API = 'http://localhost:8080/api/owner/restaurants';

  constructor(private http: HttpClient) {}

  createDish(payload: DishCreate): Observable<any> {
    return this.http.post(`${this.API}/${payload.restaurantId}/dishes`, payload, { withCredentials: true });
  }

  getDishesByRestaurant(restaurantId: number): Observable<DishCard[]> {
    return this.http.get<DishCard[]>(`${this.API}/${restaurantId}/dishes`);
  }
}
