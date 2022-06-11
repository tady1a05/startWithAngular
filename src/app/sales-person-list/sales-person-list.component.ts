import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList:SalesPerson[] = [new SalesPerson("Toby","Cheung",12),new SalesPerson("Sam","Lee",16),new SalesPerson("Chris","Cheng",17),new SalesPerson("Mandy","Wong",18)];

  constructor() { }

  ngOnInit(): void {
  }

}
