import { Communities, Community } from '@shared/interfaces';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

import { GeolocationService } from '@shared/services';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngcommunity-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @Input() communities: Communities;
  @Input() center: google.maps.LatLngLiteral;

  @Output() clickCommunity: EventEmitter<Community> = new EventEmitter();

  center$ = new Subject<google.maps.LatLngLiteral>();

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
      .getMyLocationOr({
        lat: 36.72016,
        lng: -4.42034,
      })
      .subscribe(coords => this.center$.next(coords));
  }

  ngOnInit(): void {
    this.addCommunities();
  }

  ngOnChanges({ center }: SimpleChanges) {
    if (center && this.center) {
      this.center$.next(this.center);
    }
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
