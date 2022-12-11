import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PartialsModule } from "../partials/partials.module";
import { ListComponent } from "./list.component";
import { ModelModule } from "../../model/model.module";
import { AddEditComponent } from "./add_edit.component";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [ListComponent, AddEditComponent],
    exports: [ListComponent, AddEditComponent]
})

export class AdsModule { }