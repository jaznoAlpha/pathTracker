//Core
import { Injectable } from '@angular/core'

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
    positions: AngularFireList<{}> ; //: Observable<any[]>;
    lat: number;
    lng: number;

    constructor(private db: AngularFireDatabase) {
        
        this.positions = db.list('/positions');
        console.log('jazno', this.positions);
        // db.list('/positions').valueChanges()
        //    .subscribe((positions) => {
        //      this.positions = positions;
        //      console.log(this.positions);
        //    });
       }

    addPosition(newPos) {
        this.positions = this.db.list('/positions');
        this.positions.push(newPos);
        this.lat = newPos.coords.latitude;
        this.lng = newPos.coords.longitude;
    }
}