import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Array<Object>;
  todo: any;
  constructor() {
    this.todos = [];
  }

  addTodo = (todo) => {
    this.todos.push({ value: todo.value,id: this.todos.length});
  }

  deleteTodo = (id) => {
    this.todos.splice(id, 1);
  }

  editTodo = (todo) => {
    this.todo = todo;
  }

  confirmEdit = (val) => {
    const objIndex = this.todos.findIndex((obj => obj['id'] == val.id));
    this.todos[objIndex] = val;
  }

  ngOnInit(): void {
  }

}
