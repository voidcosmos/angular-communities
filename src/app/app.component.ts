import { Component } from '@angular/core';
import { CommunityService } from '@shared/services';

@Component({
  selector: 'ngcommunity-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  communitie$ = this.communityService.communities;

  constructor(private communityService: CommunityService) {}
}
