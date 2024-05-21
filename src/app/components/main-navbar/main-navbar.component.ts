import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SectionTitle } from 'src/app/core/data/navbar-section-title';
import { AudioService } from 'src/app/core/service/audio.service';
import { MainRegisterComponent } from '../main-register/main-register.component';

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
    public audioService: AudioService,
    public dialog: MatDialog,
    public router: Router
  ) { }

  openDialog() {
    this.dialog.open(MainRegisterComponent, {
      panelClass: ['col-4'],
      disableClose: true
    });
  }

  ngOnInit(): void {
    this.audioService.audioData();
  }

  // Play or Mute
  onPlayAudio(): void {
    this.audioService.audioPlay();
  }

  toDownload(): void {
    this.router.navigate(['/main-page-download']);
  }
}