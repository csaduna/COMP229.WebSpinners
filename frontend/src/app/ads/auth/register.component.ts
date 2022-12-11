import { Component } from "@angular/core";
import { NgForm} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/model/auth.service";
import { User } from "src/app/model/user.model";

@Component({
    templateUrl: "register.component.html"
})

export class RegisterComponent {
    public user: User = new User();
    public confirmPassword: string;
    public message: string;

    constructor(private router: Router,
        private auth: AuthService){ }

    register(form: NgForm) {
        if (form.valid) {
            if (this.user.password == this.confirmPassword){
                this.auth.signupUser(this.user)
            .subscribe(response => {
                if (response.success) {
                    alert(response.message)
                    this.router.navigateByUrl("/users/login");
                }
                this.message = response.message;
            });
            } else {
                this.message = "Passwords do not match."
            }
        } else {
            this.message = "Form Data Invalid";
        }
    }
}