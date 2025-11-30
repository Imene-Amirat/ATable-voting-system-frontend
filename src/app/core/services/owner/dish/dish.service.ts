import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DishCreate } from '../../../models/dishCreate';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private API = 'http://localhost:8080/api/owner/restaurants';

  constructor(private http: HttpClient) {}

  createDish(payload: DishCreate): Observable<any> {
    return this.http.post(this.API, payload, { withCredentials: true });
  }
}
