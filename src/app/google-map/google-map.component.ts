import { Component, OnInit } from '@angular/core';

//Service
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  isChecking: boolean = false;
  clock;

  constructor(public firebaseService: FirebaseService) {
    
  }

  ngOnInit() {
    this.getUserLocation();
  }

  private getUserLocation() {
    //Locate the user
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.firebaseService.addPosition(position);
        console.log(position);        
      });
    }
  }

  onLocation(){
    if(!this.isChecking) {
    this.clock = setInterval(() => {this.getUserLocation(); console.log(this.firebaseService.lat);}, 1000);
    } else {
      clearInterval(this.clock);
    }
    this.isChecking = !this.isChecking;
  }
}
