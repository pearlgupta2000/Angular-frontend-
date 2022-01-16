import { Injectable } from '@angular/core';
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // @ts-ignore
  public user_list: User[] = [{
    _username:'abhi',
    _password:'abhi',
    _role:'manager'
  },

  ];

  public addUser(user:any){
    this.user_list.push(user);
  }

  public updateUser(user:any){
    this.user_list.forEach(function (value) {
      if(value._username == user._username){
        value._password=user._password;
        value._role=user._role
      }
    });
  }

  public getAllUsers(){
    return this.user_list;
  }

  public setUser(username:any){
    localStorage.setItem('username',username);
  }

  public getUser(){
    return localStorage.getItem('username');
  }

  public logout(){
    localStorage.removeItem('username');
  }

  public isLoggedIn() {
    let username = localStorage.getItem('username');
    if (username == undefined || username == '' || username == null) {
      return false;
    } else {
      return true;
    }
  }

  public findUsernameAndPswrd(loginData:any){
    return this.user_list.find(x => x._username === loginData.username && x._password === loginData.password);
  }

  public findByUsername(username:any){
    return this.user_list.find(x => x._username === username );
  }

}
