import { Communities } from '@shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  JSON_COMMUNITIES = 'assets/json/communities.json';

  firebaseCommunities: Observable<any[]>;

  constructor(private httpClient: HttpClient, firestore: AngularFirestore) {
    this.firebaseCommunities = firestore.collection('communities').valueChanges();
    this.firebaseCommunities.subscribe(res => console.log("Communities: ",res))
  }

  get communities(): Observable<Communities> {
    return this.httpClient
      .get<Communities>(this.JSON_COMMUNITIES)
      .pipe(map(communities => this.normalizeCommunities(communities)));
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
