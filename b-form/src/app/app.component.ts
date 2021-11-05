import { Component } from '@angular/core';
import { AnyRecord } from 'dns';
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

 //users we use for repeatation purpose , here we told that our array receive string value with add multiple string in array 
  users=[];

  admins=[];

  //in data we get all data that type in child component
  pushUsers(data:any){
    this.users.push(data);
  }

  pushAdmins(data:any){
    this.admins.push(data)
  }


}
