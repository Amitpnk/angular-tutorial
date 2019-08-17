import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customerModel: CustomerModel = new CustomerModel();
  customerModels: Array<CustomerModel> = new Array<CustomerModel>();

  Add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new CustomerModel();
  }

  hasError(typeofValidator: string , controlName : string): boolean{
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }
}
