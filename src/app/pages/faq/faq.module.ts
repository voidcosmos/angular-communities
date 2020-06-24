import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FaqComponent } from './faq.component';

const COMPONENTS = [FaqComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, FlexLayoutModule, ReactiveFormsModule, MatInputModule],
  exports: [...COMPONENTS],
})
export class FaqModule {}
