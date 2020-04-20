import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, first, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private fromNavigator$ = new Observable<google.maps.LatLngLiteral>(observer => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => observer.next({ lat: coords.latitude, lng: coords.longitude }),
      error => {
        console.error(error);
        observer.error(error);
        observer.complete();
      },
    );
  }).pipe(first());

  private fromAPI$ = this.httpClient
    .get<{ latitude: number; longitude: number }>('//freegeoip.app/json/')
    .pipe(
      map(({ latitude, longitude }) => ({
        lat: latitude,
        lng: longitude,
      })),
    );

  constructor(private httpClient: HttpClient) {}

  getMyLocationOr(defaultCoords: google.maps.LatLngLiteral): Observable<google.maps.LatLngLiteral> {
    return this.fromNavigator$.pipe(
      catchError(() => this.fromAPI$),
      catchError(() => of(defaultCoords)),
    );
  }
}
