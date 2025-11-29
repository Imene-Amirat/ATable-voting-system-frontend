import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

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
      }
    });

    // 3. On envoie la requête modifiée
    return next.handle(cloned);
  }
}

