import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSixWayComponent } from './input-six-way/input-six-way.component';
import { FormsModule } from '@angular/forms';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { LOneComponent } from './l-one/l-one.component';
//#loader import ngxuiloader for loader
import { NgxUiLoaderModule } from "ngx-ui-loader";

//#1 first import formsModule
@NgModule({
  declarations: [
    AppComponent,
    InputSixWayComponent,
    SweetAlertComponent,
    LOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //#loader 
    NgxUiLoaderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
