import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      '    ',
      '1234',
      43
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      'student',
      '',
      '12345',
      6
    ),new Cv(
      3,
      'sellaouti',
      'skander',
      'student',
      'rotating_card_profile3.png',
      '112345',
      6
    ),
  ];
  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
