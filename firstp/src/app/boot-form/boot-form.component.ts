import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot-form',
  templateUrl: './boot-form.component.html',
  styleUrls: ['./boot-form.component.css']
})
export class BootFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //#1 here we call getValue we pass val as we get myform.value
  //#2 we get form value in val in console 
  getValues(val:any){
    console.warn(val);
    
  }

}
