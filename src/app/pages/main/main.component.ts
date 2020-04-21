import { Community } from '@shared/interfaces';
import { CommunityService } from '@shared/services';
import { Component } from '@angular/core';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  community: Community;
  communitie$ = this.communityService.communities;

  searched: Community;

  constructor(private communityService: CommunityService) {}

  onClickCommunity(community: Community) {
    this.community = community;
  }

  onSelectCommunity(community: Community) {
    this.searched = community;
  }

  onCloseCommunity() {
    this.community = null;
  }
}
