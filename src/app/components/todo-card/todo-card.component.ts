import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input()  todo;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() confirmEdit = new EventEmitter();
  isOpneModal = false;
  constructor() {}

  deleteTodo = (id) => {
    this.delete.emit(id);
  }

  openEditModal = (todo)=> {
    this.isOpneModal = !this.isOpneModal;
    this.edit.emit(todo);
  }

  saveEdit = (editedValue) => {
    this.confirmEdit.emit(editedValue);
  }

  ngOnInit(): void {
  }

}
