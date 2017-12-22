import { validateStarts } from "../validators/starts.validator";
import { validateLogin } from "../validators/login.validator";
import { validateMatching } from "../validators/matching.validator";
import { patternValidator } from "../validators/pattern.validator";
import { hasPunctuation } from "../validators/hasPunctuation.validator";

export const Login = {
  settings: {
    label: 'Settings',
    title: 'Login',
    // subtitle: '',
    background: 'bg-light',
    debug: false,
    layout: 'two-column'
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
        type: 'button',
        class: 'btn-primary'
        , click: 'validateLogin()'

      },
      cancel: {
        label: 'Cancel',
        type: 'cancel',
        class: 'btn-secondary'

      }
    }
  }