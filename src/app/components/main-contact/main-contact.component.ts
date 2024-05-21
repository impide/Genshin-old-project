import { Component, OnInit } from '@angular/core';
import { SocialLists } from 'src/app/core/data/social-media';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss']
})
export class MainContactComponent implements OnInit {
  // Social Media
  socialLists: SocialLists[] = SocialLists;
  
  constructor() { }

  ngOnInit(): void {
  }
}
