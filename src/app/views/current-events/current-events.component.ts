import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/core/data/current-vents';

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.scss']
})
export class CurrentEventsComponent implements OnInit {
  events: Events[] = Events;
  constructor() { }

  ngOnInit(): void {
  }

}
