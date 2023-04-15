import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { APP_ROUTES } from "./app/app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch(err => console.error(err));
