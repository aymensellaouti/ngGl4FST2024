import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { APP_CONST } from 'src/app/config/app-constantes.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.isAutheticated()) {
      const cloneReq = request.clone({
        setHeaders: {
          [APP_CONST.accessHeaderApiKey]: localStorage.getItem(APP_CONST.tokenLocalStorageKey) ?? ''
        }
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
export const AuthIntrceptorProvider = {
  useClass: AuthInterceptor,
  provide: HTTP_INTERCEPTORS,
  multi: true
};
