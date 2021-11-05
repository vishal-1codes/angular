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
import { AccordionComponent } from './accordion/accordion.component';

//#acc here we import 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

//fetch data
import {HttpClientModule} from '@angular/common/http';
import { POneComponent } from './p-one/p-one.component';
import { ChildComponent } from './child/child.component'



//#1 first import formsModule
@NgModule({
  declarations: [
    AppComponent,
    InputSixWayComponent,
    SweetAlertComponent,
    LOneComponent,
    AccordionComponent,
    POneComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //#loader 
    NgxUiLoaderModule,
    //#acc here we add 
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    //here add fetch
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
