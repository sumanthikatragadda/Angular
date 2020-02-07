import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  
  firstname:string="sumanthi";
  lastname:string="k";
  email:string="sdk@gmail.com";
  age:number=22;
  getstyle()
  {
    let styles={"font-style":"italic","color":"blue"};
    return styles;
  }
  onClick()
  {
    console.log("u clicked");
  }
  

}
