import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { TodoCardComponent } from './todo-card.component';
import { TodosComponent } from '../todos/todos.component';

describe('TodoCardComponent', () => {
  let component: TodoCardComponent;
  let fixture: ComponentFixture<TodoCardComponent>;
  let parent: TodosComponent;
  let fixture2: ComponentFixture<TodosComponent>;
  let editBtn: HTMLElement;
  let deleteBtn: HTMLElement;
  let input: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCardComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TodoCardComponent);
      component = fixture.componentInstance;
      fixture2 = TestBed.createComponent(TodosComponent);
      parent = fixture2.componentInstance;
      input = fixture2.nativeElement.querySelector('input')
      editBtn = fixture.nativeElement.querySelector('#edit');
      deleteBtn = fixture.nativeElement.querySelector('#delete');
    })
  }));

  it('should show modal component if openEditModal true', () => {
    editBtn.click()
    component.openEditModal(component.todo)
    expect(component.openEditModal(component.todo));
    expect(component.isOpneModal).toBeTrue();
  });


  it('should delete item if deleteTodo called', () => {
    parent.addTodo('test');
    parent.addTodo('test2');
    expect(parent.todos).length > 0;
    deleteBtn.click()
    component.deleteTodo(0);
    parent.deleteTodo(0)
    expect(parent.todos.length).toBe(1) ;
  });
});
