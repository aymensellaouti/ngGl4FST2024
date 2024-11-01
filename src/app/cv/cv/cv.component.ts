import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  cvService = inject(CvService);
  selectedCv$ = this.cvService.selectCv$;
  // sayHelloService = new SayHelloService();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.sayHelloService.hello();
    //this.cvs = this.cvService.getCvs();
    this.toastr.info('Ya marhba :D');
    loggerService.log('je suis le cvComponent');
    // this.cvService.selectCv$.subscribe({
    //   next: cvSelectionne => this.selectedCv = cvSelectionne
    // })
    this.cvService.getCvs().subscribe({
      next: (cvsFromApi) => {
        this.cvs = cvsFromApi;
      },
      error: (err) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`Les données sont fictives,
          il y a une erreur dans le serveur merci de
          contacter l'admin :(`);
      }
    })
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
