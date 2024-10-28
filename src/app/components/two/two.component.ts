import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

  two = 'init value';

  changeTwo() {
    this.two = 'valeur jdida';
  }
}
