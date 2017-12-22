import { validateMatching } from "../validators/matching.validator";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class Login {
  data = {
    settings: {
      label: 'Settings',
      title: 'Login',
      // subtitle: '',
      background: 'bg-light',
      debug: false,
      layout: 'two-column'
      ,
      submit: this.loginSubmit
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
  constructor(private auth: AuthService) { }
  loginSubmit(form: any, auth: AuthService) {
    console.log('login-onSubmit');
    console.log(form);
    this.auth.register(form);
    return null;
  }

}