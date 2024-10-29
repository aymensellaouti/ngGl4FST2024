import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];

constructor() {

  }

  /**
   *
   * Retourne un liste fictive de cvs
   *
   * @returns CV[]
   *
   */
  getCvs(): Cv[] {
    return this.cvs;
  }


}
