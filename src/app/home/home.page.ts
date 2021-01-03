import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { HoroscopePage } from '../horoscope/horoscope.page';
import {Plugins, LocalNotification, LocalNotificationAction, LocalNotificationActionPerformed, LocalNotificationSchedule, Device, LocalNotificationEnabledResult, LocalNotifications} from '@capacitor/core';
const {LocalNotification} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  horoscopes:string[]; 
  day: string;
  sign: string;

  constructor(private http: HttpClient, public modalController: ModalController) {}

  async ngOnInit(){
    this.day = "today";
  }

  segmentChanged(ev: any){
    console.log('segment changed', ev.detail.value);
    this.day = ev.detail.value;
  }

  async showModel(sign,img){
    const modal = await this.modalController.create({
      component: HoroscopePage,
      componentProps: {
        day: this.day,
        sign: sign,
        img: img
      }
    });
    return await modal.present();
  }

}
