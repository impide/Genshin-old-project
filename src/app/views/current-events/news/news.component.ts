import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from 'src/app/core/data/current-events';
import { EventsService } from 'src/app/core/service/events.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  contestEvents$: Observable<Events[]> = this.eventsService.contestEvents.asObservable();

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {}


}
