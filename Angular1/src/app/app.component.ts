import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular1';
  Customer:any[]=[{"name":"raj","country":"india","age":22},{"name":"tom","country":"usa"},{"name":"jerry","country":"india"}];
  Student:any[]=[{
    "country":"india",
    "student":[{"name":"dora","age":24},{"name":"oswald","age":45}]},
    {
       "country":"usa",
       "student":[{"name":"mickey","age":40},]
    }
  ];
}
