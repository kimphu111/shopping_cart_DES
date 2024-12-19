import { enableProdMode } from '@angular/core';
import { environment } from './enviroments/enviroment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './firebase-config';
import {FirebaseTSApp} from 'firebasets/firebasetsApp/firebaseTSApp';

if (environment.production) {
  enableProdMode();
}

FirebaseTSApp.init(environment.firebaseConfig)

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule
    )
  ]
}).catch(err => console.error(err));
