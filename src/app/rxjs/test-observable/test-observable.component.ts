import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  // Le flux mta3 compte à rebours
  observable$: Observable<number>;
  toaster = inject(ToastrService)
  constructor() {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // Jit 9ayedet
    // setTimeout(() => {
      this.observable$.subscribe({
        next: (edataEliJayaMelFlux) => {
          console.log(edataEliJayaMelFlux);
        },
      });
    // }, 3000);
    // Jit 9ayedet
    this.observable$
    // 5 4 3 2 1
    .pipe(
      map(dataJdida => dataJdida * 3),
    // 15 12 9 6 3
      filter( data => data % 2 == 0 )
    // 12 6
    )
    .subscribe({
      next: (edataEliJayaMelFlux) => {
        this.toaster.info('' + edataEliJayaMelFlux);
      },
      complete: () => {
        this.toaster.error('BOOOOOM !!!!!!');
      }
    });
  }
}
