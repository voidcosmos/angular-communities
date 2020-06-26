import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FaqComponent } from './faq.component';

const COMPONENTS = [FaqComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, SharedModule, FlexLayoutModule],
  exports: [COMPONENTS],
})
export class FaqModule {}
