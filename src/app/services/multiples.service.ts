import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MultiplesService {
  constructor(private firestore: AngularFirestore) {}

  saveQuery(num: number, result: any) {
    alert("Saving " + num);
    return this.firestore.collection('queries').add({
      number: num,
      result: result,
      date: new Date(),
    });
  }
}
