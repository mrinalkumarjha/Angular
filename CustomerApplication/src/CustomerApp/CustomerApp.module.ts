import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './CustomerApp.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    // This section is used to import all module used in Customer module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
