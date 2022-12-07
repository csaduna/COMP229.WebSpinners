import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { IndexModule } from './ads/index.module';
import { IndexComponent } from './ads/index.component';
import { PartialsModule } from './ads/partials/partials.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      // { path: "inventory/list", component: ListComponent },
      // { path: "inventory/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      // { path: "inventory/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard]},
      // { path: "users/signin", component: SignInComponent },
      // { path: "users/signup", component: SignUpComponent },
      { path:"**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
