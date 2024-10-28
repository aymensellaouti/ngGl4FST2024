import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css'],
})
export class CvItemComponent {
  @Input({ required: true })
  cv!: Cv;
  // Evenement qui nous permet d'envoyer un message au parent
  @Output()
  selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
