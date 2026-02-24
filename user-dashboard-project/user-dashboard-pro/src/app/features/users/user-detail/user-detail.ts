import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from '../../../core/services/user';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css']
})
export class UserDetail implements OnInit {
  loading = signal(false);
  errorMessage = signal<string | null>(null);

  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loading.set(true);
    this.errorMessage.set(null);

    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          if (!id) {
            this.errorMessage.set('Invalid user id');
            return of(null);
          }
          return this.userService.getUserById(id);
        }),
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err: Error) => {
          this.errorMessage.set(err.message);
        }
      });
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}