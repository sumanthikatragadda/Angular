import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name:string="abc";
  class:string="it";
  age:number=21;

  constructor() { }

  ngOnInit() {
  }

}
