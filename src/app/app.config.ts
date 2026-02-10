import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Imprint } from './imprint/imprint';
import { provideRouter, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'imprint', component: Imprint },
  { path: '', component: PortfolioComponent }, // default route
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideRouter(routes),
  ]
};
