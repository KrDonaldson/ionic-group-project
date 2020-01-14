import { TodoServiceService } from './../todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})

export class TodosPage {

  // newTodo: Todo = new Todo();

  constructor() {
    // private _todoServe: TodoService
  // }

  // addTodo() {
  //   if (!this.newTodo.title) {
  //     return;
  //   }

  //   this._todoServe.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  // toggleTodoComplete(todo) {
  //   this._todoServe.toggleTodoComplete(todo);
  // }

  // removeTodo(todo) {
  //   this._todoServe.deleteTodoById(todo.id);
  // }

  // get todos() {
  //   return this._todoServe.getAllTodos();
  }
}
