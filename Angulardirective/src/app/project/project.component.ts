import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
list:Project[]=[];
pid:number;
 pname:string;
 domain:string;
 domains:string[]=["dotnet","java"];
 startdate:Date;
 enddate:Date;
 item:Project;
  constructor() {
    this.list=[
      
    ]
   }

  ngOnInit() {
  }
  public Add()
  {
    this.item=new Project();
    this.item.pid=this.pid;
    this.item.pname=this.pname;
    this.item.domain=this.domain;
    this.item.startdate=this.startdate;
    this.item.enddate=this.enddate;
    this.list.push(this.item);
  }


}
