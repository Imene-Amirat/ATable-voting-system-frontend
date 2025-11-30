import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private API = 'http://localhost:8080/api/owner/restaurants';

  constructor(private http: HttpClient) {}

  createRestaurant(payload: any): Observable<any> {
    return this.http.post(`${this.API}/`, payload);
  }

  getOwnerRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}`);
  }
}
