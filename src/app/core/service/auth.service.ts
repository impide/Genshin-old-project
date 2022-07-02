import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "@angular/router";
import { environment } from "src/environments/environment";
import { SnackBarService } from "./snackbar.service";

@Injectable({ providedIn: 'root' })
export class AuthService {

    // Token & Api
    private api = environment.api;
    token!: string;

    constructor(
        private http: HttpClient,
        private snackbar: SnackBarService,
    ) {}

      // Create a new User
  signup(email: string, password: string) {
    return this.http.post(this.api + '/users/signup', { email: email, password: password }).subscribe(
      {
        next: () => {
          this.snackbar.openSnackBar('User Created Successfully', 3);
        },
        error: (authData: Data) => {
          this.snackbar.openSnackBar(authData['message'], 5);
        }
      }
    )
  }
}