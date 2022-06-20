import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  locationTeyvat: LocationTeyvat[] = [
    {
      locationName: 'Mondstadt'
    },
    {
      locationName: 'Liyue'
    },
    {
      locationName: 'Inazuma'
    },
    {
      locationName: 'Bientôt disponible'
    },
  ]

}

export interface LocationTeyvat {
  locationName: string;
}