import { ActivatedRoute, Router } from '@angular/router';
import { Community, Communities } from '@shared/interfaces';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input()
  communities: Communities;

  community$ = this.route.fragment.pipe(map(community => this.communities[community]));

  constructor(private router: Router, private route: ActivatedRoute) {}

  changeCommunity(community?: Community) {
    this.router.navigate([], {
      fragment: community?.name,
    });
  }
}
