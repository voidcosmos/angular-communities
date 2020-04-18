import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngcommunity-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() community: any; // TODO (Carlos): Typings
  constructor() {}

  ngOnInit(): void {}
}
