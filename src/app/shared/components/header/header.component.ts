import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngcommunity-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  static ADD_COMMUNITY = 'add_community';

  constructor(public router: Router) {}

  addCommunity() {
    this.router.navigate([], {
      fragment: HeaderComponent.ADD_COMMUNITY,
    });
  }
}
