import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { UserDetail } from './features/users/user-detail/user-detail';

export const routes: Routes = [
  { path: '', component: Dashboard },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users-module').then((m) => m.UsersModule)
  },
  { path: '**', redirectTo: '' }
];
