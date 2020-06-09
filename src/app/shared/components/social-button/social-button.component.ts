import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngcommunity-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
})
export class SocialButtonComponent implements OnInit {
  @Input() type: 'web' | 'twitter' | 'github' | 'youtube' | 'linkedin';
  @Input() link: string;
  @Input() mode: 'default' | 'icon-only' = 'default';

  constructor() {}

  ngOnInit(): void {}

  getFabIcon(): string {
    switch (this.type) {
      case 'web':
        return 'fas fa-link';
      case 'twitter':
        return 'fab fa-twitter';
      case 'github':
        return 'fab fa-github';
      case 'youtube':
        return 'fab fa-youtube';
      case 'linkedin':
        return 'fab fa-linkedin';
    }
  }

  getName(): string {
    if (this.mode == 'icon-only') {
      return undefined;
    }
    switch (this.type) {
      case 'web':
        return 'Web';
      case 'twitter':
        return 'Twitter';
      case 'github':
        return 'Github';
      case 'youtube':
        return 'Youtube';
      case 'linkedin':
        return 'LinkedIn';
    }
  }

  getChipStyle(): {
    'background-color': string;
    color: string;
  } {
    switch (this.type) {
      case 'web':
        return {
          'background-color': '#626262',
          color: 'white',
        };
      case 'twitter':
        return {
          'background-color': '#1DA1F2',
          color: 'white',
        };
      case 'github':
        return {
          'background-color': 'black',
          color: 'white',
        };
      case 'youtube':
        return {
          'background-color': 'red',
          color: 'white',
        };
      case 'linkedin':
        return {
          'background-color': '#0077b4',
          color: 'white',
        };
    }
  }

  openLink() {
    window.open(this.link, '_blank');
  }
}
