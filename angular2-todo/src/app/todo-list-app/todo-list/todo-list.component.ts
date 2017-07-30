import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TodoItem } from '../model';
import { TodoListsService } from '../todo-lists.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[]
  todoItem: TodoItem = new TodoItem('', false)
  showAll: boolean = false
  todoForm: FormGroup
  todoNameControl: FormControl

  service: TodoListsService
  fb: FormBuilder

  get isTodoNameRequired() { return this.todoForm.getError('required', ['name']) }

  constructor(service: TodoListsService, fb: FormBuilder) {
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
  }

  createNewTodoItem(todoName: string) {
    if (!todoName || todoName === '') {
      this.todoForm.markAsDirty()
      return
    }

    const item = new TodoItem(todoName)
    this.todos.push(item)
    this.todoNameControl.reset('')
  }

  removeTodoItem(todo: TodoItem) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

}
