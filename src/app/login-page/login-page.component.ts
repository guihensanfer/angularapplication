import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login: string = "admin1";
  defaultLogin: string = "admin";

  keyPressEnter(){
    console.log('you are informed in login' + this.login);
  }

}
