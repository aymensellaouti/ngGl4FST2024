import { Component } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  // le représentant du todo à ajouter
  todo = new Todo();
  constructor(
  ) {}

}
