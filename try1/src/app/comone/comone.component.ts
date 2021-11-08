import { Component, OnInit } from '@angular/core';
//#2 here we add httpclient
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comone',
  templateUrl: './comone.component.html',
  styleUrls: ['./comone.component.css']
})
export class ComoneComponent implements OnInit {

  //#2 here we defined data variable
  data:any;
  //#2 here we asign httpclient to http
  constructor(private http: HttpClient) { 
    //#2 here we get data using http and subscribe , we store data in data varibale 
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
            this.data = data;
            console.log(this.data);
            
    })
  }

  ngOnInit(): void {
  }

  //#1  here we get data from ngFor 
  array1=[
    {name:'vishal',email:'pawarvishal10k@gmail.com'},
    {name:'vighnesh',email:'pawarvighnesh@gmail.com'},
    {name:'vinayak',email:'pawar123@gmail.com'},
    {name:'vijeta',email:'pawar10k@gmail.com'}
  ]

}
