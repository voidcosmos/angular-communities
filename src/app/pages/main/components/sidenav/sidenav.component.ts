import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Community, Communities } from '@shared/interfaces';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'ngcommunity-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() community: Community;
  @Input() communities: Communities;

  @Output()
  selected = new EventEmitter<Community>();

  control = new FormControl();
  options$ = this.control.valueChanges.pipe(
    startWith(''),
    map(value => value.toLocaleLowerCase()),
    map(value => this.getFilteredCommunitiesBy(value)),
  );

  onSelected(selected: string) {
    this.selected.emit(this.communities[selected]);
  }

  closeInfo() {
    this.community = null;
  }

  private getFilteredCommunitiesBy(filter: string) {
    return Object.keys(this.communities).filter(name => name.toLocaleLowerCase().includes(filter));
  }
}
