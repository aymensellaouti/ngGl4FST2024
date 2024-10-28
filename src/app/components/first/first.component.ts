import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen';
  /**
   * tmathel est ce que
   * el p visible walla la
   */
  isHidden = false;

  message = '';

  /**
   * show p when hidden
   * and hide p when visible
   */
  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newValue: string) {
    this.message = newValue;
  }
}
