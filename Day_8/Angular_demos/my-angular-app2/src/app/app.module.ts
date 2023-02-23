import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import {HttpClientModule} from '@angular/common/http'

const routes:Routes=[
  {path:'',component:HelloComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'weather',component:WeatherComponentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    WeatherComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
