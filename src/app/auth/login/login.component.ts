import { Component, inject } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { AuthService } from '../service/auth.service';
import { APP_CONST } from 'src/app/config/app-constantes.config';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        // Khabina el token fel local storage
        localStorage.setItem(APP_CONST.tokenLocalStorageKey, response.id);
        // ra7bna bih
        this.toastr.success('Bienvenu :D');
        // Hazinah lel page cv
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (erreur) => {
        // Thabet Ro7ek
        this.toastr.error('Veuillez vérifier vos credentials');
      },
    })
  }
}
