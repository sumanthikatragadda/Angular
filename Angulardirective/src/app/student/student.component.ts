import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
list:Student[]=[];
id:number;
name:string;
age:number;
std:string;
item:Student;
stds:string[]=["I","II"];
val:boolean=true;
  constructor() {
    this.list=[
      {id:1,name:'roshan',std:'it',age:12},
      {id:2,name:'rohan',std:'it',age:15},
      {id:3,name:'rohit',std:'it',age:18}


    ]
  }

  ngOnInit() {
  }
  public Add()
  {
    this.item=new Student();
    this.item.id=this.id;
    this.item.name=this.name;
    this.item.std=this.std;
    this.list.push(this.item);
  }
  public Setval()
  {
    this.val=!this.val;
  }

}
