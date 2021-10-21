import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //here we create setTime function for change title after 2 second using constructor
  title = 'todo-list';
  constructor(){
  //   setTimeout(()=>{
  //     this.title="Changed title"
  //   },2000);
  }
}
