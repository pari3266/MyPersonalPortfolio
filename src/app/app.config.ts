import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateDayjsPipe } from './pipes/date.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      DateDayjsPipe
    ]),
  ],
};
