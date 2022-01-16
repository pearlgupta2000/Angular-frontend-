import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private router:Router,private loginService:LoginService) { }
  hide=true;
  public LoginData={
    username:'',
    password:''
  }
  ngOnInit(): void {
  }

  SubmitForm() {
    let user=this.loginService.findUsernameAndPswrd(this.LoginData);
    if (!user) {
      this.snackbar.open('Invalid Details !! Try again', '', {
        duration: 3000,
    });
    }
    else
      {
        this.loginService.setUser(this.LoginData.username);
        // this.router.navigate(['admin-dashboard']);
        // this.router.navigate(['admin-dashboard']);
        // window.location='/admin-dashboard'
        this.router.navigate(['/admin-dashboard']);
        // this.loginService.loginStatusSubject.next(true);
      }
  }
}
