import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  locationTeyvat: LocationTeyvat[] = [
    {
      locationName: 'Mondstadt',
      locationPath: '/characters/mondstadt'
    },
    {
      locationName: 'Liyue',
      locationPath: '/characters/liyue'
    },
    {
      locationName: 'Inazuma',
      locationPath: '/characters/inazuma'
    },
    {
      locationName: 'Bientôt disponible',
      locationPath: '/characters/coming-soon'
    },
  ];
}

export interface LocationTeyvat {
  locationName: string;
  locationPath: string;
}