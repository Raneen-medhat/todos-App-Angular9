import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let input: HTMLElement;
  let todoForm: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [
        BrowserModule,
        FormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TodosComponent);
      component = fixture.componentInstance;
      todoForm = fixture.nativeElement.querySelector('form');
      input = fixture.nativeElement.querySelector('input')
    })
  }));


  it('should call the add Todo method', () => {
    component.addTodo(input)
    expect(component.todos).length > 0;
  });

  
});
