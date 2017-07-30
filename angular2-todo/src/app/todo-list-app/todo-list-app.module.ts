import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoListItemComponent, TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListAppModule { }
