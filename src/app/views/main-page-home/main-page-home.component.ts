import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/core/data/app-store';
import { NewsUpdate } from 'src/app/core/data/new-update';

@Component({
  selector: 'app-main-page-home',
  templateUrl: './main-page-home.component.html',
  styleUrls: ['./main-page-home.component.scss']
})
export class MainPageHomeComponent implements OnInit {
  stores: AppStore[] = AppStore;
  newsUpdate: NewsUpdate[] = NewsUpdate;
  
  constructor() {}

  ngOnInit(): void {}
}

