import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent {
  color = 'green';
  bgc = 'blue';
  font = 90;
  isOn = false;
  interrupteur() {
    this.isOn = ! this.isOn;
  }
}
