import { Component, Input, OnInit } from '@angular/core';

import { Community } from '@shared/interfaces/communities.interface';

@Component({
  selector: 'ngcommunity-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() community: Community;
  constructor() {}

  ngOnInit(): void {}
}
