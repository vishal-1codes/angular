import { Component } from '@angular/core';
//#loader import ngxUiloader in file you want that file load 
import { NgxUiLoaderService } from "ngx-ui-loader"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'b-form';
  //#loader if you want loader present in starting home page add  ngx service in app.component.ts file 
  constructor(private ngxService: NgxUiLoaderService) {}
  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    //#loader Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); //#loader stop foreground spinner of the master loader with 'default' taskId
    }, 5000);
  }
}
