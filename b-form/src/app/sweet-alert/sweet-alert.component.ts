import { Component, OnInit } from '@angular/core';
//here we import route
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent implements OnInit {

  //here add route in _router
  constructor(public _router:Router) { }

  ngOnInit(): void {
  }

  //#sweeta here we add click event
  //#sweeta here we add sweet alert for delete and file 
  onClick(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      //we add success , error in icon value
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //if we have to route this page we also route using router module
        // this._router.navigate(["/l-one"]);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
