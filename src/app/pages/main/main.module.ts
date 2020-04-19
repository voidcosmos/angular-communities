import { GoogleMapsModule } from '@angular/google-maps';
import { MainComponent } from './main.component';
import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const COMPONENTS = [MainComponent, MapComponent, SidenavComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [SharedModule, GoogleMapsModule],
  providers: [],
  exports: COMPONENTS,
})
export class MainModule {}
