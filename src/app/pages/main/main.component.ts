import { Community } from '@shared/interfaces/communities.interface';
import { CommunityService } from '@shared/services/community.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  community: Community;
  communities$ = this.communityService.communities;

  constructor(private communityService: CommunityService) {
    this.communities$ = this.communityService.communities;
  }

  onSelectCommunity(community: Community) {
    this.community = community;
  }
}
