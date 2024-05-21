import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SocialConnexion, SocialListsConnexion } from 'src/app/core/data/social-media';
import { SnackBarService } from 'src/app/core/service/snackbar.service';

@Component({
  selector: 'app-main-register',
  templateUrl: './main-register.component.html',
  styleUrls: ['./main-register.component.scss']
})
export class MainRegisterComponent implements OnInit {
  currentPath: string = 'Login';
  checked: boolean = false;
  socialConnexion: SocialListsConnexion[] = SocialConnexion;

  constructor(
    public dialog: MatDialog,
    public snackbar: SnackBarService,
    public router: Router
  ) { }

  ngOnInit(): void {}

  onCloseModal():void {
    this.dialog.closeAll();
  }

  onChangePath(newPath: string) {
    return this.currentPath = newPath;
  }

  onLogin(form: NgForm) {
    this.snackbar.openOfficialLink();
  }

  onSignup(form: NgForm) {
    // Managing Errors
    if (form.value.termOfUse === false) {
      this.snackbar.openSnackBar('You must accept the Term of Use', 4);
      return;
    }
    if (form.invalid) {
      return;
    }
    // Retrieve Forms Data
    const email = form.value.email;
    const password = form.value.password;
    // Execute Ath Service
    console.log(email, password);
    // Change Path & Reset Form
    this.currentPath = 'Login';
    form.reset();
  }

}
