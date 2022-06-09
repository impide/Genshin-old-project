import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/core/data/app-store';

@Component({
  selector: 'app-main-page-home',
  templateUrl: './main-page-home.component.html',
  styleUrls: ['./main-page-home.component.scss']
})
export class MainPageHomeComponent implements OnInit {
  stores: AppStore[] = AppStore;
  
  constructor() {}

  ngOnInit(): void {}
}

