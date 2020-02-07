import { Component, OnInit } from '@angular/core';
import{Student} from 'src/app/Models/student';
import { Customer } from 'src/app/Models/customer';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
obj:Customer
  constructor() {
    this.obj={name:"abc",city:"hyd",address:"abc",contact:123445,email:"it"};
   }

  ngOnInit() {
  }

}
