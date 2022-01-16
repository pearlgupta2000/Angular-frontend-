import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  public username : any;

  ngOnInit(): void {
    if(this.loginService.isLoggedIn()){
      this.username=this.loginService.getUser();
    }
  }

  logout() {
    this.loginService.logout();
    // window.location="/";
    this.router.navigate(['/']);
  }
}
