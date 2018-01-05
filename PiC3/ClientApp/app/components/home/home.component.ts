import { Component } from "@angular/core";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  addNewClient() {
      this.notificationService.addNotifications("Added New Client");
  }
}
