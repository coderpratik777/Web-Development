import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  user:User=new User();


  register(){
   
    console.log(this.user);
  }


}

export class User{

  name!:string;
  username!:string;
  emailaddress!:string;
  mobilenumber!:number;
  password!:number;

}
