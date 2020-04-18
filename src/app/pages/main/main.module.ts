import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MapComponent } from './components/map/map.component';
import { MainComponent } from './main.component';

const components = [MainComponent, MapComponent];

@NgModule({
  declarations: [...components],
  imports: [SharedModule],
  providers: [],
  exports: [...components]
})
export class MainModule {}
