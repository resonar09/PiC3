import { AlertService } from './alert.service';
import { AuthService } from "../_services/auth.service";
import { Injectable } from "@angular/core";
import { Login } from "../_models/Login";
import { NotificationService } from "./notification.service";

@Injectable()
export class LoginService {
  data = Login;
  constructor(private auth: AuthService
    , private notificationService:NotificationService
    ,private alertService: AlertService
  ) {
  }
  loginSubmit(form: any, auth: AuthService) {
    this.auth.login(form).subscribe(data => {
      //notificationSrv.addNotifications('Logged in!');
      this.alertService.alert(1,"Login Test");
      console.log('logged in!');
    },
      error => {
        console.log(error);
      });
  }
}
