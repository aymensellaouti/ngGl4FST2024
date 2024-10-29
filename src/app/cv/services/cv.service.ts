import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs: Cv[] = [];

constructor() {
  this.#cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '    ', '1234', 43),
    new Cv(2, 'sellaouti', 'skander', 'student', '', '12345', 6),
    new Cv(
      3,
      'sellaouti',
      'skander',
      'student',
      'rotating_card_profile3.png',
      '112345',
      6
    ),
  ];
}

  /**
   *
   * Retourne un liste fictive de cvs
   *
   * @returns CV[]
   *
   */
  getCvs(): Cv[] {
    return this.#cvs;
  }

  getCvById(id: number): Cv | null {
    return this.#cvs.find(cv => cv.id == id) ?? null;
  }

  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index != -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }


}
