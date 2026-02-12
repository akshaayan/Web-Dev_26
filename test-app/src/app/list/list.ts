import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  // templateUrl: './list.html',
  template: `<p>{{list_item}}</p>

<ul>
    <li *ngFor="let item of list_items">{{item}}</li>
</ul>`,
  styleUrl: './list.css',
})
export class List { 
  list_item = 'ABC';
  list_items = ['A', 'B', 'C'];
}
bootstrapApplication(List)