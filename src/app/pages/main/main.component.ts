import { ActivatedRoute, Router } from '@angular/router';
import { Community, Communities } from '@shared/interfaces';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommunityService } from '@shared/services';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input()
  /* communities: Communities; */
  communitie$ = this.communityService.communities;
  community$ = this.route.fragment.pipe(map(community => this.communitie$[community]));

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private communityService: CommunityService,
  ) {}

  changeCommunity(community?: Community) {
    this.router.navigate([], {
      fragment: community?.name,
    });
  }
}
