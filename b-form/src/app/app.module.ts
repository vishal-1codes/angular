import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSixWayComponent } from './input-six-way/input-six-way.component';
import { FormsModule } from '@angular/forms';
//#1 first import formsModule
@NgModule({
  declarations: [
    AppComponent,
    InputSixWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
