import { CommunityService } from 'app/community.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  community: any;
  communities$ = this.communityService.communities;
  constructor(private communityService: CommunityService) {
    this.communities$ = this.communityService.communities;
  }

  onSelectCommunity(community) {
    this.community = community;
  }
}
