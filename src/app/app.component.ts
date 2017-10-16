import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//Services
import { FirebaseService } from './firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  location = {};


  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
  }

  onWork() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        this.location = position.coords;
        console.log(position.coords);});
    };
  }

  onLocation(){
    setInterval(function() {console.log('hello');}, 1000);
  }
}
