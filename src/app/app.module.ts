import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, PagesModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
