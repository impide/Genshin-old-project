import { Component, OnInit } from '@angular/core';
import { LegalNotice } from 'src/app/core/data/legal-notice';
import { SocialLists } from 'src/app/core/data/social-media';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  // Social Media
  socialLists: SocialLists[] = SocialLists;

  // Information Legal
  legalNotice: LegalNotice[] = LegalNotice;

  constructor() { }

  ngOnInit(): void {
  }

}
