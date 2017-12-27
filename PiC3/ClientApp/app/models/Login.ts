
import { validateMatching } from "../validators/matching.validator";
//import {picLogoUrl} from "../../assets/images/pic_logo_small.png";

export const Login = 
{
  settings: {
    label: 'Settings',
    title: 'Login',
    logo: require('../../assets/images/pic_logo_small.png'),
    // subtitle: '',
    background: 'bg-light',
    debug: false,
    layout: 'two-column'
    //,submit: ''
  },
  controls: {
    username: {
      label: 'Username',
      placeholder: 'Please enter your username.',
      value: '',
      type: 'username',
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

