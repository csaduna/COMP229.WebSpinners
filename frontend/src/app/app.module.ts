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
