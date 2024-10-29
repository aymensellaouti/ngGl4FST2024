import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs = [
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
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  // sayHelloService = new SayHelloService();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.sayHelloService.hello();
    this.toastr.info('Ya marhba :D')
    loggerService.log('je suis le cvComponent');
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
