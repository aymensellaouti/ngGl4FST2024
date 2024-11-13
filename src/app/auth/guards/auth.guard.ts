import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_CONST } from 'src/app/config/app-constantes.config';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.isAutheticated()) {
    router.navigate([APP_ROUTES.login]);
    return false;
  }
  return true;
};
