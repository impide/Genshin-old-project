import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/core/data/current-events';
import { EventsService } from 'src/app/core/service/events.service';

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.scss']
})
export class CurrentEventsComponent implements OnInit {
  events: Events[] = Events;

  constructor(
    private eventsService: EventsService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  sectionsTitle: Sections[] = [
    {
      title: 'Nouveautés',
      path: 'news'
    },
    {
      title: 'À la une',
      path: '#'
    },
    {
      title: 'Annonce',
      path: '#'
    },
    {
      title: 'Événements',
      path: '#'
    },
  ]

  onShowMoreEvents() {
    this.eventsService.onShowMoreEvents()
  }
}

export interface Sections {
  title: string;
  path: string;
}