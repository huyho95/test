import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  txtCityName = '';
  cityName = '';
  temp = null;
  isLoading = false;

  constructor(private weatherService : WeatherService) { }

  // ngOnInit(): void {
  //   this.weatherService.getTemp('Tokyo')
  //   .then(temp => console.log(temp))
  //   .catch(err => console.log(err))
  // }

  ngOnInit() {}

  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
    .then(temp => { // temp : sau khi lấy được nhiệt độ temp rồi thì ...
      this.cityName = this.txtCityName;
      this.temp = temp; // this.temp : temp mình tạo ở trên
      this.isLoading = false;
      this.txtCityName = '';
    })
    .catch(err => {
      alert('Cannot find your city !')
      this.isLoading = false;
      this.cityName = '';
      this.txtCityName = '';
    })
  }
  
  getMessage() {
    if(this.isLoading) {
      return "loading ...";
    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp)
  }
}
