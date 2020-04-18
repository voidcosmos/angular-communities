import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MapComponent } from './components/map/map.component';
import { MainComponent } from './main.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

const components = [MainComponent, MapComponent];

@NgModule({
  declarations: [...components],
  imports: [SharedModule, GoogleMapsModule],
  providers: [],
  exports: [...components]
})
export class MainModule {}
