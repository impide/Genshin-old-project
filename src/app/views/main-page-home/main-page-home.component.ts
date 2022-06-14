import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/core/data/app-store';
import { LegalNotice } from 'src/app/core/data/legal-notice';
import { LocationsDesign } from 'src/app/core/data/location-design';
import { NewsUpdate } from 'src/app/core/data/new-update';
import { SocialLists } from 'src/app/core/data/social-media';

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

  // Social Media
  socialLists: SocialLists[] = SocialLists;

  // Information Legal
  legalNotice: LegalNotice[] = LegalNotice;
  
  constructor() {}

  ngOnInit(): void {}
}

