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
  lat: number = 13.72;
  lng: number=100.52;

  constructor(public firebaseService: FirebaseService) {
    
  }

  ngOnInit() {
    this.getUserLocation();
  }

  cv(position: Position){
    let a = {};
    a["latitude"] = position.coords.latitude;
    a["longitude"] = position.coords.longitude;
    a["accuracy"] = position.coords.accuracy;
    a["timestamp"] = position.timestamp;
    return a;
  }

  private getUserLocation() {
    //Locate the user
    //this.lng += 0.1;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let myPos = this.cv(position); 
        this.lat = myPos["latitude"];
        this.lng = myPos["longitude"];
        this.firebaseService.addPosition(myPos);
//        console.log("pp",position, JSON.stringify(position));   
//        console.log('qq');     
      });
    }
  }

  onLocation(){
    if(!this.isChecking) {
    this.clock = setInterval(() => {this.getUserLocation(); console.log(this.firebaseService.lat);}, 250);
    } else {
      clearInterval(this.clock);
    }
    this.isChecking = !this.isChecking;
  }
}
