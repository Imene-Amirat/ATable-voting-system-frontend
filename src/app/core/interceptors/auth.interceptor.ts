import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  private authService = inject(AuthService);

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = this.authService.getToken();
    // 1. Si pas de token → on laisse la requête normale
    if (!token) {
      return next.handle(req);
    }

    // 2. Sinon → on clone la requête et on ajoute le header
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true,
      
    });

    // 3. On envoie la requête modifiée
    return next.handle(cloned).pipe(
      catchError((error: HttpErrorResponse) => {

        // TOKEN EXPIRED OR INVALID
        if (error.status === 401) {
          console.warn("⛔ Token expiré ou invalide → déconnexion");

          localStorage.clear();
          this.router.navigate(['/auth/login']);

          return throwError(() => error);
        }

        return throwError(() => error);
      })
    );
  }
}

