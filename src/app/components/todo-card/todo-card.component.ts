import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input()  todo;
  @Output() delete = new EventEmitter();

  constructor() { }

  deleteTodo = (id) => {
    console.log(id)
    this.delete.emit(id)
  }

  openEditModal = (todo) => {

  }

  ngOnInit(): void {
    console.log(this.todo);
  }

}
