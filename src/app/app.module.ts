import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

//Firebase Stuff
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Google API Stuff
import { AgmCoreModule } from '@agm/core';

//App Componenets
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

//Services
import { FirebaseService } from './firebase.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDNNIJY95hx_CbwNkTiHoyJmz8SKKzeozw",
  authDomain: "pathtracker-1507918042929.firebaseapp.com",
  databaseURL: "https://pathtracker-1507918042929.firebaseio.com",
  projectId: "pathtracker-1507918042929",
  storageBucket: "",
  messagingSenderId: "567048556500"
}

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

