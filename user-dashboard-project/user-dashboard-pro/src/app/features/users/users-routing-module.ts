import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersList} from './users-list/users-list';
import { UserDetail } from './user-detail/user-detail';

const routes: Routes = [
  { path: '', component: UsersList },
  { path: ':id', component: UserDetail }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}