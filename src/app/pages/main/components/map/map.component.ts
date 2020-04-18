import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

import { CommunityService } from 'app/community.service';

@Component({
  selector: 'ngcommunity-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @Output() community: EventEmitter<any> = new EventEmitter();

  markers = [];
  zoom = 11;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    // mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  infoContent = '';

  constructor(private communityService: CommunityService) {}
  ngOnInit() {
    const communities$ = this.communityService.communities;
    communities$.subscribe(console.log);
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) {
      this.zoom++;
    }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) {
      this.zoom--;
    }
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  openInfo(marker: MapMarker, content) {
    console.log('marker', marker);
    console.log('content', content);
    this.community.emit(marker);
  }
}
