import { Inject,Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    base:string;
    TOKEN_KEY = "token";
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.base = baseUrl;
    }
    register(user: any) {
         this.http.post(this.base + 'auth/register', user).subscribe(res => {
            localStorage.setItem(this.TOKEN_KEY, res.json().token)
        }); 

    }
}
