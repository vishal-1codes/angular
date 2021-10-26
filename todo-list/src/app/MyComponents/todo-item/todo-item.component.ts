import { Component, OnInit ,Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //Property 'todo' has no initializer  and is not definitely assigned in the constructor.
  //we also solve error if we try this  like ( = {} as Todo )
  // @Input() todo : Todo = {} as Todo;
  // @Input() todo!: Todo[];
  //go to tsconfig.json add string:false
  //*best way (we add postfix to varibale name)  @Input() todo!: Todo; 
  
  
  @Input() todo!: Todo; 

  @Output() todoDelete: EventEmitter = new EventEmitter();

  constructor() { 
 
  }

  ngOnInit(): void {
  }
  //here click event works 
  //we pass parameter to button event  and also we pass parameter to onClick event in todo-item file
  //we call todos.ts file from todo-item.ts file for delete operation for that we use emitter
  //we add event emitter in onclick event and 
  onClick(todo:Todo){
    console.log("here click event trigger");
    
  }

}
