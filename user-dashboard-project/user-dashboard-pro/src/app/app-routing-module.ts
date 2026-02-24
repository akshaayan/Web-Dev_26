import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard/dashboard';

const routes: Routes = [
  { path: '', component: Dashboard },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users-module').then((m) => m.UsersModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}