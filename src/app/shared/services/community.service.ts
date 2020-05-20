import { Communities, Community } from '@shared/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  JSON_COMMUNITIES = 'assets/json/communities.json';

  constructor( public firestore: AngularFirestore) {

  }

  get communities(): Observable<Community[]> {
    return this.firestore.collection(environment.firestore.COMMUNITIES_PATH).valueChanges().pipe(
      map((communities)=>{
        return communities.map((community: Community)=> {
          return {
            ...community,
            image: `assets/images/${community.id}_xs.png`
          }
        })
      })
    )
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
