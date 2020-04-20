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
import { Subject, merge } from 'rxjs';

import { GeolocationService } from '@shared/services';

@Component({
  selector: 'ngcommunity-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @Output() community: EventEmitter<Community> = new EventEmitter();
  @Input() communities: Communities;
  @Input() marked: Community;

  markers$ = new Subject<google.maps.LatLngLiteral>();

  markers: any[] = [];
  zoom = 11;
  center$ = merge(
    this.geolocation.getMyLocationOr({
      lat: 36.72016,
      lng: -4.42034,
    }),
    this.markers$,
  );
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    streetViewControl: false,
    maxZoom: 12,
    minZoom: 4,
  };

  constructor(private geolocation: GeolocationService) {}

  ngOnInit(): void {
    this.addCommunities();
  }

  ngOnChanges({ marked }: SimpleChanges) {
    if (marked && this.marked) {
      this.markers$.next(this.marked.position);
    }
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
