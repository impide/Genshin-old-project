import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainPageHomeComponent } from './views/main-page-home/main-page-home.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainContactComponent } from './components/main-contact/main-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainPageHomeComponent,
    MainFooterComponent,
    MainContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
