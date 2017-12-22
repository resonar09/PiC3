import { Component } from '@angular/core';
import { Login } from '../../models/Login';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    object: any;
    constructor() {
        this.object = Login;
        //console.log(Login.buttons.login.label);
      }
    login(){
        console.log("login function");
    }
}
