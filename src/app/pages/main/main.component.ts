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
  communities$ = this.communityService.communities;
  optionsGrid = {
    cols: 4,
    map: {
      colspan: 4
    },
    sidenav: {
      colspan: 0
    }
  };

  constructor(private communityService: CommunityService) {
    this.communities$ = this.communityService.communities;
  }

  onSelectCommunity(community: Community) {
    this.community = community;
    this.optionsGrid.map.colspan = 3;
    this.optionsGrid.sidenav.colspan = 1;
  }
}
