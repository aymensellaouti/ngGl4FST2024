import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CvService } from './cv.service';
import { API } from 'src/config/api.config';

fdescribe('CvService', () => {
  let cvService: CvService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    cvService = TestBed.inject(CvService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should instanciate CvService', () => {
    expect(cvService).toBeTruthy();
  });
  it('should get cvs list', () => {
    /**
     *  Appelez la méthode testée qui envoie des requêtes HTTP.
        Récupérer les requêtes en attente
        Répondre à ces requêtes avec de fausses données.
        Vérifier le résultat de l'appel de la méthode
        Vérifier que toutes les requêtes ont été gérées
     */
    // Act
    cvService.getCvs().subscribe(
      cvs => {
        expect(cvs).toBeTruthy();
        expect(cvs).toBe(expectedCvs);
        expect(cvs[0].firstname).toBe('aymen');
      }
    );
    const req = httpController.expectOne(API.cv);
    const expectedCvs = cvService.getFakeCvs()
    req.flush(expectedCvs);

    expect(cvService).toBeTruthy();
  });
});
