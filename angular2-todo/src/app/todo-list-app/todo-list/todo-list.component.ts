import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: TodoItem[]
  todoItem: TodoItem = new TodoItem('', false)

  constructor() { }

  createNewTodoItem(item: TodoItem){
    this.todos.push(item)
  }

}
