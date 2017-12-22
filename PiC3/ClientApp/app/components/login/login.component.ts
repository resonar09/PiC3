
import { Component } from '@angular/core';
import { Login } from '../../models/Login';



@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    data:any;
    constructor(login:Login) {
        this.data = login.data;
    }

/*     onSubmit(form: any, auth:AuthService) {
        console.log('login-onSubmit');
        console.log(form);
        this.auth.register(form);
        return null;
    }

    eventLogin(form: any, auth:AuthService) {
        console.log('eventLogin');
        console.log(form);
        this.auth.register(form);
        return null;
    } */
}
