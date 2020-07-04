import { NgModule } from '@angular/core';

import { MainModule } from './main/main.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [SharedModule, MainModule, ReactiveFormsModule],
  providers: [],
  exports: [MainModule],
})
export class PagesModule {}
