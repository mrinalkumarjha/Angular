import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  logger: BaseLogger = null;

  /**
   *
   */
  constructor(_injector : Injector) {
    this.logger = _injector.get('2');
    this.logger.Log();
  }

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
