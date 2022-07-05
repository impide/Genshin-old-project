import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SectionTitle } from 'src/app/core/data/navbar-section-title';
import { UserModel } from 'src/app/core/model/user.model';
import { AudioService } from 'src/app/core/service/audio.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { MainRegisterComponent } from '../main-register/main-register.component';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  // Authentification
  isAuth$: Observable<boolean> = this.authService.isAuth$;
  userId$: Observable<UserModel> = this.authService.currentUserData$;

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
    public router: Router,
    private authService: AuthService
  ) { }

  openDialog() {
    if (this.authService.isAuth$.value === true) {
      return;
    }
    this.dialog.open(MainRegisterComponent, {
      panelClass: ['col-4'],
      disableClose: true
    });
  }

  ngOnInit(): void {
    this.audioService.audioData();
    this.abbvrEmail();
  }

  abbvrEmail(): string {
    if (this.authService.isAuth$.value === true) {
      const email = this.authService.getCurrentEmail();
      return email.slice(0,2) + '****' + email.slice(-3);
    } else {
      return "Connexion";
    }
  }

  // Play or Mute
  onPlayAudio(): void {
    this.audioService.audioPlay();
  }

  onLogout(): void {
    this.authService.logout();
  }

  toDownload(): void {
    this.router.navigate(['/main-page-download']);
  }
}