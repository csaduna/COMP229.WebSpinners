import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './ads/ads/list.component';
import { IndexModule } from './ads/index.module';
import { IndexComponent } from './ads/index.component';
import { PartialsModule } from './ads/partials/partials.module';
import { AdsModule } from './ads/ads/ads.module';
import { AuthModule } from './ads/auth/auth_module';
import { SignInComponent } from './ads/auth/login.component';
import { RegisterComponent } from './ads/auth/register.component';
import { AuthGuard } from './ads/auth/auth.guard';
import { AddEditComponent } from './ads/ads/add_edit.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
    AdsModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "ads/list", component: ListComponent },
      { path: "ads/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      { path: "ads/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard]},
      { path: "users/login", component: SignInComponent },
      { path: "users/register", component: RegisterComponent },
      { path:"**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
