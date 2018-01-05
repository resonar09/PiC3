import { validateMatching } from "../validators/matching.validator";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import { Login } from "../models/Login";
import { NotificationService } from "./notification.service";
//import { AlertifyService } from "./alertify.service";

@Injectable()
export class LoginService {
  data = Login;
  constructor(private auth: AuthService
    , private notificationService:NotificationService
  ) {
  }
  loginSubmit(form: any, auth: AuthService) {
    this.auth.login(form).subscribe(data => {
      //notificationSrv.addNotifications('Logged in!');
      console.log('logged in!');
    },
      error => {
        console.log(error);
      });
  }
}
