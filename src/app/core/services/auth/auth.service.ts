import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../../models/authResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL = 'http://localhost:8080/api/auth'; 
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ROLE_KEY = 'auth_role';
  private router = inject(Router);

  constructor(private http: HttpClient) { }

  signup(payload: {username: string, email: string, password: string, confirmPassword: string, role: string}): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, payload)
  };

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post(`${this.API_URL}/login`, {email, password}).pipe(
      tap((response: any) => {
        const token = response.token;
        if (token) {
          localStorage.setItem(this.TOKEN_KEY, token);
          localStorage.setItem(this.ROLE_KEY, response.role);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  hasAnyRole(roles: string[]): boolean {
    const currentRole = this.getRole();
    return !!currentRole && roles.includes(currentRole);
  }
}
