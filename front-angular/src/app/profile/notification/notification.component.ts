import { NotificationsService } from './notifications.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/logging/services';
import { NotificationObj } from 'src/models/Notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  listNotif : any[] = [];

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.computeNotif(x.notifications));
   }

  ngOnInit() {
  }

  computeNotif(notifications){
    this.listNotif = [];
    notifications.forEach((notif : NotificationObj)=>{
      console.log(notif)
      this.listNotif.push({"type":notif.type, "tsStr":this.tsToDateCustom(notif.ts)})
    })
  }

  tsToDateCustom(ts){
    const listMois=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]
    if (new Date().getTime() - ts < 1000*60*60*24){
      return new Date(ts).getUTCHours()+" : "+new Date(ts).getUTCMinutes();
    } else if (new Date().getTime() - ts < 1000*60*60*24*30){
      return new Date(ts).getUTCDate()+" "+listMois[new Date(ts).getUTCMonth()];
    } else{
      return "Il y a "+Math.floor((new Date().getTime() - ts) / 1000*60*60*24*30)+" mois";
    }
  }

}
