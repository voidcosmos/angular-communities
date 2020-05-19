import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

    public displayName: string;
    public userId: string;

    constructor(public auth: AngularFireAuth){
        // This should be move into a state manager such as Redux in the future
        this.auth.onAuthStateChanged(user => {
          if(user){
            this.displayName = user.displayName;
            this.userId = user.uid;
          } else {
            this.displayName = undefined;
            this.userId = undefined;
          }
        });
    }

    login(): Observable<{displayName: string}>{
        return from(this.auth.signInWithPopup(new auth.GithubAuthProvider())).pipe(
            map((user)=>{
                return {displayName: user?.user?.displayName}
            })
        )
    }

    logout(): Observable<void>{
        return from(this.auth.signOut());
    }
}
