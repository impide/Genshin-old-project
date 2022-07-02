import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainPageHomeComponent } from './views/main-page-home/main-page-home.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainContactComponent } from './components/main-contact/main-contact.component';
import { CurrentEventsComponent } from './views/current-events/current-events.component';
import { NewsComponent } from './views/current-events/news/news.component';
import { SpotlightComponent } from './views/current-events/spotlight/spotlight.component';
import { AnnouncementsComponent } from './views/current-events/announcements/announcements.component';
import { EventsComponent } from './views/current-events/events/events.component';
import { CharactersComponent } from './views/characters/characters.component';
import { MondstadtComponent } from './views/characters/mondstadt/mondstadt.component';
import { LiyueComponent } from './views/characters/liyue/liyue.component';
import { InazumaComponent } from './views/characters/inazuma/inazuma.component';
import { ComingSoonComponent } from './views/characters/coming-soon/coming-soon.component';
import { MainRegisterComponent } from './components/main-register/main-register.component';
import { SignupComponent } from './components/main-register/signup/signup.component';
import { LoginComponent } from './components/main-register/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainPageHomeComponent,
    MainFooterComponent,
    MainContactComponent,
    CurrentEventsComponent,
    NewsComponent,
    SpotlightComponent,
    AnnouncementsComponent,
    EventsComponent,
    CharactersComponent,
    MondstadtComponent,
    LiyueComponent,
    InazumaComponent,
    ComingSoonComponent,
    MainRegisterComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
