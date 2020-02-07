import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
t3:number
  constructor() { }

  ngOnInit() {
  }
  public Add(t1:number,t2:number)
  {
    
    this.t3=Number(t1)+Number(t2);
    

  }

}
