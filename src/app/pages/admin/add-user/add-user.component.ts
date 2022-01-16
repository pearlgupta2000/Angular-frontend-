import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    hide=true;

  constructor(private loginService:LoginService,private snackbar:MatSnackBar,private _route:ActivatedRoute) { }

  userdata={
    _username:'',
    _password:'',
    confirm_pswrd:'',
    _role:''
  };
  username:any;
  user:any;
  ngOnInit(): void {
    this.username = this._route.snapshot.params['username'];
    if(this.username=='new'){

    }else {
      this.user = this.loginService.findByUsername(this.username);
      this.userdata.confirm_pswrd = this.user._password;
      this.userdata._username=this.user._username;
      this.userdata._password = this.user._password;
      this.userdata._role = this.user._role;
    }
  }

  addUser() {
    if(this.userdata._password == this.userdata.confirm_pswrd) {
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})");
      if( !strongRegex.test(this.userdata._password) ){
        this.snackbar.open('Password should follow proper format','',{
          duration:3000,
        });
        return;
      }

      if(this.loginService.findByUsername(this.userdata._username)){
        // @ts-ignore
        delete this.userdata.confirm_pswrd;
        this.loginService.updateUser(this.userdata);
        Swal.fire(
          'Success!',
          'Userdata Updated Succesfully!',
          'success'
        )
      }else {
        // @ts-ignore
        delete this.userdata.confirm_pswrd;
        this.loginService.addUser(this.userdata);
        console.log(this.loginService.getAllUsers());
        Swal.fire(
          'Success!',
          'User Added Succesfully!',
          'success'
        )
      }
    }
    else{
      this.snackbar.open('Both passwords should be same', '', {
        duration: 3000,
      });
    }
  }
}
