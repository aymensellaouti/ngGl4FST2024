import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {}

  /**
   * retourne la liste des todos
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return [];
  }

  /**
   *
   * Logger la liste des todos
   */
  logTodos(): void {
  }
  /**
   * Retourne true si l'élément est supprimé, false sinon
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
   return false;
  }

  /**
   * Ajoute un todo
   * @param todo : Todo
   */
  addTodo(todo: Todo): void {
  }

}
