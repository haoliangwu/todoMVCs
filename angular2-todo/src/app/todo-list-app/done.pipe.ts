import { Pipe, PipeTransform } from '@angular/core';
import { TodoItems } from './model';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(todos: TodoItems, all: boolean = true): any {
    return all ? todos : todos.filter(todo => todo.done)
  }

}
