import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //here we add ng class property
  @Input() boxColor:any;
  
  @Input() placeholderText:any;

  //here we get output for data binding child to parent
  @Output() inputEvent = new EventEmitter()

  count:number=0;
  

  onCreate(inpVal:any){
    //here we pass condition for when user pass value in input that time only count increase , not for empty value or greter then zero value
    if(inpVal.value.length>0){
      this.count=this.count+1;
      //we get all value in alert
      // alert(inpVal.value)
      this.inputEvent.emit(inpVal.value)
    }
   
  }
}
