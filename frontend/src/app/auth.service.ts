import { Injectable, inject, signal } from '@angular/core';
import { UserInterface } from './user.interface';
import{Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user} from "@angular/fire/auth"
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth=inject(Auth);
  user$=user(this.firebaseAuth);
  currentUserSig= signal<UserInterface|null|undefined>(null);
  
  register(email:string, username: string, password:string,): Observable<void>{
    const promise=createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
      ).then((response)=>
        updateProfile(response.user,{displayName:username}),
      );
    return from(promise);
  }

  login(email:string, password:string):Observable<void>{
    const promise=signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(()=>{})
    return from(promise);  
  }

  logout(): Observable<void> {
    const promise= signOut(this.firebaseAuth);
    return from(promise);
  }
}
