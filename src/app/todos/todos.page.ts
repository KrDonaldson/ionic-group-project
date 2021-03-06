import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import  {NeedToComponent} from '../need-to/need-to.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})

export class TodosPage {

  name: string = "Peter" 
  newTodo: Todo = new Todo();

  constructor(private _todoServe: TodoService) {

  }

  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._todoServe.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoServe.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoServe.deleteTodoById(todo.id);
  }

  get todos() {
    return this._todoServe.getAllTodos();
  }
}
