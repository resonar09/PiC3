import { AuthService } from "../_services/auth.service";
import { Injectable } from "@angular/core";
import { Login } from "../_models/Login";
import { NotificationService } from "./notification.service";

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
