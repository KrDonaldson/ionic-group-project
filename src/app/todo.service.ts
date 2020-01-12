import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()

export class TodoService {

  todos: Todo[] = [];

  constructor() { }

}