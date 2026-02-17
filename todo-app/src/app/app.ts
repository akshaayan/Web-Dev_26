// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('todo-app');
// }

import { Component } from '@angular/core';
import { TodoList } from './todo-list/todo-list';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [TodoList],

  template: `<app-todo-list />`

})
export class App {}