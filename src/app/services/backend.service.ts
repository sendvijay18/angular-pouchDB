import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { AngularFireStorage } from '@angular/fire/storage';
// import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
// import { firestore } from 'firebase/app';
import { MyNotesProvider } from './my-notes/my-notes';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public db: MyNotesProvider, private _http: HttpClient) { }

  
  
  createUser(formData) {
    if (formData) {
      var doc = {
        "_id": formData.value.email,
        "password": formData.value.password,
        "status": "active"
      }
      this.db.put(formData.value.email, doc);
      // return this.db.put(formData.value.email, formData.value.password);
    }

  }
  
}
