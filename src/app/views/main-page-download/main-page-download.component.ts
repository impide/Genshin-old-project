import { Component, OnInit } from '@angular/core';
import { FaqData, FaqQuestions } from 'src/app/core/data/faq-question';

@Component({
  selector: 'app-main-page-download',
  templateUrl: './main-page-download.component.html',
  styleUrls: ['./main-page-download.component.scss']
})
export class MainPageDownloadComponent implements OnInit {
  // Questions
  questionsLists : FaqData[] = FaqQuestions;
  first_part = this.questionsLists.slice(0,5);
  second_part = this.questionsLists.slice(5, FaqQuestions.length);

  // Configurations
  selectedSystem: string = 'Windows';

  constructor() { }

  ngOnInit(): void {}

  onShowConfig(system: string): string {
    return this.selectedSystem = system;
  }

}
