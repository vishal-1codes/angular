import { Component, OnInit ,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-six-way',
  templateUrl: './input-six-way.component.html',
  styleUrls: ['./input-six-way.component.css']
})
export class InputSixWayComponent implements OnInit {

  //#3
  @ViewChild('u3name',{static:true}) u3nameElement:ElementRef;
  u3name:string="";

  constructor( u3nameElement:ElementRef) { 
    this.u3nameElement=u3nameElement;
  }

  ngOnInit(): void {
  }

  //#1 click event output get in console
  uname:string=' ';
  onClick(){
    console.log("two way data binding ",this.uname);
  }

  //#2
  onClick2(u2name:any){
    console.log("one way binding",u2name);
  }

  //#3
  myu3name:any;
  onClick3(){
    this.myu3name=this.u3nameElement.nativeElement.value;
    console.log('',this.myu3name);
  }



}
