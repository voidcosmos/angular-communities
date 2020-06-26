import { Communities } from '@shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  JSON_COMMUNITIES = 'assets/json/communities.json';

  constructor(private httpClient: HttpClient) {}

  get communities(): Observable<Communities> {
    return this.httpClient.get<Communities>(this.JSON_COMMUNITIES).pipe(
      map(communities => this.normalizeCommunities(communities)),
      shareReplay(1),
    );
  }

  private normalizeCommunities(communities: Communities): Communities {
    const communitiesNormalized = Object.entries(communities)
      .filter(([name]) => name !== '$schema')
      .map(([title, community]) => [
        title,
        {
          ...community,
          image: `assets/images/${community.id}_xs.png`,
        },
      ]);

    return Object.fromEntries(communitiesNormalized);
  }
}
