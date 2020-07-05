import { ActivatedRoute, Router } from '@angular/router';
import { Community, Communities } from '@shared/interfaces';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'ngcommunity-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input()
  communities: Communities;

  community$ = this.route.fragment.pipe(map(community => this.communities[community]));
  editMode$ = this.route.fragment.pipe(map(url => url == HeaderComponent.ADD_COMMUNITY));

  constructor(private router: Router, private route: ActivatedRoute) {}

  changeCommunity(community?: Community) {
    this.router.navigate([], {
      fragment: community?.name,
    });
  }
}
