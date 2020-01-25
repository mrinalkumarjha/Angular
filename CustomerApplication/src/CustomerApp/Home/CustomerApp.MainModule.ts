import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';



@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent
  ],
  imports: [
    // This section is used to import all module used in Customer module
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
