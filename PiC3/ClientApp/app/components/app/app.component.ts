import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isAuth:boolean = false;
    constructor(private auth: AuthService){
        console.log(auth);
/*         if (auth.isAuthenticated)
            console.log('true: ' + auth.isAuthenticated);

        else 
            console.log('false: ' + auth.isAuthenticated); */

    }
}
