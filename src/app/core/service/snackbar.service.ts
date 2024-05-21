import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class SnackBarService {

    constructor(
        private _snackBar: MatSnackBar,
        public router: Router) { }

    openSnackBar(message: string, durationInSeconds: number) {
        this._snackBar.open(message, 'Close', {
            duration: durationInSeconds * 1000,
        });
    }

    openOfficialLink() {
        this._snackBar.open('Thank\'s for your attention about my repo if you like the website, there the official game', 'Here', { duration: 5000 })
            .onAction()
            .subscribe(() => window.open('https://genshin.hoyoverse.com/fr/home', '_blank'));
    }
}
