import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  JSON_COMMUNITIES = 'assets/json/communities.json';

  constructor(private httpClient: HttpClient) {}

  get communities(): Observable<any> {
    return this.httpClient.get<any>(this.JSON_COMMUNITIES);
  }
}
