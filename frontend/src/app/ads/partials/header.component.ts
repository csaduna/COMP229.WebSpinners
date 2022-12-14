import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Injectable } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

@Injectable({
    providedIn: 'root'
})

export class HeaderComponent {
    @Input() title?: string;

    constructor(private router: Router, public auth: AuthService) { }
    
    logout() {
        if (confirm("Are you sure you want to logout?")) {
            this.auth.clear();
            this.router.navigateByUrl("/");
        }
    }

    }


