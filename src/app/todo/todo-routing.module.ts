import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';

// /todo
const todoRoutes: Routes = [
      { path: '', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(todoRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
