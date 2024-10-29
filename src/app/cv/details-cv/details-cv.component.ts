import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent {
  // J'affiche le cv d'id récupérer de la route
  // 1 je récupére l'id de la route
  // 2 je cherche le cv avec cet id (le cvService fait ca)
  // 21 Le cv existe on l'affiche
  // 22 Le cv n'existe pas on redirige vers la liste des cvs
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  router = inject(Router);
  cvService = inject(CvService);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.getCvById(+id);
    if (!this.cv) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
