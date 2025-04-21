import { bootstrapApplication } from '@angular/platform-browser';
import { AppConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app/app.routes';


bootstrapApplication(AppComponent, AppConfig)
  .catch((err) => console.error(err));
