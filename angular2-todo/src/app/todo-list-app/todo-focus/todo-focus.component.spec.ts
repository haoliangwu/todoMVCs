import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFocusComponent } from './todo-focus.component';

describe('TodoFocusComponent', () => {
  let component: TodoFocusComponent;
  let fixture: ComponentFixture<TodoFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
