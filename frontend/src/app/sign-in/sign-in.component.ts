import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService }  from 'aws-amplify-angular';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

 username?:string
 password?:string

  constructor(private userService: UserService,
    private amplifyService:AmplifyService,
    private router: Router) { }

  ngOnInit() {    
  }

  signIn(){
    console.log("SignIn "+ this.username)
    this.userService.signIn(this.username,this.password,(err) =>{
      this.router.navigate(['/']);
    });
  }



}
