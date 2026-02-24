import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { UsersRoutingModule } from './users-routing-module';

import { UsersList } from './users-list/users-list';
import { UserDetail } from './user-detail/user-detail';

@NgModule({
  declarations: [UsersList, UserDetail],
  imports: [SharedModule, UsersRoutingModule, ]
})
export class UsersModule {}