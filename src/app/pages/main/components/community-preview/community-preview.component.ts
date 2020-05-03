import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';

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

  responsiveImagesConfiguration = [
    {
      min: 0,
      max: 599,
      suffix: '_xs',
      format: 'webp',
    },
    {
      min: 0,
      max: 599,
      suffix: '_xs',
      format: 'png',
    },
    {
      min: 600,
      max: 959,
      suffix: '_sm',
      format: 'webp',
    },
    {
      min: 600,
      max: 959,
      suffix: '_sm',
      format: 'png',
    },
    {
      min: 960,
      max: 1279,
      suffix: '_md',
      format: 'webp',
    },
    {
      min: 960,
      max: 1279,
      suffix: '_md',
      format: 'png',
    },
    {
      min: 1280,
      max: 1919,
      suffix: '_lg',
      format: 'webp',
    },
    {
      min: 1280,
      max: 1919,
      suffix: '_lg',
      format: 'png',
    },
    {
      min: 1920,
      max: 5000,
      suffix: '_xl',
      format: 'webp',
    },

    {
      min: 1920,
      max: 5000,
      suffix: '_xl',
      format: 'png',
    },
  ];

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
    return this.normalize(value).includes(this.normalize(contained));
  }

  private normalize(value: string) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  private compareCommunities({ name }: Community, other: Community) {
    return name.localeCompare(other.name);
  }
}
