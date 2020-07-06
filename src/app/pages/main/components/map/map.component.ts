import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

import { GeolocationService } from '@shared/services';
import { BehaviorSubject } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

@Component({
  selector: 'ngcommunity-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @Input() communities: Communities;
  @Input()
  set center(center: google.maps.LatLngLiteral) {
    if (center) {
      this.center$.next(center);
    }
  }

  @Output() clickCommunity: EventEmitter<Community> = new EventEmitter();

  center$ = new BehaviorSubject<google.maps.LatLngLiteral>({
    lat: 36.72016,
    lng: -4.42034,
  });

  markers: any[] = [];
  zoom = 10;

  options: google.maps.MapOptions = {
    zoomControl: true,
    controlSize: 24,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    maxZoom: 14,
    minZoom: 2,
  };

  constructor(private geolocation: GeolocationService) {
    this.geolocation
      .getMyLocation()
      .pipe(takeUntil(this.center$.pipe(skip(1))))
      .subscribe(coords => this.center$.next(coords));
  }

  ngOnInit(): void {
    this.addCommunities();
  }

  addCommunities() {
    const communities = Object.entries(this.communities);
    this.markers = communities.map(([title, { position, image }]) => ({
      position,
      title,
      options: {
        icon: {
          url: image,
          scaledSize: { height: 48, width: 48 },
        },
      },
    }));
  }

  openInfo(marker: MapMarker) {
    const community = this.communities[marker.getTitle()];
    this.clickCommunity.emit(community);
  }
}
