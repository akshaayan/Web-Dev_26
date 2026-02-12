import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { List } from './app/list/list';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(List, appConfig)
  .catch((err) => console.error(err));

