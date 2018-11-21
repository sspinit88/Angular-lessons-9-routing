import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    // пока человек не вошел в систему
    isLoggedIn = false;

    // меняет переменную из isLoggedIn
    logIn() {
        this.isLoggedIn = true;
    }

    //
    logOut() {
        this.isLoggedIn = false;
    }
}
