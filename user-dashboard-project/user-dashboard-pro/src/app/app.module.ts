import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { DashboardModule } from './features/dashboard/dashboard-module';
import { UsersModule } from './features/users/users-module';
import { provideHttpClient } from '@angular/common/http';
import { Navbar } from './shared/components/navbar/navbar';
import { LoadingSpinner } from './shared/components/loading-spinner/loading-spinner';

@NgModule({
  declarations: [],
  imports: [
    App,
    BrowserModule,
    // HttpClient,   // REST API support
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    UsersModule,
  ],
  providers: [provideHttpClient()]
})
export class AppModule {}