import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormNgTask1Component } from './reactive-form-ng-task1/reactive-form-ng-task1.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormNgTask1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
