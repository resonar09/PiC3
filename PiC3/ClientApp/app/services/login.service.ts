import { validateMatching } from "../validators/matching.validator";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import { Login } from "../models/Login";
//import { AlertifyService } from "./alertify.service";

@Injectable()
export class LoginService {
  data = Login;
  constructor(private auth: AuthService
    //, private alertifyService: AlertifyService
  ) {
  }
  loginSubmit(form: any, auth: AuthService) {
    //console.log('login-onSubmit');
    //console.log(form);
    this.auth.login(form).subscribe(data => {
      //this.alertifyService.message("Logged in!");
      console.log('logged in!');
    },
      error => {
        console.log(error);
      });
  }
}
