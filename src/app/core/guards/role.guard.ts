import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[] | undefined;

  if (!auth.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  // si aucun roles définis → on bloque l'accès
  if (!allowedRoles || allowedRoles.length === 0) {
    router.navigate(['/not-authorized']);
    return false;
  }

  if (auth.hasAnyRole(allowedRoles)) {
    return true; 
  }

  router.navigate(['/not-authorized']);
  return false;
};
