import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';

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
  @Output()
  closeInfo = new EventEmitter<void>();

  control = new FormControl();
  options$ = this.control.valueChanges.pipe(
    startWith(''),
    map(value => value.toLocaleLowerCase()),
    map(value => this.getFilteredCommunitiesBy(value)),
  );

  onSelected(selected: string) {
    this.selected.emit(this.communities[selected]);
  }

  onCloseInfo() {
    this.control.setValue('');
    this.community = null;
    this.closeInfo.emit();
  }

  private getFilteredCommunitiesBy(filter: string) {
    return Object.keys(this.communities).filter(name => name.toLocaleLowerCase().includes(filter));
  }
}
