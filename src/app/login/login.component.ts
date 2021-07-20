import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  u_name:any
  u_pass:any
  message:any
  check(){
    if(this.u_name=='heisanberg'&&this.u_pass=='breakingbad123')
    {
      this.message='login successfully'

    }
    else{
      this.message='Incorrect username or password'
    }

  }

  show=true



}
