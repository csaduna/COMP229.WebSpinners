import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule
  ],
  bootstrap: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})

export class PartialsModule { }
