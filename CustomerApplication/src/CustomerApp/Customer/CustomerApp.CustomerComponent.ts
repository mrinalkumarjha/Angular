import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Logobj: BaseLogger = null;
  Disable = false;
  constructor(_injector: Injector, public http: HttpClient) {
    this.Logobj = _injector.get("1");
    this.Logobj.Log();
  }

  PostToServer() {
    this.Disable = true;
    var custDto: any = {};
    custDto.CustomerCode = this.CustomerModel.CustomerCode;
    custDto.CustomerName = this.CustomerModel.CustomerName;
    custDto.CustomerAmount = this.CustomerModel.CustomerAmount;

    this.http.post('http://localhost:3000/Customers', custDto).
      subscribe(res => this.Success(res),
        err => this.Error(err));
  }

  GetFromServer() {
    this.http.get('http://localhost:3000/Customers').
      subscribe(res => this.SuccessGet(res),
        err => this.Error(err));
  }

  Error(err) {
    console.log(err);
  }

  Success(res) {
    this.GetFromServer();
  }

  SuccessGet(res) {
    this.CustomerModels = res;
    this.Disable = false;
    this.CustomerModel = new Customer();
  }

  SelectCustomer(_selected: Customer) {
    this.CustomerModel = _selected;
  }

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); // clear UI
  }

  hasError(typeofvalidator: string,
    controlname: string): boolean {
    return this.CustomerModel
      .formCustomerGroup
      .controls[controlname]
      .hasError(typeofvalidator);
  }
}

