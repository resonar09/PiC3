
import { validateMatching } from "../validators/matching.validator";
import { AuthService } from "../services/auth.service";

export class Login1 {
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

  constructor() {

  }
  eventLogin(form: any) {
    console.log('eventLogin');
    console.log(form);
    return null;
  }
  clickEventLogin(form: any) {
    console.log('clickEventLogin');
    console.log(form);
    console.log('if auth');

    return null;
  }
}
