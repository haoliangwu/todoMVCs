import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

import { TodoListsService } from './todo-lists.service';
import { DonePipe } from './done.pipe';

import { TodoListAppRoutingModule } from './todo-list-app-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoListAppRoutingModule
  ],
  declarations: [TodoListItemComponent, TodoListComponent, DonePipe, TodoDetailComponent],
  exports: [TodoListComponent],
  providers: [TodoListsService]
})
export class TodoListAppModule { }
