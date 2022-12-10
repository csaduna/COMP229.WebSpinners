import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/app/model/model.module";
import { PartialsModule } from "../partials/partials.module";
import { SignInComponent } from "./login.component";
import { RegisterComponent } from "./register.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule],
    declarations: [SignInComponent, RegisterComponent], 
    exports: [SignInComponent, RegisterComponent]
})

export class AuthModule {}