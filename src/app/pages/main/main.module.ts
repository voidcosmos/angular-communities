import { GoogleMapsModule } from '@angular/google-maps';
import { MainComponent } from './main.component';
import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CommunityPreviewComponent } from './components/community-preview/community-preview.component';
import { CommunityEditorComponent } from './components/community-editor/community-editor.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

const COMPONENTS = [
  MainComponent,
  MapComponent,
  SidenavComponent,
  CommunityPreviewComponent,
  CommunityEditorComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [SharedModule, GoogleMapsModule],
  providers: [],
  exports: COMPONENTS,
})
export class MainModule {}
