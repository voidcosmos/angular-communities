import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';

const COMPONENTS = [FaqComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [FaqRoutingModule, FlexLayoutModule],
  exports: [COMPONENTS],
})
export class FaqModule {}
