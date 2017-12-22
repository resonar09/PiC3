
import { Component } from '@angular/core';
import { validateMatching } from '../../validators/matching.validator';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent1 {
    data = {
        settings: {
            label: 'Settings',
            title: 'Login',
            // subtitle: '',
            background: 'bg-light',
            debug: false,
            layout: 'two-column'
            ,
            submit: this.eventLogin
        },
        controls: {
            username: {
                label: 'Username',
                placeholder: 'Please enter your username.',
                value: '',
                type: 'text',
                validation: {
                    required: true
                }
            },
            password: {
                label: 'Password',
                value: '',
                placeholder: 'Please enter your password.',
                type: 'password',
                validation: {
                    required: true,
                    customs: {
                        validateMatching: {
                            function: validateMatching('username'),
                            message: 'username and password must match'
                        }
                    }
                }
            }
        },
        buttons: {
            login: {
                label: 'Login',
                type: 'submit',
                class: 'btn-primary'
                //, click: this.clickEventLogin

            },
            cancel: {
                label: 'Cancel',
                type: 'cancel',
                class: 'btn-secondary'

            }
        }
    }
    constructor(private auth: AuthService) {}

    onSubmit(form: any, auth:AuthService) {
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
    }
}
