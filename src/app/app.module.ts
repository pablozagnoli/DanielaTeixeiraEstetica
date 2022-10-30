import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login/login.component';
import { MasterComponent } from './master/master/master.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgendarComponent } from './agendar/agendar/agendar.component';
import { OauthgoogleComponent } from './google/oauthgoogle/oauthgoogle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MasterComponent,
    HomeComponent,
    AgendarComponent,
    OauthgoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
