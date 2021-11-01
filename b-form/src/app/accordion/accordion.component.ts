import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  oneAtATime = true;
  constructor() { }

  products={};

  ngOnInit(): void {
    this._msgService.product()
    .subscribe(productData => this.products = productData)
  }

}
