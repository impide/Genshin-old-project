import { Component, HostListener, OnInit } from '@angular/core';
import { AppStore } from 'src/app/core/data/app-store';
import { LocationsDesign } from 'src/app/core/data/location-design';
import { NewsUpdate } from 'src/app/core/data/new-update';

@Component({
  selector: 'app-main-page-home',
  templateUrl: './main-page-home.component.html',
  styleUrls: ['./main-page-home.component.scss']
})
export class MainPageHomeComponent implements OnInit {
  // Games Store 
  stores: AppStore[] = AppStore;

  // News about Games
  newsUpdate: NewsUpdate[] = NewsUpdate;

  // Location Design
  locationsDesign: LocationsDesign[] = LocationsDesign;

  // Sidebar Social
  onShowContactPanel: boolean = true;
  sidebar_variable: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

  onShow(): void {
    this.onShowContactPanel = !this.onShowContactPanel;
  }

    // Background Navbar
    @HostListener("document:scroll")
    scrollfunction(){
      if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
        this.sidebar_variable = true;
      } else {
        this.sidebar_variable = false;
      }
    }
}

