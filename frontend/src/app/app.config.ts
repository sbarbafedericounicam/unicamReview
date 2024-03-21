import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient} from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJaTnefZqG6q2M6iGEIVkNAd0nyCzWeCY",
  authDomain: "angular-firebase-app-8ff34.firebaseapp.com",
  projectId: "angular-firebase-app-8ff34",
  storageBucket: "angular-firebase-app-8ff34.appspot.com",
  messagingSenderId: "703966636244",
  appId: "1:703966636244:web:4dc71a9465d1f5461ab341"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(()=>initializeApp(firebaseConfig)),
      provideAuth(()=>getAuth())
    ]),
  ],
};