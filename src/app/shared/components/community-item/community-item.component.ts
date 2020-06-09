import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Community } from '@shared/interfaces';

@Component({
  selector: 'ngcommunity-community-item',
  templateUrl: './community-item.component.html',
  styleUrls: ['./community-item.component.scss'],
})
export class CommunityItemComponent implements OnInit {
  @Input() community: Community;
  @Output() communitySelected: EventEmitter<void> = new EventEmitter();
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
  constructor() {}

  ngOnInit(): void {}

  onCommunitySelected() {
    this.communitySelected.emit();
  }
}
