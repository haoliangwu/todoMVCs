import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItem } from '../model';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TodoItem
  @Output() removeRequest: EventEmitter<TodoItem> = new EventEmitter()

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggle(todo: TodoItem) {
    todo.toggle(!todo.done)
  }

  onRemoveItem(todo: TodoItem) {
    this.removeRequest.emit(todo)
  }

  viewDetail(todo: TodoItem) {
    this.router.navigate(['/todo', todo.id])
  }

}
