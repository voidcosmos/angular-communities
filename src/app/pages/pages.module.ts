import { NgModule } from '@angular/core';

import { MainModule } from './main/main.module';
import { FaqModule } from './faq/faq.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, MainModule, FaqModule],
  providers: [],
  exports: [MainModule],
})
export class PagesModule {}
