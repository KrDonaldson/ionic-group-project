import { TodoServiceService } from './../todo-service.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  constructor(public _todo: TodoServiceService) { }
=======
// import { Todo } from '../todo';
// import { TodoService } from '../todo.service';

export class TodosPage {

  // newTodo: Todo = new Todo();
>>>>>>> 6e989afda38660bf00eff8e046877f35cc8b8b84

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
