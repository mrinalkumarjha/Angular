import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';
import { from } from 'rxjs';
import { MyInterceptor } from '../Utility/MyInterceptor';

const providerscoll: any = [];
// http call get this from the server
providerscoll.push({ provide: "1", useClass: DbLogger });
providerscoll.push({ provide: "2", useClass: ConsoleLogger });
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger });
providerscoll.push({ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true });

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [providerscoll]
  ,
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
