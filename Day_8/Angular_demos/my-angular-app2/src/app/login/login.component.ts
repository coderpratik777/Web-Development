import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string;
  password!:string;
  submitted:boolean=false;
  number1!:number;
  number2!:number;
  answer!:number;
  add:boolean=false;
  subtract:boolean=false;
  invaliduser:boolean=false;


  constructor(private router:Router){

  }

  login(){
    this.submitted=true;
    console.log(this.username,this.password);
    sessionStorage.setItem("loggedInUser",this.username);
    if(this.username=="Pratik" && this.password=="1234")
      this.router.navigate(['/dashboard']);
    else
      this.invaliduser=true;
  }

  addfunc(){
    this.add=true;
    this.answer=this.number1+this.number2;
  }
  subtractfunc(){
    this.subtract=true;
    this.answer=this.number1-this.number2;
  }

}
