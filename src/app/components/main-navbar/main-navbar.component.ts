import { Component, HostListener, OnInit } from '@angular/core';
import { SectionTitle } from 'src/app/core/data/navbar-section-title';
import { AudioService } from 'src/app/core/service/audio.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  // Title
  sectionTitle: SectionTitle[] = SectionTitle;

  // Navbar
  header_variable: boolean = false;

  // Background Navbar
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }

  constructor(
    public audioService: AudioService
  ) { }

  ngOnInit(): void {
    this.audioService.audioData();
  }

  // Play or Mute
  onPlayAudio(): void {
    this.audioService.audioPlay();
  }
}