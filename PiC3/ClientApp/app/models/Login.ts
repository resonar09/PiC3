

export const Login = {
  settings: {
    label: 'Settings',
    title: 'Login',
    // subtitle: '',
    background: 'bg-light',
    debug: false,
    layout: ''
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
        required: true
      }
    }
  },
  buttons: {
    login: {
      label: 'Login',
      type: 'submit',
      class: 'btn-primary'
    },
    cancel: {
      label: 'Cancel',
      type: 'cancel',
      class: 'btn-secondary'
    }
  }
}