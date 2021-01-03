import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.page.html',
  styleUrls: ['./horoscope.page.scss'],
})
export class HoroscopePage implements OnInit {

  @Input() day: string;
  @Input() sign: string;
  @Input() img: string;
  Horoscopeimg: string;
  HoroscopeName: string;
  dateRange: string;
  current_date: string;
  description: string;
  lucky_number: string;
  lucky_time: string;
  mood: string;
  compatibility: string;
  color: string;
  constructor(private http: HttpClient, public navParams: NavParams, 
    public modalCtrl: ModalController, private loading: LoadingController) { 
    const day = navParams.get('day');
    const sign = navParams.get('sign');
  }

  ngOnInit() {
    this.showLoader();
    this.loadData();
    console.log(this.sign, this.day);
    this.Horoscopeimg = this.img;
    this.HoroscopeName = this.sign;
  }

  loadData(){    
    const url = 'https://aztro.sameerkumar.website/?sign='+this.sign+'&day='+this.day;
    this.http.post<any>(url, {}, {responseType: 'json'}).toPromise().then((data: any) => {
      console.log(data);
      this.dateRange =  data.date_range
      this.current_date = data.current_date
      this.description = data.description
      this.lucky_number =  data.lucky_number
      this.lucky_time = data.lucky_time
      this.mood = data.mood
      this.compatibility = data.compatibility
      this.color = data.color
      this.hideLoader();
    });
  }

  public closeModal(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  showLoader() {
    this.loading.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });
  }

  hideLoader() {
    this.loading.dismiss().then((res) => {
      console.log('Done!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }

}
