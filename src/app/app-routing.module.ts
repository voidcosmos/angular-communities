import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from '@pages/faq/faq.component';
import { MainComponent } from '@pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'faq', component: FaqComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
