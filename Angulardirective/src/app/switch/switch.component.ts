import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  items:any[]=[
    {name:"one",val:1},
    {name:"two",val:2},
    {name:"three",val:3}
  ];
  selectedvalue:string="three"
  constructor() { }

  ngOnInit() {
  }

}
