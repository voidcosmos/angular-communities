import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ngcommunity-preview',
  templateUrl: './community-preview.component.html',
  styleUrls: ['./community-preview.component.scss'],
})
export class CommunityPreviewComponent {
  @Input() communities: Communities;

  @Output()
  selected = new EventEmitter<Community>();

  filter = new FormControl();

  filtered$ = this.filter.valueChanges.pipe(
    startWith(''),
    map((value: string) => value.toLowerCase()),
    map(value => this.getFilteredCommunitiesBy(value)),
  );

  onSelected(selected: string) {
    this.selected.emit(this.communities[selected]);
  }

  private getFilteredCommunitiesBy(criteria: string) {
    return Object.values(this.communities)
      .filter(({ name, city }) => this.contains(name, criteria) || this.contains(city, criteria))
      .sort(this.compareCommunities);
  }

  private contains(value: string, contained: string) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .includes(contained);
  }

  private compareCommunities({ name }: Community, other: Community) {
    return name.localeCompare(other.name);
  }
}
