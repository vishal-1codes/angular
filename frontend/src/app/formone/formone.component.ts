import { Component, OnInit } from '@angular/core';

import { FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {

  getInfo:any=FormGroup
  msg: any;

  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getInfo=new FormGroup({
      username:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      number:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
    })
  }

  onSubmit(){
    console.log("clicked"); 
    this.http.post("http://localhost:8080/send",this.getInfo.value).subscribe((data:any)=>{
      console.log(data);
      
      this.msg=data.user
    })
    console.log(this.getInfo.value);
    
  }
 

}
