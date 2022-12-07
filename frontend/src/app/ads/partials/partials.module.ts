import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})

export class PartialsModule { }
