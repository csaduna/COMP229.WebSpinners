import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { IndexModule } from './products/index.module';
import { IndexComponent } from './products/index.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
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
