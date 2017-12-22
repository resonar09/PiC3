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
        required: true,

        customs: {
          validateStarts: {
            function: validateMatching,
            message: 'Name must start with B'
          }
        }
      }
    },
    password: {
      label: 'Password',
      value: '',
      placeholder: 'Please enter your password.',
      type: 'password',
      validation: {
        required: true
/*         ,
        customs: {
          hasPunctuation: {
            function: validateMatching('username'),
            message: 'Must have puntuation'
          }
        } */
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