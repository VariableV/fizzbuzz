import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import {FizzbuzzService} from './fizzbuzz.service';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FizzbuzzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
