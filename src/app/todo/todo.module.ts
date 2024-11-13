import { NgModule } from "@angular/core";
import { TodoComponent } from "./component/todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { TodoRoutingModule } from "./todo-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  // chneya el component wel pipe wel directive mta3i
  declarations: [TodoComponent, WeekTodoComponent],
  // Les modules eli nest7a9hom
  imports: [
    TodoRoutingModule,
    FormsModule
  ],
  // El 7ajet eli bech nwaferhom
  providers: [],
})
export class TodoModule {}
