import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username1:string="abcd";
password1:any="abc123";
item:Login
  constructor() { 
this.item=new Login();
  }

  ngOnInit() {
  }
  public Login(item:Login)
  {
    if((this.item.username==this.username1)&&(this.item.password==this.password1))
    {
      console.log("success");
    }
    else
    {
      console.log("fail");
    }

  }
 
}
