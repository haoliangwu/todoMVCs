import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListAppModule } from './todo-list-app/todo-list-app.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoListAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
