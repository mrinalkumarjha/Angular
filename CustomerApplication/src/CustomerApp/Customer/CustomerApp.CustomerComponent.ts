import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { type } from 'os';

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); // to empty customer ui after adding
  }

hasError(typeofValidator: string, controlname: string): boolean {
  return this.CustomerModel
  .formCustomerGroup
  .contains[controlname]
  .hasError(typeofValidator);
}

}
