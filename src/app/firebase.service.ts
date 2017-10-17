//Core
import { Injectable } from '@angular/core'

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore} from 'angularfire2/firestore'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class FirebaseService {
//    positions: AngularFireList<{}> ; //: Observable<any[]>;
    positions:  Observable<any[]>;
    lat: number;
    lng: number;

   constructor(private db: AngularFireDatabase) {
//       constructor(private db: AngularFirestore) {
            
//        this.positions = db.collection('positions').valueChanges();
//        console.log('jazno', this.positions);
        // db.list('/positions').valueChanges()
        //    .subscribe((positions) => {
        //      this.positions = positions;
        //      console.log(this.positions);
        //    });
       }

    addPosition(newPos) {
        //this.positions = this.db.list('/positions/');
        console.log("Positions: ", newPos);
        const itemRef = this.db.list('positions');
        //itemRef.push({pos: "pop"});
        //this.positions.push(newPos);
        this.lat = newPos.coords.latitude;
        this.lng = newPos.coords.longitude;
    }
}