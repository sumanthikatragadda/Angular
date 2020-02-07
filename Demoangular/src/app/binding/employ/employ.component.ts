import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
item:Employee
  constructor() {
    this.item=new Employee();
   }

  ngOnInit() {
  }
  public Add()
  {
    
    console.log(this.item);
  }

}
