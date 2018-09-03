import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { AmplifyService }  from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';

import { Subject } from 'rxjs';
import { User } from "../models/user";



@Injectable()
export class UserService {

  userObserver:Subject<User>=new Subject();

  constructor( private amplifyService: AmplifyService ) {
  }

  signIn(username, password,callback){    
    let _user = new User()
    _user.name=username
    _user.password=password;

    this.amplifyService.auth().signIn(username,password)
    .then(user =>{
      localStorage.removeItem("currentUser");
      localStorage.setItem("currentUser", JSON.stringify(_user));
      this.userObserver.next(user);  
      callback()
    } )
    .catch(err => {
      localStorage.removeItem("currentUser");
      callback(err)
    });
  }

  getCurrentUser():User{
    let _user = localStorage.getItem("currentUser");
    let user:User = _user ? Object.setPrototypeOf(JSON.parse(_user), User.prototype) : null;
    this.userObserver.next(user);
    return user;
  }

  getCurrentUserSubscription(callback){
    this.userObserver.subscribe(callback);
  }

  signout(){
    this.amplifyService.auth().signOut().then(()=>{
      localStorage.removeItem("currentUser");
      this.userObserver.next(null);
    })
  }

}
