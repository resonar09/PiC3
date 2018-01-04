import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    auth: AuthService;
    ngOnInit(): void {
        this.auth = this.authService;
    }
    constructor(private authService: AuthService){  
    }
}