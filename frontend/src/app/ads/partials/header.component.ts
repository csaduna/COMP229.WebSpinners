import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor(private router: Router, public auth: AuthService) { }
    
    logout() {
        if (confirm("Are you sure you want to logout?")) {
            this.auth.clear();
            this.router.navigateByUrl("/");
        }
    }
}
