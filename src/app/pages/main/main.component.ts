import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  community;
  ngOnInit() {}

  onMapClick($event) {
    console.log('mainComponent', $event);
  }
}
