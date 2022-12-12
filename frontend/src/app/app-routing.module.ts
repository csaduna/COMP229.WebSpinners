import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './ads/auth/login.component';
import { RegisterComponent } from './ads/auth/register.component';
import { AddEditComponent } from './ads/ads/add_edit.component';
import { ListComponent } from './ads/ads/list.component';
import { IndexComponent } from './ads/index.component';

import { AuthGuard } from "./ads/auth/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: IndexComponent },
            { path: "ads/list", component: ListComponent },
            { path: "ads/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
            { path: "ads/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
            { path: "users/login", component: SignInComponent },
            { path: "users/register", component: RegisterComponent },
            { path: "**", redirectTo: "" }
        ])
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {}