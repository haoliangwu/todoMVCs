import { Injectable } from '@angular/core';
import { TodoItem } from './model';

@Injectable()
export class TodoListsService {

  constructor() { }

  getTodoItems(): TodoItem[] {
    return [
      new TodoItem('foo', false),
      new TodoItem('bar', true),
      new TodoItem('baz', false)
    ]
  }

}
