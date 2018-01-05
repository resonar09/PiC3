import { Injectable } from "@angular/core";

@Injectable()
export class NotificationService {
  alerts: any = [
    {
      type: "danger",
      msg:
        "This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})",
      timeout: 5000
    },
    {
      type: "info",
      msg:
        "This alert will be closed in 10 seconds (added: ${new Date().toLocaleTimeString()})",
      timeout: 10000
    },
    {
      type: "success",
      msg:
        "This alert will be closed in 15 seconds (added: ${new Date().toLocaleTimeString()})",
      timeout: 15000
    }
  ];
  constructor() {}

  get notifications() {
    if (this.alerts)
      return this.alerts;
  }
  addNotifications(message:string){
      this.alerts.push({
        type: "success",
        msg: message,         
        timeout: 20000
      })
  }
}
