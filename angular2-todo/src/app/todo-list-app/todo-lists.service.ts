import { Injectable } from '@angular/core';
import { TodoItem } from './model';

@Injectable()
export class TodoListsService {

  constructor() { }

  getTodoItems(): TodoItem[] {
    return [
      new TodoItem(1, 'foo', false),
      new TodoItem(2, 'bar', true),
      new TodoItem(3, 'baz', false)
    ]
  }

}
