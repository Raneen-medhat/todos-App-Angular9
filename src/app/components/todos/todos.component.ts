import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: [{}];
  constructor() {
    this.todos = [{}];
  }

  deleteTodo = (id) => {
    this.todos.splice(id, 1);
  }

  editTodo = (id) => {
    
  }
  ngOnInit(): void {
  }

  addTodo = (todo) => {
    this.todos.push({ value: todo.value,id: this.todos.length});
  }
  
}

