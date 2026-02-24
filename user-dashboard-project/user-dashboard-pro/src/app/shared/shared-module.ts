import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';

@NgModule({
  declarations: [
    Navbar,
    LoadingSpinner
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    Navbar,
    LoadingSpinner
  ]
})
export class SharedModule {}
