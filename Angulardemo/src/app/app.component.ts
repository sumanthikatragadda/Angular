import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angulardemo';
  num:number=10;
  imagepath:string='assets/images/flower.jpg';
  name:string="flower";
  mystyle:string="colorclass";
  isdisabled:boolean=false;
  getname():string
  {
    return this.name;
  }
}
