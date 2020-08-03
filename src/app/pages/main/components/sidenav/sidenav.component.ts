import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngcommunity-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() community: Community;
  @Input() communities: Communities;
  @Input() isEditMode = false;

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
}
