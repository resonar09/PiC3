import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotificationService } from "../../_services/notification.service";
import { Observable, Subscription } from "rxjs";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit, OnDestroy {
  private display: boolean;
  private alive: boolean;
  private interval: number;
  private counter: number = 1;
  sub: Subscription;
  alerts: any = [];
  constructor(private notificationService: NotificationService, private auth:AuthService) {
    this.display = false;
    this.alive = true;
    this.interval = 20000;
  }
  ngOnInit() {
    this.alerts = this.notificationService.notifications
    //this.startTimer();
  }
  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }
  private startTimer() {
    let timer = Observable.timer(1, this.interval);
    this.sub = timer.subscribe(t => {
      //this.notificationService.addNotifications('number: ' + this.counter++);
      console.log('timer: '+ this.notificationService.notifications);
      this.alerts = this.notificationService.notifications
    });
  }
}
