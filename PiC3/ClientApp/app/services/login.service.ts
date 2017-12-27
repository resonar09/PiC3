import { validateMatching } from "../validators/matching.validator";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import { Login } from "../models/Login";

@Injectable()
export class LoginService {
  data = Login;
  constructor(private auth: AuthService) { 
  }
  loginSubmit(form: any, auth: AuthService) {
    console.log('login-onSubmit');
    console.log(form);
    this.auth.register(form);
    return null;
  }

}
