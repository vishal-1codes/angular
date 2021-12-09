import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//here we add OnInit
export class AppComponent implements OnInit{
  title = 'datatable';
  options:any={};
data:any[] = [];
columns: any = {};

//here we addd one varibale for ngFor
datatwo:any;

//here we add contructor
constructor(private http:HttpClient){
this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data2=>{
  this.datatwo=data2
  console.log(this.datatwo);
})
}

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
      //  {
      //      "id": "2",
      //      "name": "santosh",
      //      "phone": "9758663324",
      //      "company": "wipro"
      //  },
      //  {
      //    "id":"3",
      //    "name":"vishal",
      //    "phone":"9594774267",
      //    "company":"onelife"
      //  }
   ]
}
}
