import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent {
  cityname!:string;
  key:string="138b91f7502c917df454a94449df5c18";
  url!:string;
  weatherdata!:any;

  constructor(private http:HttpClient){

  }

  fetchWeather(){
    this.url=`https://api.openweathermap.org/data/2.5/weather?q=${this.cityname}&appid=${this.key}`;
    this.http.get(this.url).subscribe((response:any)=>{
      this.weatherdata=response;
    })
  }

  temp(){
    return Math.floor(this.weatherdata.main.temp)-273.15;
  }

}
