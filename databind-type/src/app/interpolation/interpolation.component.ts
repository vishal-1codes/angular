import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="Vishal vinayak pawar"

  stringM(){
    return "My name is "+ this.name
  }

  appStatus:boolean=true;
  status1="online"
  status2="offline"


}
