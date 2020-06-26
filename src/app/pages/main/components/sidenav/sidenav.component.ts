import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'ngcommunity-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private clipboard: Clipboard) {}
  @Input() community: Community;
  @Input() communities: Communities;

  @Output()
  selected = new EventEmitter<Community>();
  @Output()
  closeInfo = new EventEmitter<void>();

  onSelected(selected: Community) {
    this.selected.emit(selected);
  }

  onCloseInfo() {
    this.closeInfo.emit();
  }

  onShare() {
    const nav = window.navigator as any;
    if (nav.share) {
      nav
        .share({
          title: this.community.name,
          url: location.href,
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
    }
  }

  onCopy() {
    this.clipboard.copy(location.href);
  }
}
