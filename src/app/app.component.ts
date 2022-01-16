import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sam';

   public login=false;

  constructor(private loginService:LoginService) {
  }

  ngOnInit(): void {
    this.login = this.loginService.isLoggedIn();
  }
}
