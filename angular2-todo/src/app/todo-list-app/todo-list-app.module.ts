import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

import { TodoListsService } from './todo-lists.service';
import { DonePipe } from './done.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TodoListItemComponent, TodoListComponent, DonePipe],
  exports: [TodoListComponent],
  providers: [TodoListsService]
})
export class TodoListAppModule { }
