import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { ILogger, ConsoleLogger, BaseLogger, DbLogger } from '../Utility/CustomerApp.Logger';


// make http call and fill it.
const providerCollection: any =[];
providerCollection.push( { // centralized DI
     provide: BaseLogger, useClass : DbLogger },
);
// conditional
providerCollection.push({provide: '1', useClass: DbLogger});
providerCollection.push({provide: '2', useClass: ConsoleLogger})

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
  providers: [
    // for dependency injection.
    // As javascript dont understand interface so we use BaseLogger instead if interface while providiing in main module.
    providerCollection
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
