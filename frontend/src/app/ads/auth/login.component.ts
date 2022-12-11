import { Component } from "@angular/core";
import { NgForm} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/model/auth.service";

@Component({
    templateUrl: "login.component.html"
})

export class SignInComponent {
    public username: string;
    public password: string;
    public message: string;

    constructor(private router: Router,
        private auth: AuthService){ }
    authentication(form: NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.username, this.password).subscribe(response => {
                if (response) {
                    this.router.navigateByUrl(this.auth.redirectUrl || "");
                }
                this.message = "Authentication Failed";
            });
        } else {
            this.message = "Form Data Invalid";
        }
    }
}

