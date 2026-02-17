import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Todo} from '../models/todo'

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
@Input() todo! : Todo; 
@Output() toggle=new EventEmitter<number>; 
@Output() remove=new EventEmitter<number>;

onRemove() {
  this.remove.emit(this.todo.id)
}
onToggle() {
  this.toggle.emit(this.todo.id)
}
}
