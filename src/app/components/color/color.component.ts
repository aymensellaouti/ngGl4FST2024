import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  defaultColor = 'red';
  /**
   * La couleur du backgournd de la div
   */
  bgc = this.defaultColor;

  /**
   *
   * @param colorInput : L'input ontenant la couleur
   */
  changeColor(colorInput: HTMLInputElement): void {
    this.bgc = colorInput.value;
    colorInput.value = '';
  }

  /**
   * Remet la couleur par défaut
   */
  reset(): void {
    this.bgc = this.defaultColor;
  }
}
