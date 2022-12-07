import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { PartialsModule } from './partials/partials.module';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule, FormsModule, PartialsModule
  ],
  bootstrap: [IndexComponent],
  exports: [IndexComponent]
})

export class IndexModule { }
