import { Inject, Injectable, PLATFORM_ID, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';


@Injectable()
export class AuthService {
    base: string;
    isBrowser: boolean;
    isAuth: boolean = false;
    TOKEN_KEY = "token";
    USERNAME_KEY = "username";
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string, private router: Router) {
        this.base = baseUrl;
    }

    get username() {
        if (localStorage.getItem(this.USERNAME_KEY))
            return localStorage.getItem(this.USERNAME_KEY);
    }

    get fullname() {
        if (localStorage.getItem(this.USERNAME_KEY))
            return localStorage.getItem(this.USERNAME_KEY);
    }
    get isAuthenticated() {

        let browserStorage = (typeof localStorage === 'undefined') ? null : localStorage;
        if (browserStorage) {
            return (browserStorage.getItem(this.TOKEN_KEY)) ? true : false;
        }
        return false;
    }


    logout() {
        if (window.localStorage) {
            localStorage.removeItem(this.TOKEN_KEY);
            localStorage.removeItem(this.USERNAME_KEY);
            this.isAuth = false;
            this.router.navigate(['/login']);
        }
    }
    login(user: any) {
        this.http.post(this.base + 'auth/login', user).subscribe(res => {
            this.authenticate(res);
        });

    }
    register(user: any) {
        this.http.post(this.base + 'auth/register', user).subscribe(res => {
            this.authenticate(res);
        });

    }
    authenticate(res: any) {
        var authResponse = res.json();
        if (!authResponse.token)
            return;
        if (window.localStorage) {
            this.isAuth = true;
            localStorage.setItem(this.TOKEN_KEY, authResponse.token);
            localStorage.setItem(this.USERNAME_KEY, authResponse.fullName);
        }
        this.router.navigate(['/']);
    }
}
