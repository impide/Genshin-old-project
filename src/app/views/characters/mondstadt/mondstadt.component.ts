import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Characters, MondstadtCharacters } from 'src/app/core/data/characters-lists';
import { CharsService } from 'src/app/core/service/characters.service';

@Component({
  selector: 'app-mondstadt',
  templateUrl: './mondstadt.component.html',
  styleUrls: ['./mondstadt.component.scss']
})
export class MondstadtComponent implements OnInit {
  @ViewChild('character_lists') character_lists!: ElementRef<HTMLUListElement>;
  characters$: Observable<Characters[]> = this.charsService.charactersFrom;
  selectedChar$: Observable<number> = this.charsService.selectedChar;
  charImage$: Observable<string>  = this.charsService.charImage;
  
  constructor(
    public charsService: CharsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveRouteData();
  }

  retrieveRouteData() {
    // Retrieve data Url in Route
      if (this.router.url === '/characters/mondstadt') {
        this.charsService.charactersFrom.next(MondstadtCharacters);
        this.charsService.charImage.next(this.charsService.charactersFrom.value[0].charImage);
      }
  }

   // Direction with Click
   onSelectChar(charIndex: number, charImage: string) {
    this.charsService.selectChar(charIndex, charImage, this.character_lists);
  }

  // Direction with Arrows
  onDirectionChar(dir: string) {
    this.charsService.directionChar(dir, this.character_lists);
  }
}