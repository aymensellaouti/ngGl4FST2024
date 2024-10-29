import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class RainbowDirective {
  // Chneya les attributs eli nhab ngérihom
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {
    console.log("Rainbow");

  }

  // Chneya les comportements eli nhab ngérihom
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
