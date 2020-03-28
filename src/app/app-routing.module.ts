import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'fizzbuzz', component: FizzbuzzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
