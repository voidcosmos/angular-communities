import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngcommunity-preview',
  templateUrl: './community-preview.component.html',
  styleUrls: ['./community-preview.component.scss'],
})
export class CommunityPreviewComponent {
  @Input() communities: Communities;

  @Output()
  selected = new EventEmitter<Community>();

  onSelected(selected: string) {
    this.selected.emit(this.communities[selected]);
  }
}
