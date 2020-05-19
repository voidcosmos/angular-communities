import { Component } from '@angular/core';
import { FirebaseService } from '@shared/services/firebase.service';

@Component({
  selector: 'ngcommunity-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  public displayName: string;

  constructor(public firebaseService: FirebaseService){
    
  }

  login(){
    this.firebaseService.login().subscribe(user => this.displayName = user.displayName);
  }
  logout(){
    this.firebaseService.logout().subscribe(_ => this.displayName = undefined);
  }
}
