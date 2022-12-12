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
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IndexModule,
    PartialsModule,
    AdsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
