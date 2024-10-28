import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {

  @Input()
  messageMenBaba = 'ahla bik';
  @Output()
  sendMessageToBaba = new EventEmitter<string>();

  sendMessage() {
    this.sendMessageToBaba.emit('Chna7walek Baba');
  }
}
