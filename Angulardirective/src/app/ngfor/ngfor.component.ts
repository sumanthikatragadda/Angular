import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
no:number[]=[12,11,23]
name:string[]=["ajay","ram","abc"]
  constructor() { }

  ngOnInit() {
  }

}
