import { Communities } from '@shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  JSON_COMMUNITIES = 'assets/json/communities.json';
  DEFAULT_IMAGE = 'assets/images/0.png';

  constructor(private httpClient: HttpClient) {}

  get communities(): Observable<Communities> {
    return this.httpClient
      .get<Communities>(this.JSON_COMMUNITIES)
      .pipe(map(communities => this.normalizeCommunities(communities)));
  }

  private normalizeCommunities(communities: Communities): Communities {
    const communitiesNormalized = Object.entries(communities).map(([title, community]) => [
      title,
      {
        ...community,
        image: community.image || this.DEFAULT_IMAGE,
      },
    ]);

    return Object.fromEntries(communitiesNormalized);
  }
}
