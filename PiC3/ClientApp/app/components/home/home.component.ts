
import { Component } from "@angular/core";
import { NotificationService } from "../../_services/notification.service";
import { AlertService } from './../../_services/alert.service';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor(private notificationService: NotificationService, private alertService: AlertService) {}

  addNewClient() {
      this.notificationService.addNotifications("Added New Client");
      this.alertService.error("Error message");
  }
}
