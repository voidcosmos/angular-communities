import { Communities, Community } from '@shared/interfaces';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ngcommunity-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}
  @Input() community: Community;
  @Input() communities: Communities;

  @Output()
  selected = new EventEmitter<Community>();
  @Output()
  closeInfo = new EventEmitter<void>();
  @ViewChild('linkCopied') copied: TemplateRef<any>;

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
        .catch(error => console.error('Error sharing', error));
    }
  }

  onCopy() {
    this.clipboard.copy(location.href);
    this.snackBar.openFromTemplate(this.copied, {
      duration: 2000
    });
  }

  onCloseSnackBar() {
    this.snackBar.dismiss();
  }
}
