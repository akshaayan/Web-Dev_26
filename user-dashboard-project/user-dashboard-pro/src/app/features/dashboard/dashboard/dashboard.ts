import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  // Angular Signals for local UI state
  visitCount = signal(1);
  appTitle = signal('User Dashboard Pro');
  welcomeMessage = computed(() => `Welcome to ${this.appTitle()}!`);

  increaseVisits(): void {
    this.visitCount.update(v => v + 1);
  }

  renameApp(): void {
    this.appTitle.set('User Dashboard Pro (Updated)');
  }
}