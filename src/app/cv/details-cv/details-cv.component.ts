import { Component } from '@angular/core';
import { Cv } from '../model/cv';


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

  constructor(

  ) {
  }

  deleteCv() {

  }
}
