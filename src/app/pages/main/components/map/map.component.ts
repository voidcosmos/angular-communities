import { Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

import { Communities, Community } from '@shared/interfaces';
import { GeolocationService } from '@shared/services';

@Component({
  selector: 'ngcommunity-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @Output() community: EventEmitter<Community> = new EventEmitter();
  @Input() communities: Communities;

  markers: any[] = [];
  zoom = 11;
  center$ = this.geolocation.getMyLocationOr({
    lat: 36.72016,
    lng: -4.42034,
  });
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 4,
  };

  constructor(private geolocation: GeolocationService) {}

  ngOnInit(): void {
    this.addCommunities();
  }

  addCommunities() {
    const communities = Object.entries(this.communities);
    this.markers = communities.map(([title, { id, position }]) => ({
      position,
      title,
      options: {
        icon: {
          url: `assets/images/${id}.png`,
          scaledSize: { height: 48, width: 48 },
        },
      },
    }));
  }

  openInfo(marker: MapMarker) {
    const community = this.communities[marker.getTitle()];
    this.community.emit(community);
  }
}
