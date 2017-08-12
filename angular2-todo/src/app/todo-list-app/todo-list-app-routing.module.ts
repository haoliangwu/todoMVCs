import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoFocusComponent } from './todo-focus/todo-focus.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent,
    children: [
      {
        path: ':id',
        component: TodoDetailComponent
      },
      {
        path: 'compose',
        component: TodoFocusComponent,
        outlet: 'popup'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListAppRoutingModule { }
