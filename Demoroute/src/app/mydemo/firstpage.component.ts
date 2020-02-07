import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  title:string="first"
  name:string="user"
  date:string="3/6/20"

  constructor() { }

  ngOnInit() {
  }

}
