import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, MainModule],
  providers: [],
  exports: [MainModule]
})
export class PagesModule {}
