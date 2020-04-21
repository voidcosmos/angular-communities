import { NgModule } from '@angular/core';

import { MainModule } from './main/main.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, MainModule],
  providers: [],
  exports: [MainModule],
})
export class PagesModule {}
