import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
item:Student
  constructor() {
    this.item=new Student();
    this.item.name="abc";
    this.item.id=1;
    this.item.std="it";
   }

  ngOnInit() {
  }

}
