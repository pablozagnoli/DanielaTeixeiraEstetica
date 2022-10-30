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
import { CarrosselComponent } from './carrossel/carrossel/carrossel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BotaowhatsappComponent } from './whatsapp/botaowhatsapp/botaowhatsapp.component';

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
    OauthgoogleComponent,
    CarrosselComponent,
    BotaowhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
