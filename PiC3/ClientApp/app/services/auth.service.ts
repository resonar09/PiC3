import { Inject,Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    base:string;
    BASE_URL = 'http://localhost:50840/users';
    TOKEN_KEY = "token";
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.base = baseUrl;
    }
    authenticate(user: any) {
        this.http.post(this.base + 'users/authenticate', user).subscribe(res => {
            localStorage.setItem(this.TOKEN_KEY, res.json().token)
        });
    }
}
