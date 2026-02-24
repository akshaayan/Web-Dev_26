import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { Dashboard } from './dashboard/dashboard';

@NgModule({
  declarations: [Dashboard],
  imports: [SharedModule],
  exports: [Dashboard]
})
export class DashboardModule {}