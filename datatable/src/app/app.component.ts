import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'datatable';
  options:any={};
data:any[] = [];
columns: any = {};

ngOnInit(): void {

  //here we change table name by title of obj
  this.columns = [
       { key: 'id', title: "ID" },
       { key: 'name', title: 'Name' },
       { key: 'phone', title: 'Phone' },
       { key: 'company', title: 'Company'}
  ]
 
  this.data = [
       {
          "id": "1",
          "name": "priyatam",
          "phone": "9284968567",
          "company": "tcs"
       },
       {
           "id": "2",
           "name": "santosh",
           "phone": "9758663324",
           "company": "wipro"
       },
       {
         "id":"3",
         "name":"vishal",
         "phone":"9594774267",
         "company":"onelife"
       }
   ]
}
}
