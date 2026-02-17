import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/todo';
import { TodoItem } from '../todo-item/todo-item';


@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todos: Todo[] = [];
  newTodoText = '';
  nextId=1; 
  addTodo(){
    if(!this.newTodoText.trim()) return;

    this.todos.push({
      id: this.nextId++,
      text: this.newTodoText,
      completed: false,
      isEditing: false, 
      date: 'new'
    });

    this.newTodoText='';

  }

  removeTodo(id:number){
    this.todos = this.todos.filter(t=> t.id ===id)
  }

  toggleCompleted(id:number){
    const todo = this.todos.find(t=> t.id ===id);

    if(todo){
      todo.completed = !todo.completed;
    }
  }
}


