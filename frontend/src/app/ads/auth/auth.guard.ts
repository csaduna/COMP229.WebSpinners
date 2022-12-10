import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, 
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { AuthService } from "../../model/auth.service";

@Injectable()
export class AuthGuard {

    constructor(private router: Router,
        private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean 
    {
        if (!this.auth.authenticated) {
            this.auth.redirectUrl = state.url;
            this.router.navigateByUrl("/users/login");
            return false;
        }
        return true;
    }
}