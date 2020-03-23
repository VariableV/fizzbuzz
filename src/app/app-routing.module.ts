import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';

const routes: Routes = [
  {path: 'fizzbuzz', component: FizzbuzzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
