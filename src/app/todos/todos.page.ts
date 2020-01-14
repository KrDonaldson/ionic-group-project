import { TodoServiceService } from './../todo-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  constructor(public _todo: TodoServiceService) { }

  ngOnInit() {
  }

}
