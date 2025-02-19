import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
