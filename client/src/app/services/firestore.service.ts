import { Injectable } from '@angular/core';
import {FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: FirebaseTSFirestore;

  constructor() {
    this.firestore = new FirebaseTSFirestore();
  }

  // setProductDocument(productId: string, data: { name: string; price: number }) {
  //   this.firestore.setDocument({
  //     path: ['products', productId],
  //     data: data,
  //     onComplete: () => {
  //       console.log('Document successfully written!');
  //     },
  //     onFail: (error: any) => {
  //       console.error('Error writing document:', error);
  //     }
  //   });
  // }

}
