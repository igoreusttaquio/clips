import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection<IUser>;
  private db = inject(AngularFirestore);
  private auth = inject(AngularFireAuth);

  constructor() {
    this.usersCollection = this.db.collection<IUser>('users');
  }
  public async createUser(userData: IUser) {
    if(!userData.password) {
      throw new Error("User password can't be empty!")
    }
    const userCredential = await this.auth.createUserWithEmailAndPassword(
      userData.email as string,
      userData.password as string);

      if(!userCredential.user)
      {
        throw new Error("User can't be found")
      }
    //await this.usersCollection.add({
      await this.usersCollection.doc(userCredential.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber
    });

    await userCredential.user.updateProfile({
      displayName: userData.name
    });
  }
}
