import { Component } from '@angular/core';

import { Community, Communities } from '@shared/interfaces';
import { CommunityService } from '@shared/services';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  community: Community;
  communitie$ = this.communityService.communities;
  optionsGrid = {
    cols: 4,
    map: {
      colspan: 3,
    },
    sidenav: {
      colspan: 1,
    },
  };

  marked: Community;

  constructor(private communityService: CommunityService) {}

  onClickCommunity(community: Community) {
    this.community = community;
  }

  onSelectCommunity(community: Community) {
    this.marked = community;
  }
}
