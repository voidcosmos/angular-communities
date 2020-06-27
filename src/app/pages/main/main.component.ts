import { ActivatedRoute, Router } from '@angular/router';
import { Community } from '@shared/interfaces';
import { Component, Input } from '@angular/core';
import { map, withLatestFrom } from 'rxjs/operators';
import { CommunityService } from '@shared/services';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input()
  communitie$ = this.communityService.communitie$;
  community$ = this.route.fragment.pipe(
    withLatestFrom(this.communitie$),
    map(([community, communities]) => communities[community]),
  );

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
