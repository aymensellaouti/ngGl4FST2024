import { inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { APP_CONST } from 'src/app/config/app-constantes.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs: Cv[] = [];

  // Hathaya howa le flux des cvs sélectionnées
  #selectCvSubject$ = new Subject<Cv>();
  /**
   * Le flux des cvs sélectionnées
   */
  selectCv$ = this.#selectCvSubject$.asObservable();
  http = inject(HttpClient);
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

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  getCvByIdFromApi(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  deleteCvByIdFromApi(id: number): Observable<{count:number}> {
    // const params = new HttpParams().set(
    //   APP_CONST.accessParamApiKey,
    //   localStorage.getItem(APP_CONST.tokenLocalStorageKey) ?? ''
    // );

    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   *
   * Retourne un liste fictive de cvs
   *
   * @returns CV[]
   *
   */
  getFakeCvs(): Cv[] {
    return this.#cvs;
  }

  getCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id == id) ?? null;
  }

  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index != -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  /**
   * Ajoute un cv au flux des cvs sélectionnées
   * @param cv : le cv à ajouter au flux
   */
  selectCv(cv: Cv) {
    this.#selectCvSubject$.next(cv);
  }
}
