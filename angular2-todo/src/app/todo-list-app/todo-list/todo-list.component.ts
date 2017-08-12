import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodoItem } from '../model';
import { TodoListsService } from '../todo-lists.service';

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[]
  todoItem: TodoItem
  showAll: boolean = true
  todoForm: FormGroup
  todoNameControl: FormControl
  previousId: number

  service: TodoListsService
  fb: FormBuilder

  get isTodoNameRequired() { return this.todoForm.getError('required', ['name']) }

  constructor(
    service: TodoListsService,
    fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.service = service
    this.fb = fb
  }

  ngOnInit(): void {
    this.todos = this.service.getTodoItems()
    this.todoNameControl = this.fb.control('', [Validators.required])
    this.todoForm = this.fb.group({
      name: this.todoNameControl
    })

    this.todoNameControl.valueChanges.forEach((val: string) => {
      this.todoItem.name = val
    })

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return Promise.resolve(params.get('previousId'))
      })
      .subscribe((previousId: string) => {
        this.previousId = parseInt(previousId)
      })
  }

  createNewTodoItem(todoName: string) {
    if (!todoName || todoName === '') {
      this.todoForm.markAsDirty()
      return
    }

    const item = new TodoItem(new Date().getTime(), todoName)
    this.todos.push(item)
    this.todoNameControl.reset('')
  }

  removeTodoItem(todo: TodoItem) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

  isSelected(todo: TodoItem) {
    return todo.id === this.previousId
  }

}
