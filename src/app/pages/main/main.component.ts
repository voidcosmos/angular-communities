import { Community } from '@shared/interfaces/communities.interface';
import { CommunityService } from '@shared/services/community.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  community: Community;
  communitie$ = this.communityService.communities;
  optionsGrid = {
    cols: 4,
    map: {
      colspan: 3
    },
    sidenav: {
      colspan: 1
    }
  };

  constructor(private communityService: CommunityService) {
    this.communitie$ = this.communityService.communities;
  }

  onSelectCommunity(community: Community) {
    this.community = community;
  }
}
