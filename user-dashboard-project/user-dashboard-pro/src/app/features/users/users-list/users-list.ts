import { Component, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { UserService } from '../../../core/services/user';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.css']
})
export class UsersList implements OnInit {
  // Signals for UI state
  loading = signal(false);
  errorMessage = signal<string | null>(null);
  searchTerm = signal('');
  selectedUserId = signal<number | null>(null);

  // Data
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading.set(true);
    this.errorMessage.set(null);

    this.userService.getUsers()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.users = data;
          this.applyFilter();
        },
        error: (err: Error) => {
          this.errorMessage.set(err.message);
        }
      });
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
    this.applyFilter();
  }

  applyFilter(): void {
    const term = this.searchTerm().toLowerCase().trim();

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.company.name.toLowerCase().includes(term)
    );
  }

  markSelected(id: number): void {
    this.selectedUserId.set(id);
  }
}